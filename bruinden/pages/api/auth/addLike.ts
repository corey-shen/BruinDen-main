import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/prisma/libs/prismadb"; // Assuming prisma client is set up properly

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, listingId } = req.body; // Assuming body contains these two fields

    // Check if both userId and listingId are provided
    if (!userId || !listingId) {
      return res.status(400).json({ error: "Missing required fields: userId or listingId" });
    }

    try {
      // Create a new favorite entry
      const favorite = await prisma.favorite.create({
        data: {
          userId, // Link to the user who is favoriting the listing
          listingId, // Link to the listing being favorited
        },
      });

      // Respond with the created favorite
      res.status(201).json(favorite);
    } catch (error) {
      console.error("Error adding favorite:", error);
      res.status(500).json({ error: "Failed to add favorite" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
