import { kittens } from "@/data/kittens";
import KittenCard from "./KittenCard";
import styles from "./KittenList.module.css";

export default function KittenList() {
  return (
    <section id="kittens" className={`section ${styles.kittens}`}>
      <div className="container">
        <div className="section-title">
          <div className="decoration">
            <span />
            <span className="icon">🐱</span>
            <span />
          </div>
          <h2>新着子猫情報</h2>
          <p>新しい家族を待っている子猫たち</p>
        </div>

        <div className={styles.grid}>
          {kittens.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>
      </div>
    </section>
  );
}
