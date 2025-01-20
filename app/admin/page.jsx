import { getAllBlogs } from "../lib/blogs"; 
import AdminCheck from "../components/AdminCheck";
import BlogActions from "../components/BlogActions";

export default async function AdminDashboard() {
  const blogs = await getAllBlogs();

  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <AdminCheck /> 
      <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="p-6 bg-gradient-to-t from-pink-50 to-amber-50 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
          <p className="text-gray-600">{blog.description}</p>
          <div className="mt-4 space-x-4">
            <BlogActions blogId={blog.id} blog={blog} /> 
          </div>
        </div>
      ))}
    </div>
  );
}
