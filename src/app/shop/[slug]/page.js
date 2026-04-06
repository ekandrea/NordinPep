'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import styles from './page.module.css';
import { useState } from 'react';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const productJsonLd = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://nordicpep.se${product.image}`,
    brand: { '@type': 'Brand', name: 'NordicPep' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'SEK',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'NordicPep' },
    },
  } : null;

  if (!product) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Produkten hittades inte</h1>
          <p style={{ color: 'var(--text-secondary)', margin: '16px 0 32px' }}>
            Produkten du letar efter finns inte.
          </p>
          <Link href="/shop" className="btn btn-primary">Tillbaka till produkter</Link>
        </div>
      </section>
    );
  }

  const related = getRelatedProducts(product.id);

  const specLabels = {
    purity: 'Renhet',
    quantity: 'Kvantitet',
    form: 'Form',
    storage: 'Förvaring',
  };

  return (
    <section className="section">
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
      <div className="container">
        <Link href="/shop" className={styles.back}>&larr; Tillbaka till produkter</Link>

        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                width={280}
                height={380}
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.infoCol}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.subtitle}>{product.subtitle}</p>
            <p className={styles.price}>{product.price} kr</p>

            <p className={styles.description}>{product.description}</p>

            {product.research && (
              <div className={styles.research}>
                <h3>Forskningsprofil</h3>
                <p>{product.research}</p>
              </div>
            )}

            <div className={styles.specs}>
              <h3>Specifikationer</h3>
              <div className={styles.specGrid}>
                {Object.entries(product.specs).map(([key, value]) =>
                  value ? (
                    <div key={key} className={styles.spec}>
                      <span className={styles.specLabel}>{specLabels[key]}</span>
                      <span className={styles.specValue}>{value}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <div className={styles.addRow}>
              <div className={styles.qtyPicker}>
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className={styles.qtyBtn}
                >−</button>
                <span className={styles.qty}>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className={styles.qtyBtn}
                >+</button>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => { addItem(product.id, qty); setQty(1); }}
              >
                Lägg i varukorg — {product.price * qty} kr
              </button>
            </div>

            <div className={styles.disclaimer}>
              <p>
                Denna produkt är avsedd för forsknings- och laboratoriebruk. Det är inte
                ett läkemedel, livsmedel eller kosmetika. Ej avsedd för mänsklig konsumtion.
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>Relaterade produkter</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
