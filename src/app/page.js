'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import Newsletter from '@/components/Newsletter/Newsletter';
import { getPopularProducts } from '@/data/products';
import styles from './page.module.css';

const trustBadges = [
  { icon: '◎', title: 'COA-Verifierad', desc: 'Tredjepartstestad' },
  { icon: '◆', title: 'Fri Frakt', desc: 'Över 500 kr i Sverige' },
  { icon: '▣', title: 'Diskret Leverans', desc: 'Omärkta paket' },
  { icon: '⬡', title: '≥98% Renhet', desc: 'HPLC-verifierad' },
];

export default function Home() {
  const popular = getPopularProducts();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.badge}>Uteslutande för forskningsändamål</span>
          <h1 className={styles.title}>
            Forskningspeptider
            <br />
            <span className={styles.accent}>Skandinavisk Kvalitet</span>
          </h1>
          <p className={styles.subtitle}>
            Premium syntetiska peptider med ≥98% renhet, COA-verifierade av oberoende
            laboratorier. Diskret leverans inom hela Sverige och EU.
          </p>
          <div className={styles.ctas}>
            <Link href="/shop" className="btn btn-primary">
              Se produkter
            </Link>
            <Link href="/stack-engine" className="btn btn-secondary">
              Testa Stack Engine
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
            <h2 className={styles.sectionTitle}>Mest Populära</h2>
            <Link href="/shop" className={styles.viewAll}>
              Visa alla produkter &rarr;
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
              <span className={styles.stackBadge}>Exklusivt Verktyg</span>
              <h2 className={styles.stackTitle}>Stack Engine</h2>
              <p className={styles.stackDesc}>
                Svara på 3 frågor om ditt forskningsfokus, erfarenhetsnivå och budget
                — och få en personlig peptidstack-rekommendation skräddarsydd för dina
                laboratoriebehov.
              </p>
              <Link href="/stack-engine" className="btn btn-primary">
                Bygg din Stack
              </Link>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackStep}>1. Forskningsintresse</div>
              <div className={styles.stackStep}>2. Erfarenhetsnivå</div>
              <div className={styles.stackStep}>3. Budgetram</div>
              <div className={styles.stackResult}>→ Din Personliga Stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: 32 }}>
            Vad forskare säger
          </h2>
          <div className={styles.reviewGrid}>
            {[
              { name: 'Dr. M. Lindqvist', role: 'Molekylärbiologi, Uppsala', text: 'Konsekvent renhet och snabb leverans. COA-dokumentationen är exemplarisk — precis vad man behöver för reproducerbar forskning.' },
              { name: 'K. Andersson', role: 'Forskningstekniker, Lund', text: 'Stack Engine-verktyget sparade tid vid planeringen av vårt peptidprotokoll. Produktkvaliteten matchar de internationella leverantörerna.' },
              { name: 'Dr. E. Johansson', role: 'Farmakologi, Karolinska', text: 'Äntligen en nordisk leverantör med riktigt renhetskontroll. Diskret och professionell hantering av varje beställning.' },
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                <div className={styles.reviewer}>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* About intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <h2 className={styles.introTitle}>Varför NordicPep?</h2>
            <p className={styles.introText}>
              Med bas i Skandinavien kombinerar vi rigorösa kvalitetsstandarder med den
              transparens forskare förtjänar. Varje produkt levereras med ett analysbevis
              från ett ackrediterat oberoende laboratorium — inga undantag. Våra peptider
              kommer från granskade europeiska leverantörer och förvaras under strikta
              kylkedjor tills de når ditt labb.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
