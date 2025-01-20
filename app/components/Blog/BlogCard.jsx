import styles from './BlogCard.module.css';

export default function BlogCard({ title, description, author, date, thumbnail }) {
    return (
        <div className={styles.card}>
             <img src={thumbnail || "https://via.placeholder.com/150"} alt={title} className={styles.thumbnail} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.meta}>
                    <span className={styles.author}>By {author}</span>
                    <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
