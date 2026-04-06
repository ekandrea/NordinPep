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
            Forskningspeptider
            <br />
            <span className={styles.accent}>Äntligen i Sverige</span>
          </h1>
          <p className={styles.subtitle}>
            Labbtestade peptider med minst 98% renhet. Analysbevis på varje produkt.
            Snabb leverans i hela Sverige. Registrera dig för att få veta först.
          </p>
          <div className={styles.ctas}>
            <a href="#notify" className="btn btn-primary">
              Meddela mig vid lansering
            </a>
            <Link href="/shop" className="btn btn-secondary">
              Se kommande produkter
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
              <span className={styles.stackBadge}>Vet inte var du ska börja?</span>
              <h2 className={styles.stackTitle}>Hitta rätt peptider</h2>
              <p className={styles.stackDesc}>
                Svara på 3 snabba frågor om ditt forskningsintresse, erfarenhet och budget.
                Vi föreslår en skräddarsydd peptidstack — sen lägger du allt
                i varukorgen med ett klick.
              </p>
              <Link href="/stack-engine" className="btn btn-primary">
                Starta testet
              </Link>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackStep}>1. Vilket forskningsområde?</div>
              <div className={styles.stackStep}>2. Hur erfaren är du?</div>
              <div className={styles.stackStep}>3. Vad är din budget?</div>
              <div className={styles.stackResult}>→ Din personliga stack</div>
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
              Vi säljer bara peptider som uppfyller våra egna kvalitetskrav. Varje batch
              testas av ett oberoende labb och levereras med analysbevis. Inga mellanhänder,
              inga kompromisser — bara verifierad kvalitet direkt från Europa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
