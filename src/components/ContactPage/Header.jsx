import React from "react";
import styles from "./styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Spices</h1>
        <nav className={styles.navigation} role="navigation">
          <div className={styles.navGroup}>
            <button className={styles.navButton} aria-haspopup="true">
              <span>Discovery</span>
              <img
                loading="lazy"
                src="./public/images/user.png"
                alt=""
                className={styles.navArrow}
                aria-hidden="true"
              />
            </button>
          </div>
          <div className={styles.navLinks}>
            <a href="/about" className={styles.navLink}>
              About
            </a>
            <a href="/contact" className={styles.navLink}>
              Contact us
            </a>
          </div>
        </nav>
        <div className={styles.iconGroup}>
          <button className={styles.iconButton} aria-label="Shopping cart">
            <img
              loading="lazy"
              src="/icons/cart.svg"
              alt=""
              className={styles.cartIcon}
              aria-hidden="true"
            />
          </button>
          <button className={styles.iconButton} aria-label="User account">
            <img
              loading="lazy"
              src="/icons/user.svg"
              alt=""
              className={styles.userIcon}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
