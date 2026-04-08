import BlogCard from '@/components/BlogCard/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import styles from './page.module.css';

export const metadata = {
  title: 'Peptidforskning & Laboratorieguidar',
  description: 'Vetenskapliga artiklar om forskningspeptider. Genomgångar av BPC-157, Selank, GHK-Cu, rekonstituering och analysbevis för laboratoriepersonal.',
};

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Forskningsblogg</h1>
          <p className={styles.subtitle}>
            Fördjupande artiklar om peptidforskning, laboratorieguidar och substansjämförelser.
          </p>
        </div>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
