import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        const listing = await db.collection("Listing").findOne({
            _id: new ObjectId(params.id)
        });

        if (!listing) {
            return NextResponse.json(
                { error: 'Listing not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            ...listing,
            _id: listing._id.toString()
        });

    } catch (error) {
        console.error('Error fetching listing:', error);
        return NextResponse.json(
            { error: 'Failed to fetch listing' },
            { status: 500 }
        );
    }
}