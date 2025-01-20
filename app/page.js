  /* Modified file: app/page.jsx */
import BlogList from "./components/Blog/BlogList";
 
import Link from "next/link";
async function fetchBlogs(searchQuery = "") {
    const res = await fetch('https://6787e220c4a42c9161089db1.mockapi.io/blogs', { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const blogs = await res.json();

    return blogs.filter(blog =>
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
    <Link
      href="/blog/create"
      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 shadow-md transition-all duration-200"
    >
      Create New Blog Form
    </Link>
  </div>
              <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>
            
            <BlogList blogs={blogs} />
        </main>
    );
}
