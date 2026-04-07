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
              Forskningspeptider av högsta kvalitet med skandinavisk precision.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Produkter</h4>
            <Link href="/shop" className={styles.link}>Alla produkter</Link>
            <Link href="/stack-engine" className={styles.link}>Stack Engine</Link>
            <Link href="/shop/bpc-157" className={styles.link}>BPC-157</Link>
            <Link href="/shop/selank" className={styles.link}>Selank</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Resurser</h4>
            <Link href="/blog" className={styles.link}>Forskningsblogg</Link>
            <Link href="/faq" className={styles.link}>Vanliga frågor</Link>
            <Link href="/about" className={styles.link}>Om oss</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Information</h4>
            <Link href="/privacy" className={styles.link}>Integritetspolicy</Link>
            <Link href="/terms" className={styles.link}>Köpvillkor</Link>
            <span className={styles.info}>contact@scandipep.se</span>
          </div>
        </div>

        <div className={styles.badges}>
          <div className={styles.badgeGroup}>
            <span className={styles.badgeLabel}>Säker betalning</span>
            <div className={styles.payIcons}>
              <span className={styles.payIcon}>Banköverföring</span>
            </div>
          </div>
          <div className={styles.badgeGroup}>
            <span className={styles.badgeLabel}>Kvalitetsgaranti</span>
            <div className={styles.payIcons}>
              <span className={styles.payIcon}>COA ✓</span>
              <span className={styles.payIcon}>≥98%</span>
              <span className={styles.payIcon}>EU</span>
            </div>
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
          <span>&copy; {new Date().getFullYear()} ScandiPep — Forskningsreagenser</span>
        </div>
      </div>
    </footer>
  );
}
