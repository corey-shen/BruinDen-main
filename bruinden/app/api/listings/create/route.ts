import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data in API:', data);

    const client = await clientPromise;
    console.log('MongoDB connected');

    const db = client.db("test");
    const collection = db.collection("Listing");

    interface Location {
      lat: number;
      lng: number;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Google maps API
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(data.address)}&key=${apiKey}`;

    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();

    if (geocodeData.status !== "OK") { // verifying
      throw new Error(`Geocoding failed: ${geocodeData.error_message || geocodeData.status}`);
    }

    const location: Location = { // Passing in location as an object later
      lat: geocodeData.results[0].geometry.location.lat,
      lng: geocodeData.results[0].geometry.location.lng,
    };

    console.log('Geocoded location:', location); // for debugging

    const listingData = {
      title: "Apartment Listing",
      category: "categories",
      address: data.address,
      price: Number(data.price),
      bathrooms: Number(data.bathrooms),
      bedrooms: Number(data.bedrooms),
      imageUrl: "api/placeholder/800/600",
      location: location, // API parses location for its longitude and latitude
      squareFeet: Number(data.squareFeet),
      amenities: data.amenities,
      description: data.description,
      createdAt: new Date()
    };

    console.log('Attempting to insert:', listingData);
    const result = await collection.insertOne(listingData);
    console.log('Insert result:', result);

    return NextResponse.json({
      success: true,
      _id: result.insertedId.toString()
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to create listing', details: error.message }, // Debugging
      { status: 500 }
    );
  }
}