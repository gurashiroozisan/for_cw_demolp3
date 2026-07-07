import { steps } from "@/data/kittens";
import styles from "./HowTo.module.css";

export default function HowTo() {
  return (
    <section id="howto" className={`section ${styles.howto}`}>
      <div className="container">
        <div className="section-title">
          <div className="decoration">
            <span />
            <span className="icon">📋</span>
            <span />
          </div>
          <h2>譲渡の流れ</h2>
          <p>お迎えまでの4ステップ</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <h4>譲渡条件について</h4>
          <ul>
            <li>完全室内飼いをお約束いただける方</li>
            <li>去勢・避妊手術の実施にご協力いただける方</li>
            <li>万が一の際は、必ずご連絡いただける方</li>
            <li>定期的な近況報告にご協力いただける方</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
