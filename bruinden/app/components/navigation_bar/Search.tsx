'use client';

import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Location {
    lat: number;
    lng: number;
}

interface Listing {
    _id: string;
    title: string;
    address: string;
    price: number;
    imageUrl: string;
    location: Location;
    squareFeet: number;
    bedrooms: number;
    bathrooms: number;
}

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery.trim()) {
                setListings([]);
                return;
            }

            try {
                setIsLoading(true);
                console.log('Searching for:', searchQuery); // Debug log
                const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
                console.log('Response:', response); // Debug log
                
                const data = await response.json();
                console.log('Search results:', data); // Debug log
                
                setListings(data);
            } catch (error) {
                console.error('Search failed:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchSearchResults, 300);
        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    return (
        <div className="relative w-full">
            <div className="w-full md:w-auto py-2 px-8 rounded-full hover:shadow-lg transition-shadow cursor-pointer bg-white">
                <div className="flex flex-row items-center space-x-3">
                    <BiSearch size={30} color="#2F4858" />
                    <input 
                        type="text" 
                        placeholder="Search by address"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowResults(true);
                        }}
                        className="flex-1 outline-none text-lg placeholder-gray-500"
                        style={{ color: '#2F4858', fontSize: '30px' }}
                    />
                </div>
            </div>

            {/* Debug: Show current search state */}
            {showResults && searchQuery && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                    {isLoading ? (
                        <div className="p-4">Searching...</div>
                    ) : listings.length > 0 ? (
                        listings.map((listing) => (
                            <div
                                key={listing._id}
                                onClick={() => router.push(`/listing/${listing._id}`)}
                                className="p-4 hover:bg-gray-100 cursor-pointer text-black"
                            >
                                <div>{listing.address}</div>
                                <div className="text-sm text-gray-600">
                                    ${listing.price}/month · {listing.bedrooms} beds · {listing.bathrooms} baths
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;