'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AmenitiesList from '../components/AmenitiesList';
import ContactBox from '../components/ContactBox';
import ImageCarousel from '../components/ImageCarousel';
import MapComponent from '../components/MapComponent';

interface Listing {
    _id: string;
    title: string;
    address: string;
    price: number;
    imageUrl: string;
    location: {
        lat: number;
        lng: number;
    };
    squareFeet: number;
    bedrooms: number;
    bathrooms: number;
    amenities?: string[];  // Changed to string[] to match AmenitiesList
    description?: string;
    // Added fields for ContactBox
    ownerName: string;
    ownerPicture: string;
    ownerEmail: string;
    ownerPhone: string;
}

export default function ListingPage() {
    const params = useParams();
    const id = params?.id as string;
    const [listing, setListing] = useState<Listing | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListing = async () => {
            if (!id) return;
            
            try {
                const response = await fetch(`/api/listings/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch listing');
                }
                const data = await response.json();
                setListing(data);
            } catch (error) {
                console.error('Error fetching listing:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!listing) {
        return <div>Listing not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <ImageCarousel images={[listing.imageUrl]} />
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-2">Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">Price:</p>
                                <p>${listing.price}/month</p>
                            </div>
                            <div>
                                <p className="font-semibold">Square Feet:</p>
                                <p>{listing.squareFeet}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Bedrooms:</p>
                                <p>{listing.bedrooms}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Bathrooms:</p>
                                <p>{listing.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                    {listing.amenities && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold mb-2">Amenities</h2>
                            <AmenitiesList items={listing.amenities} />
                        </div>
                    )}
                    {listing.description && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold mb-2">Description</h2>
                            <p>{listing.description}</p>
                        </div>
                    )}
                </div>
                <div>
                    <MapComponent 
                        address={listing.address}
                        lat={listing.location.lat}
                        long={listing.location.lng}
                    />
                    <div className="mt-6">
                        <ContactBox 
                            name={listing.ownerName}
                            picture={listing.ownerPicture}
                            email={listing.ownerEmail}
                            phone={listing.ownerPhone}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}