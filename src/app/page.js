'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import Newsletter from '@/components/Newsletter/Newsletter';
import { getPopularProducts } from '@/data/products';
import styles from './page.module.css';

const trustBadges = [
  { icon: '◎', title: 'Labbtestad', desc: 'Tredjepartsverifierad renhet' },
  { icon: '◆', title: 'Fri Frakt', desc: 'Över 500 kr i Sverige' },
  { icon: '▣', title: 'Diskret Leverans', desc: 'Omärkta paket' },
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
          <span className={styles.badge}>Forskningspeptider</span>
          <h1 className={styles.title}>
            Premium Peptider
            <br />
            <span className={styles.accent}>Från Skandinavien</span>
          </h1>
          <p className={styles.subtitle}>
            Labbtestade peptider med minst 98% renhet. Snabb och diskret leverans
            i hela Sverige. Analysbevis på varje produkt.
          </p>
          <div className={styles.ctas}>
            <Link href="/shop" className="btn btn-primary">
              Se produkter
            </Link>
            <Link href="/stack-engine" className="btn btn-secondary">
              Hitta rätt peptider
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
              <h2 className={styles.stackTitle}>Hitta din peptid-stack</h2>
              <p className={styles.stackDesc}>
                Svara på 3 snabba frågor om vad du vill uppnå, din erfarenhet och budget.
                Vi föreslår exakt vilka produkter som passar dig — sen lägger du allt
                i varukorgen med ett klick.
              </p>
              <Link href="/stack-engine" className="btn btn-primary">
                Starta quizet
              </Link>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackStep}>1. Vad vill du uppnå?</div>
              <div className={styles.stackStep}>2. Hur erfaren är du?</div>
              <div className={styles.stackStep}>3. Vad är din budget?</div>
              <div className={styles.stackResult}>→ Din personliga stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: 32 }}>
            Vad våra kunder säger
          </h2>
          <div className={styles.reviewGrid}>
            {[
              { name: 'Marcus L.', role: 'Stockholm', text: 'Snabb leverans och riktigt bra kvalitet. Har testat BPC-157 och märker tydlig skillnad i min återhämtning efter träning.' },
              { name: 'Emma K.', role: 'Göteborg', text: 'Stack Engine-verktyget gjorde det superenkelt att välja rätt. Beställde GHK-Cu för hudforskning — nöjd!' },
              { name: 'Johan A.', role: 'Malmö', text: 'Äntligen en svensk sida med ordentlig kvalitetskontroll. Diskret förpackning och analysbevis på allt. Rekommenderar.' },
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
              Vi säljer bara peptider vi själva skulle använda. Varje batch testas av
              ett oberoende labb och levereras med analysbevis. Inga mellanhänder,
              inga kompromisser — bara ren kvalitet direkt från Europa till din dörr.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
