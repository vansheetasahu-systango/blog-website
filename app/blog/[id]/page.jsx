import BlogDetails from "@/app/components/BlogDetails";
import { fetchBlogs } from "@/app/lib/utils/fetchBlogs";

export default async function BlogPage({ params }) {
  const { id } = params;

  // Fetch all blogs or a specific blog
  const blogs = await fetchBlogs();
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
}
