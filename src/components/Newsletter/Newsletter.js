'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className={styles.section} id="notify">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <h3 className={styles.title}>Bli först med att veta när vi lanserar</h3>
            <p className={styles.desc}>
              Registrera din e-post och få 10% rabatt på din första beställning
              + förtur vid lansering.
            </p>
          </div>
          {status === 'success' ? (
            <div className={styles.successBox}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.success}>Tack! Du är med på listan. Du får 10% rabatt vid lansering.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din e-postadress"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.btn} disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Prenumerera'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: 8 }}>Något gick fel. Försök igen.</p>
          )}
        </div>
      </div>
    </section>
  );
}
