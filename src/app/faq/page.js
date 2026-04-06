'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqData';
import styles from './page.module.css';

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span>{faq.question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Vanliga Frågor</h1>
          <p className={styles.subtitle}>
            Vanliga frågor om våra produkter, leverans och forskningspeptider.
          </p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
