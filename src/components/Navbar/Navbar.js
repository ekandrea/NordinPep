'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { itemCount, setIsDrawerOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/shop', label: 'Produkter' },
    { href: '/stack-engine', label: 'Stack Engine' },
    { href: '/verktyg/kalkylator', label: 'Kalkylator' },
    { href: '/blog', label: 'Forskning' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>SP</span>
          <span className={styles.logoText}>ScandiPep</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
          </button>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
