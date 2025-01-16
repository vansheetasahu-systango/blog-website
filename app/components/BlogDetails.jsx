import styles from "./BlogDetails.module.css";

const authorBio = {
  "Alice Johnson": "Alice is a seasoned web developer with 10 years of experience.",
  "Bob Smith": "Bob specializes in AI and ML technologies.",
  "Charlie Adams": "Charlie has been a tech writer focusing on remote work.",
  "David Lee": "David is a cybersecurity analyst with 15 years of expertise.",
  "Emma Davis": "Emma is a blockchain enthusiast exploring its real-world applications."
};

const BlogDetails = ({ blog }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.meta}>
        <span>By {blog.author}</span> | <span>{new Date(blog.date).toDateString()}</span>
      </p>
      <div className={styles.content}>
        <p>{blog.content}</p>
      </div>
      <div className={styles.authorBio}>
        <h3>About the Author</h3>
        <p>{authorBio[blog.author]}</p>
      </div>
      <button className={styles.backButton} onClick={() => history.back()}>
        Back to Homepage
      </button>
    </div>
  );
};

export default BlogDetails;
