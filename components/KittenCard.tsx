import Image from "next/image";
import type { Kitten } from "@/data/kittens";
import styles from "./KittenCard.module.css";

type Props = {
  kitten: Kitten;
};

export default function KittenCard({ kitten }: Props) {
  const isAvailable = kitten.status === "募集中";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={kitten.image}
          alt={kitten.name}
          width={600}
          height={450}
          className={styles.image}
        />
        <span
          className={`${styles.badge} ${isAvailable ? styles.badgeAvailable : styles.badgePending}`}
        >
          {kitten.status}
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{kitten.name}</h3>
        <ul className={styles.meta}>
          <li>
            <span className={styles.metaLabel}>性別</span>
            {kitten.gender}
          </li>
          <li>
            <span className={styles.metaLabel}>年齢</span>
            {kitten.age}
          </li>
          <li>
            <span className={styles.metaLabel}>地域</span>
            {kitten.area}
          </li>
        </ul>
        <p className={styles.description}>{kitten.description}</p>
        {isAvailable && (
          <a href="#contact" className={styles.btn}>
            お問い合わせ
          </a>
        )}
      </div>
    </article>
  );
}
