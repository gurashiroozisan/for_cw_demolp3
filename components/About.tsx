import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-title">
          <div className="decoration">
            <span />
            <span className="icon">🌸</span>
            <span />
          </div>
          <h2>私たちについて</h2>
          <p>ボランティアの想いを込めて</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏠</div>
            <h3>ボランティアが育てています</h3>
            <p>
              保護された子猫たちを、ボランティアの皆さんが家庭で大切に育てています。
              一頭一頭に愛情を注ぎ、社会化トレーニングも行っています。
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>💉</div>
            <h3>健康チェック済み</h3>
            <p>
              すべての子猫は獣医師による健康診断を受け、ワクチン接種・
              フィラリア予防も済ませています。安心してお迎えいただけます。
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🤝</div>
            <h3>丁寧なマッチング</h3>
            <p>
              子猫の性格やライフスタイルに合わせて、最適なご家庭をお探しします。
              譲渡後もサポート体制を整えています。
            </p>
          </div>
        </div>

        <div className={styles.message}>
          <p>
            一匹の命を救うことは、一つの家族の幸せを生むこと。
            <br />
            私たちは、子猫と新しい家族の出会いを大切にサポートしています。
          </p>
        </div>
      </div>
    </section>
  );
}
