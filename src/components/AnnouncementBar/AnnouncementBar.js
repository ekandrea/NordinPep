import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.text}>
          Lansering snart &nbsp;·&nbsp; Registrera dig för 10% rabatt &nbsp;·&nbsp; Fri frakt över 500 kr
        </span>
      </div>
    </div>
  );
}
