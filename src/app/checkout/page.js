'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const EU_COUNTRIES = [
  'Sverige', 'Tyskland', 'Frankrike', 'Nederländerna', 'Belgien', 'Danmark', 'Finland',
  'Norge', 'Österrike', 'Italien', 'Spanien', 'Portugal', 'Irland', 'Polen', 'Tjeckien',
  'Rumänien', 'Ungern', 'Grekland', 'Bulgarien', 'Kroatien', 'Slovakien', 'Litauen',
  'Slovenien', 'Lettland', 'Estland', 'Luxemburg', 'Malta', 'Cypern', 'Storbritannien',
];

export default function Checkout() {
  const { cartProducts, subtotal, getShippingCost } = useCart();
  const [form, setForm] = useState({
    name: '', email: '', address: '', postalCode: '', city: '', country: 'Sverige',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const shipping = getShippingCost(form.country === 'Sverige' ? 'Sweden' : 'EU');
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartProducts.map((p) => ({ id: p.id, name: p.name, price: p.price, quantity: p.quantity })),
          shipping: form,
          shippingCost: shipping,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Kunde inte skapa betalningssession. Kontrollera att Stripe är konfigurerat.');
      }
    } catch {
      setError('Kunde inte ansluta till betaltjänsten. Kontrollera din Stripe-konfiguration.');
    } finally {
      setLoading(false);
    }
  };

  if (cartProducts.length === 0) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Kassa</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Din varukorg är tom.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Kassa</h1>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Leveransinformation</h2>

            <div className={styles.field}>
              <label htmlFor="name">Fullständigt namn</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">E-post</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="address">Adress</label>
              <input id="address" name="address" value={form.address} onChange={handleChange} required />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="postalCode">Postnummer</label>
                <input id="postalCode" name="postalCode" value={form.postalCode} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="city">Stad</label>
                <input id="city" name="city" value={form.city} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="country">Land</label>
              <select id="country" name="country" value={form.country} onChange={handleChange}>
                {EU_COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={`btn btn-primary ${styles.payBtn}`} disabled={loading}>
              {loading ? 'Bearbetar...' : `Betala ${total} kr`}
            </button>
          </form>

          <div className={styles.summary}>
            <h3 className={styles.summaryTitle}>Ordersammanfattning</h3>
            {cartProducts.map((p) => (
              <div key={p.id} className={styles.summaryItem}>
                <span>{p.name} x{p.quantity}</span>
                <span>{p.price * p.quantity} kr</span>
              </div>
            ))}
            <div className={styles.summaryRow}>
              <span>Delsumma</span>
              <span>{subtotal} kr</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Frakt ({form.country})</span>
              <span>{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Totalt</span>
              <strong>{total} kr</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
