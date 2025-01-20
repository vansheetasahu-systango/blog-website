// File: blog-website-main/app/api/blogs/route.js

import { NextResponse } from "next/server";

const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query")?.toLowerCase() || "";

    try {
        const response = await fetch(API_URL);
        const blogs = await response.json();

        // Filter blogs based on title, description, or content
        const filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(query) ||
            blog.description.toLowerCase().includes(query) ||
            blog.content.toLowerCase().includes(query)
        );

        return NextResponse.json(filteredBlogs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
