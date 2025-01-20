import BlogDetails from "../../components/Blog/BlogDetails";
import styles from "./Page.module.css";

// Fetch blog details based on the dynamic ID
async function fetchBlogDetails(id) {
  const res = await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }
  return res.json();
}

export default async function BlogPage({ params }) {
  const { id } =await params;
  const blog = await fetchBlogDetails(id);

  return (
    <div className={styles.container}>
      <BlogDetails blog={blog} />
    </div>
  );
}
