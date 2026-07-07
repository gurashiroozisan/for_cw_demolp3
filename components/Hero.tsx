import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.label}>ボランティアが育てた子猫の譲渡サイト</p>
          <h1 className={styles.title}>
            小さな足音が、
            <br />
            あなたの毎日を
            <br />
            <span className={styles.highlight}>もっと温かく</span>
          </h1>
          <p className={styles.description}>
            ボランティアの皆さんが大切に育てた子猫たち。
            <br />
            新しい家族を探している子たちに、
            <br className={styles.brMobile} />
            温かいおうちを見つけてあげませんか？
          </p>
          <div className={styles.actions}>
            <a href="#kittens" className={styles.btnPrimary}>
              子猫を見る
            </a>
            <a href="#about" className={styles.btnSecondary}>
              詳しく知る
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero.jpg"
              alt="可愛い子猫"
              width={700}
              height={600}
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.cardIcon}>💕</span>
            <p>
              現在 <strong>5匹</strong> の子猫が
              <br />
              新しい家族を待っています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
