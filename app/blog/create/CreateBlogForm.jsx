"use client";
import { useState } from "react";
import styles from "./CreateBlog.module.css";

const CreateBlogForm = ({ onBlogCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result); // Save base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    const newBlog = {
      title,
      content,
      author,
      date: new Date().toISOString(),
      image: thumbnail || "/images/default-thumbnail.jpg",  
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
        const createdBlog = await response.json();
        onBlogCreated(createdBlog);  
        setMessage("Blog post created successfully!");
        setTitle("");
        setContent("");
        setAuthor("");
        setThumbnail("");
      } else {
        setMessage("Failed to create blog post. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Blog Post</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Thumbnail:</label>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
