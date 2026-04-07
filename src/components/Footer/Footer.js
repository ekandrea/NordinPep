import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>SP</span>
              <span className={styles.logoText}>ScandiPep</span>
            </div>
            <p className={styles.tagline}>
              Forskningsreagenser av högsta kvalitet.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Produkter</h4>
            <Link href="/shop" className={styles.link}>Alla produkter</Link>
            <Link href="/stack-engine" className={styles.link}>Stack Engine</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Information</h4>
            <Link href="/about" className={styles.link}>Om oss</Link>
            <Link href="/privacy" className={styles.link}>Integritetspolicy</Link>
            <Link href="/terms" className={styles.link}>Köpvillkor</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Kontakt</h4>
            <span className={styles.info}>ScandiPep drivs av Andrea Ekeberg, enskild firma</span>
            <span className={styles.info}>Nytorgsbacken 59, 252 45 Helsingborg</span>
            <span className={styles.info}>E-post: contact@scandipep.se</span>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            Alla produkter säljs uteslutande för laboratorie- och forskningsändamål.
            De får inte användas på människor eller djur. Genom att handla bekräftar
            du att du är minst 18 år och att produkterna bara används i forskning.
          </p>
        </div>

        <div className={styles.bottom}>
          <span>&copy; 2026 ScandiPep — Forskningsreagenser</span>
        </div>
      </div>
    </footer>
  );
}
