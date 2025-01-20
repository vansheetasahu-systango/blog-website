"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState(""); // Changed to accept URL
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const validateForm = () => {
    if (title.length < 5) {
      return "Title must be at least 5 characters.";
    }
    if (content.length < 100) {
      return "Content must be at least 100 characters.";
    }
    if (!author.trim()) {
      return "Author is required.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Thumbnail URL being sent:", thumbnail); // Add this log to inspect the URL
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    const newBlog = {
      title,
      content,
      author,
      date: new Date().toISOString(),
      image: thumbnail || "https://via.placeholder.com/150", // Use provided URL or fallback to placeholder
    };

    try {
      const response = await fetch(
        "https://6787e220c4a42c9161089db1.mockapi.io/blogs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlog),
        }
      );

      if (response.ok) {
        router.push("/"); // Redirect to homepage
      } else {
        setErrorMessage("Failed to create blog post. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Thumbnail (Image URL)</label>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}