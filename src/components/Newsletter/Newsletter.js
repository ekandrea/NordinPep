'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to email service (Supabase, Mailchimp, etc.)
    setStatus('success');
    setEmail('');
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <h3 className={styles.title}>Håll dig uppdaterad</h3>
            <p className={styles.desc}>
              Få nyheter om nya produkter, forskningsartiklar och exklusiva erbjudanden
              direkt i din inkorg.
            </p>
          </div>
          {status === 'success' ? (
            <p className={styles.success}>Tack! Du är nu registrerad.</p>
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
              <button type="submit" className={styles.btn}>
                Prenumerera
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
