'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <Link href={`/shop/${product.slug}`} className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={280}
          className={styles.image}
        />
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <Link href={`/shop/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>
        <span className={styles.subtitle}>{product.subtitle}</span>
        <div className={styles.bottom}>
          <span className={styles.price}>{product.price} kr</span>
          <button
            className={styles.addBtn}
            onClick={() => addItem(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Köp
          </button>
        </div>
      </div>
    </div>
  );
}
