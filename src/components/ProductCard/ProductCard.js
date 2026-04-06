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
          <a
            className={styles.addBtn}
            href="#notify"
          >
            Meddela mig
          </a>
        </div>
      </div>
    </div>
  );
}
