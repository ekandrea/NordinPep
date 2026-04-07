import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split('\n\n');

  return (
    <section className="section">
      <div className="container">
        <article className={styles.article}>
          <Link href="/blog" className={styles.back}>&larr; Tillbaka till bloggen</Link>

          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>&middot;</span>
            <span>{post.readTime}</span>
            <span className={styles.dot}>&middot;</span>
            <time>{new Date(post.date).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.content}>
            {paragraphs.map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className={styles.h2}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className={styles.h3}>{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              if (paragraph.startsWith('**')) {
                const match = paragraph.match(/^\*\*(.+?)\*\*\s*(.*)/s);
                if (match) {
                  return (
                    <p key={i} className={styles.paragraph}>
                      <strong>{match[1]}</strong> {match[2]}
                    </p>
                  );
                }
              }
              return <p key={i} className={styles.paragraph}>{paragraph}</p>;
            })}
          </div>

          <div className={styles.disclaimer}>
            <p>
              Denna artikel tillhandahålls i utbildnings- och informationssyfte. Alla
              nämnda produkter är avsedda för forsknings- och laboratoriebruk. Ej avsedda
              för mänsklig konsumtion.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
