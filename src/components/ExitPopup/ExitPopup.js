'use client';

import { useState, useEffect } from 'react';
import styles from './ExitPopup.module.css';

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const dismissed = sessionStorage.getItem('exit-popup-dismissed');
    if (dismissed) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem('exit-popup-dismissed', 'true');
  };

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
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={close} aria-label="Stäng">×</button>

        {status === 'success' ? (
          <div className={styles.success}>
            <h2>Tack!</h2>
            <p>Du är registrerad. Du får 15% rabatt vid lansering.</p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Bli först med att veta när vi lanserar</h2>
            <p className={styles.text}>
              Registrera din e-post och få 15% rabatt på din första beställning
              + förtur till nya batcher och analysbevis.
            </p>
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
                {status === 'loading' ? 'Skickar...' : 'Prenumerera'}
              </button>
            </form>
            <p className={styles.disclaimer}>
              Alla produkter säljs uteslutande för laboratorie- och forskningsändamål.
              De får inte användas på människor eller djur. Genom att handla eller
              registrera dig bekräftar du att du är minst 18 år och att produkterna
              bara används i forskning.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
