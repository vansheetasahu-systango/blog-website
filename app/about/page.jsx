import React from "react";
import styles from "./about.module.css";
import { User, Star, Mail } from "lucide-react";

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Blog</h1>
        <p>Your daily dose of inspiration and knowledge!</p>
      </header>

      <section className={styles.section}>
        <h2>
          <User className={styles.icon} /> About Me
        </h2>
        <p>
            we created this blog to share knowledge, experiences, and
          inspiration with like-minded individuals.
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          <Star className={styles.icon} /> My Mission
        </h2>
        <p>
          This blog is all about engineering innovations, sports insights, and
          personal growth stories. My goal is to inspire readers to chase their
          dreams and excel in life.
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          <Mail className={styles.icon} /> Contact Me
        </h2>
        <p>
          Have questions or want to connect? Feel free to reach out at{" "}
          <a href="mailto:youremail@example.com" className={styles.link}>
            youremail@example.com
          </a>.
        </p>
      </section>
    </div>
  );
};

export default About;
