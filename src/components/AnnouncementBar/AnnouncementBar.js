'use client';

import { useState } from 'react';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.text}>
          Fri frakt över 500 kr &nbsp;·&nbsp; Analysbevis på varje produkt &nbsp;·&nbsp; Leverans 2-4 dagar
        </span>
        <button className={styles.close} onClick={() => setVisible(false)} aria-label="Stäng">
          ×
        </button>
      </div>
    </div>
  );
}
