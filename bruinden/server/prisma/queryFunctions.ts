// npm install @prisma/client
// npx prisma generate

import prisma from '../prisma/libs/prismadb';

// LISTING QUERY FUNCTIONS

async function updateListing(
    id: string,
    data: {
        title?: string;
        description?: string;
        imageSrc?: string;
        roomCount?: number;
        bathroomCount?: number;
        price?: number;
        category?: string;
    }) {
        try {
            const updatedListing = await prisma.Listing.update({
                where: {
                    id,
                },
                data: {
                    ...data,
                }
            });
            return updatedListing;
        } catch (error) {
            console.error("ERROR UPDATING LISTING: ", error);
            throw new Error("LISTING COULD NOT BE UPDATED");
        }
}

async function deleteListing(id: string) {
    try {
        const deletedListing = await prisma.Listing.delete({
            where: {
                id,
            },
        });
        return deletedListing;
    } catch (error) {
        console.error("ERROR DELETING LISTING: ", error);
        throw new Error("LISTING COULD NOT BE DELETED");
    }
}

async function getListingByFilter(listing_name?: string, date_posted?: Date, bedroom_count?: number, bathroom_count?: number, price_lower?: number, price_upper?: number) { // Update to take in a map of values instead
    return await prisma.Listing.findMany({
        where: {
            ...(listing_name && { title: { contains: listing_name, mode: 'insensitive', },}),
            ...(date_posted && { createdAt: { equals: date_posted },}), // most likely change this for better use cases
            ...(bedroom_count && { roomCount: bedroom_count }),
            ...(bathroom_count && { bathroomCount: bathroom_count }),
            ...(price_lower !== undefined && price_upper !== undefined
                ? {
                    price: {
                        ...(price_lower !== undefined && {gte: price_lower}),
                        ...(price_upper !== undefined && {lte: price_upper}),
                    },
                }
                : {}),
        },
    });
}