'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const SHIPPING_COUNTRIES = [
  'Sverige', 'Danmark', 'Finland', 'Norge', 'Tyskland', 'Nederländerna', 'Belgien',
  'Frankrike', 'Österrike', 'Italien', 'Spanien', 'Portugal', 'Irland', 'Polen',
  'Tjeckien', 'Rumänien', 'Ungern', 'Grekland', 'Bulgarien', 'Kroatien', 'Slovakien',
  'Litauen', 'Slovenien', 'Lettland', 'Estland', 'Luxemburg', 'Malta', 'Cypern',
  'Storbritannien',
];

export default function Checkout() {
  const { cartProducts, subtotal, getShippingCost } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', email: '', address: '', postalCode: '', city: '', country: 'Sverige',
  });
  const [step, setStep] = useState('info');
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const shipping = getShippingCost(form.country === 'Sverige' ? 'Sweden' : 'EU');
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartProducts.map((p) => ({ id: p.id, name: p.name, price: p.price, quantity: p.quantity })),
          shipping: form,
          shippingCost: shipping,
          total,
        }),
      });
    } catch {}

    setStep('payment');
    setSubmitting(false);
  };

  const handleConfirmPayment = () => {
    router.push('/checkout/success');
  };

  if (cartProducts.length === 0) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Kassa</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Din varukorg är tom.</p>
          <a href="/shop" className="btn btn-primary">Se alla produkter</a>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Kassa</h1>

        <div className={styles.layout}>
          {step === 'info' ? (
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
                  {SHIPPING_COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  required
                  style={{ marginTop: 3, accentColor: 'var(--accent)' }}
                />
                Jag bekräftar att jag är minst 18 år och att jag köper dessa produkter
                uteslutande för laboratorie- och forskningsändamål. De får inte användas
                på människor eller djur.
              </label>

              <button type="submit" className={`btn btn-primary ${styles.payBtn}`} disabled={submitting || !confirmed}>
                {submitting ? 'Skickar...' : 'Gå vidare till betalning'}
              </button>
            </form>
          ) : (
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Välj betalningssätt</h2>

              <div className={styles.paymentBox}>
                <div className={styles.paymentMethod}>
                  <h3 className={styles.paymentLabel}>Banköverföring</h3>
                  <p className={styles.paymentDesc}>Överför till:</p>
                  <div className={styles.paymentDetails}>
                    <div><span>Bank:</span> <strong>SEB</strong></div>
                    <div><span>Clearing:</span> <strong>XXXX</strong></div>
                    <div><span>Kontonr:</span> <strong>XXX XXX XXX</strong></div>
                    <div><span>Belopp:</span> <strong>{total} kr</strong></div>
                    <div><span>Meddelande:</span> <strong>{form.email}</strong></div>
                  </div>
                </div>
              </div>

              <div className={styles.paymentInfo}>
                <p>
                  Vi skickar en orderbekräftelse till <strong>{form.email}</strong> när vi
                  mottagit din betalning. Leverans sker inom 2-4 arbetsdagar (Sverige).
                </p>
              </div>

              <button
                className={`btn btn-primary ${styles.payBtn}`}
                onClick={handleConfirmPayment}
              >
                Jag har betalat — bekräfta min order
              </button>

              <button
                className={`btn btn-ghost`}
                onClick={() => setStep('info')}
                style={{ width: '100%', marginTop: 8 }}
              >
                &larr; Tillbaka till leveransinformation
              </button>
            </div>
          )}

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
