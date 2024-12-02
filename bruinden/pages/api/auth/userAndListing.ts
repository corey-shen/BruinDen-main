import { NextApiRequest, NextApiResponse } from "next";
import { getUserByEmail } from "../auth/queryFunction"; // Importing the function to check the email

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { email } = req.query; // Extract email from query parameters

  try {
    if (method === "GET") {
      if (!email) {
        return res.status(400).json({ message: "Email parameter is required" });
      }

      // Step 2: Call the getUserByEmail function to check if the email exists in the database
      const user = await getUserByEmail(email as string);

      if (user) {
        // If user exists, return user data
        return res.status(200).json({ user });
      } else {
        // If user does not exist, return null or an empty response
        return res.status(200).json({ user: null });
      }
    } else {
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
