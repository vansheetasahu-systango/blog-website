/* Modified file: app/page.jsx */
import BlogList from "./components/Blog/BlogList";
import Link from "next/link";
import ShareBlog from "./components/Blog/ShareBlog";

async function fetchBlogs(searchQuery = "") {
  const res = await fetch("https://6787e220c4a42c9161089db1.mockapi.io/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const blogs = await res.json();
  return blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export default async function Home({ searchParams }) {
  const searchQuery = searchParams?.query || "";
  const blogs = await fetchBlogs(searchQuery);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
         <ShareBlog/>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>

      <BlogList blogs={blogs} />
    </main>
  );
}
