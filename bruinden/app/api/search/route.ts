import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    console.log('Search query:', query); // Debug log

    if (!query) {
      return NextResponse.json([]);
    }

    const client = await clientPromise;
    console.log('MongoDB connected'); 

    const db = client.db("test");
    console.log('Using database:', db.databaseName); // Debug log

    // Log collection contents
    const count = await db.collection("Listing").countDocuments();
    console.log('Number of documents in Listing collection:', count);

    const listings = await db.collection("Listing").find({
      $or: [
        { address: { $regex: query, $options: 'i' } },
        { title: { $regex: query, $options: 'i' } }
      ]
    })
    .limit(10)
    .toArray();

    console.log('Found listings:', listings); // Debug log

    const formattedListings = listings.map(listing => ({
      ...listing,
      _id: listing._id.toString()
    }));

    return new NextResponse(JSON.stringify(formattedListings), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (e) {
    console.error('Detailed error:', e) // More detailed error logging
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch listings' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}