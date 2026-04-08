import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.text}>
          Lansering snart &nbsp;·&nbsp; 15% rabatt &nbsp;·&nbsp; Fri frakt över 500&nbsp;kr
        </span>
      </div>
    </div>
  );
}
