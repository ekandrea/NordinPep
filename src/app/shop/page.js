'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products, categories } from '@/data/products';
import styles from './page.module.css';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('Alla');

  const filtered =
    activeCategory === 'Alla'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Forskningsprodukter</h1>
          <p className={styles.subtitle}>
            Alla peptider har ≥98% renhet, är COA-verifierade och säljs uteslutande för forskning.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>Inga produkter i denna kategori.</p>
        )}
      </div>
    </section>
  );
}
