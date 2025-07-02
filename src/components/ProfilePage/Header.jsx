import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Spices</h1>
        <nav className={styles.navigation} role="navigation">
          <div className={styles.navGroup}>
            <button className={styles.navButton} aria-haspopup="true">
              Discovery
              <img
                loading="lazy"
                src="/assets/icons/arrow-down.svg"
                alt=""
                className={styles.navIcon}
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
        <div className={styles.userActions}>
          <button
            className={styles.iconButton}
            aria-label="User profile"
            onClick={() => (window.location.href = "/profile")}
          >
            <img
              loading="lazy"
              src="/assets/icons/profile.svg"
              alt=""
              className={styles.profileIcon}
              aria-hidden="true"
            />
          </button>
          <button
            className={styles.iconButton}
            aria-label="Shopping cart"
            onClick={() => (window.location.href = "/cart")}
          >
            <img
              loading="lazy"
              src="/assets/icons/cart.svg"
              alt=""
              className={styles.cartIcon}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
