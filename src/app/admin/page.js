'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Admin() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Intern</span>
          <h1 className={styles.title}>Admin</h1>
          <p className={styles.subtitle}>Verktyg för att hantera ScandiPep.</p>
        </div>

        <div className={styles.grid}>
          <Link href="/admin/content" className={styles.card}>
            <h3>Content Generator</h3>
            <p>Generera bildtexter och hooks för Instagram och TikTok.</p>
          </Link>

          <a href="https://supabase.com/dashboard/project/mnxsqlelkcsgjgmbpvpk/editor" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Ordrar &amp; Newsletter</h3>
            <p>Se beställningar och e-postlistan i Supabase.</p>
          </a>

          <a href="https://vercel.com/andys-projects-5105cadf/scandipep" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Vercel Dashboard</h3>
            <p>Deploys, analytics och inställningar.</p>
          </a>

          <a href="https://www.instagram.com/scandipep/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Instagram</h3>
            <p>Hantera ditt ScandiPep-konto.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
