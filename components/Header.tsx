"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "私たちについて", href: "#about" },
  { label: "子猫一覧", href: "#kittens" },
  { label: "譲渡の流れ", href: "#howto" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>🐾</span>
          <span className={styles.logoText}>ねこひろば</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
