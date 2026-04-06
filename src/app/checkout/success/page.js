'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.icon}>✓</div>
          <h1 className={styles.title}>Beställning bekräftad</h1>
          <p className={styles.text}>
            Tack för din beställning. Du kommer att få en bekräftelse via e-post med
            spårningsinformation när ditt paket har skickats.
          </p>
          <div className={styles.details}>
            <p>Beräknad leveranstid:</p>
            <strong>Sverige: 2-4 arbetsdagar</strong>
            <strong>EU: 5-8 arbetsdagar</strong>
          </div>
          <div className={styles.actions}>
            <Link href="/shop" className="btn btn-primary">Fortsätt handla</Link>
            <Link href="/" className="btn btn-secondary">Till startsidan</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
