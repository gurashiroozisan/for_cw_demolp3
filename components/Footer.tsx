import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>🐾</span>
          <span className={styles.logoText}>ねこひろば</span>
          <p className={styles.tagline}>
            ボランティアが育てた子猫の譲渡サイト
          </p>
        </div>

        <nav className={styles.nav}>
          <a href="#about">私たちについて</a>
          <a href="#kittens">子猫一覧</a>
          <a href="#howto">譲渡の流れ</a>
          <a href="#contact">お問い合わせ</a>
        </nav>

        <p className={styles.copyright}>
          &copy; 2026 ねこひろば（デモサイト）. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
