import React from 'react';
import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

interface ListingsMapProps {
    listings: Array<{
        _id: string;
        location: {
            lat: number;
            lng: number;
        };
    }>;
    onMarkerClick: (id: string) => void;
}

const ListingsMapComponent: React.FC<ListingsMapProps> = ({listings, onMarkerClick}) => {
    return (
        <APIProvider apiKey={"INSERT_KEY_HERE"}>
            <Map
                style={{width: '60vw', height: '70vh'}}
                defaultZoom={15}
                defaultCenter={{lat: 34.0689, lng: -118.4452}} // UCLA coordinates
                mapId='INSERT_MAP_ID_HERE'
            >
                {listings.map((listing) => (
                    <AdvancedMarker
                        key={listing._id}
                        position={{lat: listing.location.lat, lng: listing.location.lng}}
                        onClick={() => onMarkerClick(listing._id)}
                    >
                        <Pin background="#ff0a0a" glyphColor="#9c2222" borderColor="ff0a0a"/>
                    </AdvancedMarker>
                ))}
            </Map>
        </APIProvider>
    );
}

export default ListingsMapComponent;