import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Extract dynamic route parameter for retrieving the feed
  const { feed } = req.query;

  if (!feed || typeof feed !== "string") {
    return res.status(400).json({ error: "Feed parameter is required" });
  }

  try {
    const response = await fetch(`https://feeds.nos.nl/${feed}`);
    let data = await response.text();

    // Remove XML stylesheet processing instruction to retrieve XML only
    // Otherwise the XML is not parsed right
    data = data.replace(/<\?xml-stylesheet .*?\?>/, "").trim();

    // Convert XML to JSON
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "_",
    });
    const jsonData = parser.parse(data);

    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error fetching NOS feed:", error);
    return res.status(500).json({ error: "Failed to fetch NOS news feed" });
  }
}
