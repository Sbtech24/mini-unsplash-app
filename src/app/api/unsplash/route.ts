// app/api/unsplash/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query param" }, { status: 400 });
  }

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 10,
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`, 
      },
    });

    return NextResponse.json(response.data);
  } catch (error:any) {
    console.error("Unsplash API error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to fetch from Unsplash" }, { status: 500 });
  }
}
