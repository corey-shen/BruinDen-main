import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { FormData } from 'formdata-node';

const CLOUDINARY_CLOUD_NAME = 'dqcbpcd1p';
const CLOUDINARY_UPLOAD_PRESET = 'cloudinary://<517359327955144>:<z62QaVFqvBYJVJDr0QJXtdltvAM>@dqcbpcd1p';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const data: { [key: string]: any } = {};
        for (const [key, value] of formData.entries()) {
            if (typeof value === 'string') {
                data[key] = value;
            } else if (value instanceof File) {
                data[key] = value;
            }
        }
        console.log('Received data in API:', data);

        const client = await clientPromise;
        console.log('MongoDB connected');

        const db = client.db("test");
        const collection = db.collection("Listing");

        interface Location {
            lat: number;
            lng: number;
        }

        const apiKey = "AIzaSyCAjObRh3RGPQ-pDnvPGETfWGnlE3AUotM";
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(data.address)}&key=${apiKey}`;

        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (geocodeData.status !== "OK") {
            throw new Error(`Geocoding failed: ${geocodeData.error_message || geocodeData.status}`);
        }

        const location: Location = { // getting latitude and longitude
            lat: geocodeData.results[0].geometry.location.lat,
            lng: geocodeData.results[0].geometry.location.lng,
        };

        console.log('Geocoded location:', location);

        const imageFile = formData.get('image') as File | null;
        let imageUrl = "api/placeholder/800/600";

        if (imageFile) {
            // Uploading the image to Cloudinary and get the URL
            imageUrl = await uploadImageToCloudinary(imageFile);
        }

        const listingData = {
            title: "Apartment Listing",
            category: "categories",
            address: data.address,
            price: Number(data.price),
            bathrooms: Number(data.bathrooms),
            bedrooms: Number(data.bedrooms),
            imageUrl: imageUrl,
            location: location,
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

async function uploadImageToCloudinary(file: File): Promise<string> {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        urlSearchParams.append(key, value as string);
    }

    const response = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: urlSearchParams,
    });

    if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.secure_url;
}