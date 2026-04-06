'use client';

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nordicpep-cookies');
    if (!consent) setVisible(true);
  }, []);

  const accept = (level) => {
    localStorage.setItem('nordicpep-cookies', level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <strong>Vi använder cookies</strong>
          <p>
            Vi använder nödvändiga cookies för att sidan ska fungera. Med ditt samtycke
            använder vi även cookies för analys och förbättring av din upplevelse.
            Läs vår <a href="/privacy">integritetspolicy</a> för mer information.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.acceptAll} onClick={() => accept('all')}>
            Acceptera alla
          </button>
          <button className={styles.necessary} onClick={() => accept('necessary')}>
            Endast nödvändiga
          </button>
        </div>
      </div>
    </div>
  );
}
