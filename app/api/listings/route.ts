// app/api/listings/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const sampleListings = [
      {
        title: 'Modern Apartment near UCLA',
        address: '123 Westwood Blvd',
        price: 2500,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0689,
          lng: -118.4452
        },
        squareFeet: 800,
        bedrooms: 2,
        bathrooms: 1
      },
      {
        title: 'Studio in Westwood',
        address: '456 Gayley Ave',
        price: 1800,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0661,
          lng: -118.4506
        },
        squareFeet: 500,
        bedrooms: 1,
        bathrooms: 1
      },
      {
        title: 'Luxury Condo with Views',
        address: '789 Levering Ave',
        price: 3500,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0707,
          lng: -118.4478
        },
        squareFeet: 1200,
        bedrooms: 3,
        bathrooms: 2
      },
      {
        title: 'Cozy Student Housing',
        address: '321 Landfair Ave',
        price: 1600,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0675,
          lng: -118.4500
        },
        squareFeet: 450,
        bedrooms: 1,
        bathrooms: 1
      },
      {
        title: 'Spacious Family Home',
        address: '567 Kelton Ave',
        price: 4200,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0665,
          lng: -118.4520
        },
        squareFeet: 1800,
        bedrooms: 4,
        bathrooms: 3
      },
      {
        title: 'Modern Studio Loft',
        address: '890 Veteran Ave',
        price: 2100,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0680,
          lng: -118.4510
        },
        squareFeet: 600,
        bedrooms: 1,
        bathrooms: 1
      },
      {
        title: 'Penthouse Apartment',
        address: '234 Hilgard Ave',
        price: 5000,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0695,
          lng: -118.4440
        },
        squareFeet: 2000,
        bedrooms: 4,
        bathrooms: 3.5
      },
      {
        title: 'Budget Friendly Studio',
        address: '432 Midvale Ave',
        price: 1500,
        imageUrl: '/api/placeholder/800/600',
        location: {
          lat: 34.0670,
          lng: -118.4530
        },
        squareFeet: 400,
        bedrooms: 0,
        bathrooms: 1
      }
    ];

    // Check if listings exist
    let listings = await db.collection('Listing').find({}).toArray();
    
    // If no listings exist, insert sample data
    if (listings.length === 0) {
      await db.collection('Listing').insertMany(sampleListings);
      // Fetch the newly inserted listings from the database
      listings = await db.collection('Listing').find().toArray();
    }

    return NextResponse.json(listings);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}