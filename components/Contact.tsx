"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-title">
          <div className="decoration">
            <span />
            <span className="icon">✉️</span>
            <span />
          </div>
          <h2>お問い合わせ</h2>
          <p>気になる子猫がいましたら、お気軽にご連絡ください</p>
        </div>

        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="name">お名前</label>
              <input type="text" id="name" name="name" placeholder="山田 花子" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="kitten">気になる子猫</label>
              <select id="kitten" name="kitten" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                <option value="milk">ミルク</option>
                <option value="sora">ソラ</option>
                <option value="kohaku">コハク</option>
                <option value="moka">モカ</option>
                <option value="hana">ハナ</option>
                <option value="other">その他・相談</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">メッセージ</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="ご質問やご希望など、お気軽にお書きください"
              />
            </div>
            <button type="submit" className={styles.submit}>
              送信する
            </button>
            <p className={styles.demoNote}>
              ※ こちらはデモサイトのため、フォームは送信されません
            </p>
          </form>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h4>メール</h4>
                <p>info@neko-hiroba-demo.example</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>⏰</span>
              <div>
                <h4>返信目安</h4>
                <p>2〜3営業日以内</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h4>活動エリア</h4>
                <p>関東エリア（デモ）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
