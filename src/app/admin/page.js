'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Admin() {
  const [subscribers, setSubscribers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/admin/data');
        if (res.ok) {
          const data = await res.json();
          setSubscribers(data.subscribers || []);
          setOrders(data.orders || []);
        }
      } catch {}
      setLoading(false);
    }
    fetchData();
  }, []);

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

          <a href="https://vercel.com/andys-projects-5105cadf/scandipep" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Vercel Dashboard</h3>
            <p>Deploys, analytics och inställningar.</p>
          </a>
        </div>

        {/* E-postlista */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Registrerade e-postadresser
            <span className={styles.count}>{subscribers.length} st</span>
          </h2>
          {loading ? (
            <p className={styles.loading}>Laddar...</p>
          ) : subscribers.length === 0 ? (
            <p className={styles.empty}>Inga registrerade ännu.</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>E-post</th>
                    <th>Registrerad</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub, i) => (
                    <tr key={i}>
                      <td className={styles.email}>{sub.email}</td>
                      <td>{new Date(sub.subscribed_at).toLocaleDateString('sv-SE')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Ordrar */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Ordrar
            <span className={styles.count}>{orders.length} st</span>
          </h2>
          {loading ? (
            <p className={styles.loading}>Laddar...</p>
          ) : orders.length === 0 ? (
            <p className={styles.empty}>Inga ordrar ännu.</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Kund</th>
                    <th>E-post</th>
                    <th>Totalt</th>
                    <th>Status</th>
                    <th>Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i}>
                      <td>{order.customer_name}</td>
                      <td className={styles.email}>{order.customer_email}</td>
                      <td>{order.total} kr</td>
                      <td>
                        <span className={styles.status}>{order.status}</span>
                      </td>
                      <td>{new Date(order.created_at).toLocaleDateString('sv-SE')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
