import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    console.log('Search query:', query);

    if (!query) {
      return NextResponse.json([]);
    }

    const client = await clientPromise;
    const db = client.db("test");

    const listings = await db.collection("Listing").find({
      address: { 
        $regex: query, 
        $options: 'i' 
      }
    }).toArray();

    console.log('Found listings:', listings);

    return NextResponse.json(listings);

  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}