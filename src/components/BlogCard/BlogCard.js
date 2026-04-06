import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.dot}>&middot;</span>
        <span className={styles.time}>{post.readTime}</span>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <span className={styles.readMore}>Läs artikel &rarr;</span>
    </Link>
  );
}
