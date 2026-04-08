'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import Newsletter from '@/components/Newsletter/Newsletter';
import { getPopularProducts } from '@/data/products';
import styles from './page.module.css';

const trustBadges = [
  { icon: '◎', title: 'Labbtestad', desc: 'Tredjepartsverifierad renhet' },
  { icon: '◆', title: 'Fri Frakt', desc: 'Över 500 kr i Sverige' },
  { icon: '▣', title: 'Snabb Leverans', desc: '2-4 dagar i Sverige' },
  { icon: '⬡', title: '≥98% Renhet', desc: 'Varje batch testad' },
];

export default function Home() {
  const popular = getPopularProducts();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.badge}>Lansering snart</span>
          <h1 className={styles.title}>
            Forskningsreagenser
            <br />
            <span className={styles.accent}>Av Högsta Kvalitet</span>
          </h1>
          <p className={styles.subtitle}>
            Vi säljer labbtestade forskningsreagenser med minst 98% renhet.
            Varje produkt har analysbevis. Snabb leverans i hela Sverige.
            Registrera dig för att få uppdateringar.
          </p>
          <div className={styles.ctas}>
            <button className="btn btn-primary" onClick={() => document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' })}>
              Registrera för forskningsuppdateringar
            </button>
            <Link href="/shop" className="btn btn-secondary">
              Se laboratoriekemikalier
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className={styles.trust}>
        <div className="container">
          <div className={styles.trustGrid}>
            {trustBadges.map((badge) => (
              <div key={badge.title} className={styles.trustCard}>
                <span className={styles.trustIcon}>{badge.icon}</span>
                <div>
                  <strong className={styles.trustTitle}>{badge.title}</strong>
                  <span className={styles.trustDesc}>{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className={`section ${styles.popular}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Populärast just nu</h2>
            <Link href="/shop" className={styles.viewAll}>
              Alla produkter &rarr;
            </Link>
          </div>
          <div className={styles.productGrid}>
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack Engine CTA */}
      <section className={styles.stackCta}>
        <div className="container">
          <div className={styles.stackCard}>
            <div className={styles.stackContent}>
              <span className={styles.stackBadge}>Hitta rätt reagenser</span>
              <h2 className={styles.stackTitle}>Hitta rätt labbreagenser på 30 sekunder</h2>
              <p className={styles.stackDesc}>
                Välj vad du vill testa i ditt labb. Vi föreslår en smart kombination
                av reagenser som passar ditt test och din budget. Allt säljs
                uteslutande för forskning i labb.
              </p>
              <Link href="/stack-engine" className="btn btn-primary">
                Starta urvalsverktyget
              </Link>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackStep}>1. Vad vill du testa?</div>
              <div className={styles.stackStep}>2. Hur stort test?</div>
              <div className={styles.stackStep}>3. Din budget?</div>
              <div className={styles.stackResult}>→ Ditt reagensförslag</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* About intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <h2 className={styles.introTitle}>Varför ScandiPep?</h2>
            <p className={styles.introText}>
              Vi säljer bara forskningsreagenser som uppfyller våra höga krav.
              Varje batch testas av ett oberoende labb och kommer med analysbevis.
              Inga mellanhänder — bara ren kvalitet direkt från Europa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
