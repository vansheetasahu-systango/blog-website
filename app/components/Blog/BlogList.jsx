 /* Modified file: app/components/Blog/BlogList.jsx */
import Link from "next/link"; // Here's the change: Added Link import

async function fetchBlogs() {
  // Fetch blogs from the mock API
  const res = await fetch('https://6787e220c4a42c9161089db1.mockapi.io/blogs', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

export default async function BlogList({ blogs = [] }) {
  if (blogs.length === 0) {
    blogs = await fetchBlogs();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          {/* Here's the change: Wrapped each blog card in a Link */}
          <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
            <img
              src={blog.image || "/images/default-thumbnail.jpg"}
              alt={blog.title || "Untitled"}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{blog.title || 'Untitled'}</h2>
            <p className="text-gray-700">
              {blog.content?.slice(0, 100) || 'No description available'}...
            </p>
            <p className="text-sm text-gray-500">By {blog.author || 'Anonymous'}</p>
            <p className="text-sm text-gray-500">
              on {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unknown date'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
