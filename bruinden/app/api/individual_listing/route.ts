import { NextApiRequest, NextApiResponse } from 'next';
import  clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id } = req.query;
    if (!id || typeof id !== 'string') {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("test"); // change when deployed
        const listing = await db.collection("listings").findOne({
            __id: new ObjectId(id),
        });

        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        res.status(200).json(listing);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to fetch listing" });
    }
}