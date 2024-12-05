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
    
    const listingData = {
      title: "Apartment Listing",
      address: data.address,
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
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
      { error: 'Failed to create listing', details: error.message },
      { status: 500 }
    );
  }
}