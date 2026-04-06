'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const {
    cartProducts,
    subtotal,
    getShippingCost,
    updateQuantity,
    removeItem,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useCart();

  const shipping = getShippingCost('Sweden');
  const total = subtotal + shipping;

  return (
    <>
      {isDrawerOpen && (
        <div className={styles.overlay} onClick={() => setIsDrawerOpen(false)} />
      )}
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>Din varukorg</h3>
          <button
            className={styles.closeBtn}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {cartProducts.length === 0 ? (
          <div className={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <p>Din varukorg är tom</p>
            <button
              className="btn btn-primary"
              onClick={() => setIsDrawerOpen(false)}
            >
              Fortsätt handla
            </button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={56}
                      height={72}
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{product.name}</span>
                    <span className={styles.itemPrice}>{product.price} kr</span>
                    <div className={styles.qtyControls}>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className={styles.qtyBtn}
                      >
                        −
                      </button>
                      <span className={styles.qty}>{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className={styles.qtyBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div className={styles.row}>
                <span>Delsumma</span>
                <span>{subtotal} kr</span>
              </div>
              <div className={styles.row}>
                <span>Frakt (Sverige)</span>
                <span>{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
              </div>
              {shipping > 0 && subtotal < 500 && (
                <p className={styles.freeShipping}>
                  Lägg till {500 - subtotal} kr för fri frakt i Sverige
                </p>
              )}
              <div className={`${styles.row} ${styles.total}`}>
                <span>Totalt</span>
                <span>{total} kr</span>
              </div>
              <Link
                href="/checkout"
                className={`btn btn-primary ${styles.checkoutBtn}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                Gå till kassan
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
