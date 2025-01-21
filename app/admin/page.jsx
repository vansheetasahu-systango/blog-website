 'use client';

import { useState, useEffect } from "react";
import AdminCheck from "../components/AdminCheck";
import BlogActions from "../components/BlogActions";
import AdminLogoutButton from "./AdminLogoutButton";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://6787e220c4a42c9161089db1.mockapi.io/blogs", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <AdminCheck />
      <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
      <AdminLogoutButton />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="p-6 bg-gradient-to-t from-pink-50 to-amber-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <div className="mt-4 space-x-4">
              <BlogActions blogId={blog.id} blog={blog} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
