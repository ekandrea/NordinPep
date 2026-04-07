'use client';

import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'scandipep2026';

export default function AdminLayout({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('admin-auth');
    if (stored === 'true') setAuthorized(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin-auth', 'true');
      setAuthorized(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!authorized) {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Admin</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: '0.9rem' }}>
            Ange lösenord för att fortsätta.
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Lösenord"
              style={{
                padding: '14px 16px',
                background: 'var(--bg-card)',
                border: error ? '1px solid var(--danger)' : '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            />
            {error && <p style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>Fel lösenord</p>}
            <button className="btn btn-primary" type="submit">
              Logga in
            </button>
          </form>
        </div>
      </section>
    );
  }

  return children;
}
