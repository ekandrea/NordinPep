'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function Cart() {
  const { cartProducts, subtotal, getShippingCost, updateQuantity, removeItem } = useCart();

  const shipping = getShippingCost('Sweden');
  const total = subtotal + shipping;

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Varukorg</h1>

        {cartProducts.length === 0 ? (
          <div className={styles.empty}>
            <p>Din varukorg är tom.</p>
            <Link href="/shop" className="btn btn-primary">Se produkter</Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.items}>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image src={product.image} alt={product.name} width={72} height={96} />
                  </div>
                  <div className={styles.itemInfo}>
                    <Link href={`/shop/${product.slug}`} className={styles.itemName}>
                      {product.name}
                    </Link>
                    <span className={styles.itemSub}>{product.subtitle}</span>
                    <div className={styles.qtyRow}>
                      <div className={styles.qtyControls}>
                        <button onClick={() => updateQuantity(product.id, product.quantity - 1)} className={styles.qtyBtn}>−</button>
                        <span className={styles.qty}>{product.quantity}</span>
                        <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className={styles.qtyBtn}>+</button>
                      </div>
                      <button onClick={() => removeItem(product.id)} className={styles.removeBtn}>Ta bort</button>
                    </div>
                  </div>
                  <span className={styles.itemPrice}>{product.price * product.quantity} kr</span>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <h3 className={styles.summaryTitle}>Ordersammanfattning</h3>
              <div className={styles.row}>
                <span>Delsumma</span>
                <span>{subtotal} kr</span>
              </div>
              <div className={styles.row}>
                <span>Frakt (Sverige)</span>
                <span>{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
              </div>
              {shipping > 0 && subtotal < 500 && (
                <p className={styles.freeNote}>Lägg till {500 - subtotal} kr mer för fri frakt</p>
              )}
              <div className={`${styles.row} ${styles.totalRow}`}>
                <span>Totalt</span>
                <strong>{total} kr</strong>
              </div>
              <Link href="/checkout" className={`btn btn-primary ${styles.checkoutBtn}`}>
                Gå till kassan
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
