import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data in API:', data);

    const client = await clientPromise;
    console.log('MongoDB connected');

    const db = client.db("test");
    
    // Log the collection and databases
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));

    // Format the data for MongoDB
    const listingData = {
      title: "Apartment Listing",
      address: data.address,
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      squareFeet: Number(data.squareFeet),
      amenities: data.amenities,
      description: data.description,
      imageUrl: "/api/placeholder/800/600",
      createdAt: new Date()
    };
    console.log('Formatted listing data:', listingData);

    const result = await db.collection("Listing").insertOne(listingData);
    console.log('MongoDB insert result:', result);

    return NextResponse.json({
      success: true,
      _id: result.insertedId.toString()
    });

  } catch (error: any) { 
    console.error('API Error:', error?.message || 'Unknown error');
    return NextResponse.json(
      { 
        error: 'Failed to create listing', 
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}