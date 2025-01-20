 "use client";
 import styles from "./BlogDetails.module.css";
// import styles from "./BlogCard.module.css";
import authorBio from "./AuthorBio"; // Import author bio from AuthorBio.jsx
 

const BlogDetails = ({ blog }) => {
  // Handle back button click
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
   
      <div className={styles.imageWrapper}>
        <img
          src={blog.image || "/images/default-thumbnail.jpg"}
          alt={blog.title || "Blog Thumbnail"}
          className={styles.thumbnail}
        />
      </div>
 
      <div className={styles.contentWrapper}>
       
        <h1 className={styles.title}>{blog.title || "Untitled Blog"}</h1>
 
        <p className={styles.meta}>
          <span>
            By <strong>{blog.author || "Anonymous"}</strong>
          </span>{" "}
          |{" "}
          <span>
            <em>
              {blog.date
                ? new Date(blog.date).toLocaleDateString()
                : "Unknown Date"}
            </em>
          </span>
        </p>

     
        <p className={styles.description}>
          {blog.description || "No description available."}
        </p>

        
        <div className={styles.content}>
          <p>{blog.content || "No content available."}</p>
        </div>
 
        <div className={styles.authorBio}>
          <h3>About the Author</h3>
          <p>{authorBio[blog.author] || "Author bio not available."}</p>
        </div>
 
        <button className={styles.backButton} onClick={handleBack}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
