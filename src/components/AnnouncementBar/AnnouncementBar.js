import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.text}>
          Fri frakt över 500 kr &nbsp;·&nbsp; Analysbevis på varje produkt &nbsp;·&nbsp; Leverans 2-4 dagar
        </span>
      </div>
    </div>
  );
}
