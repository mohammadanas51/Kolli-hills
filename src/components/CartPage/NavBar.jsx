import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navDesktop}>
      <div className={styles.navContent}>
        <h1 className={styles.logo}>Spices</h1>
        <div className={styles.menuLinks}>
          <div className={styles.dropdownWrapper}>
            <span>Discovery</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/987fe1a4828b0a6897dd32ce29c8145189f46ada0b336459bfc6a33e3c6cd3ab?placeholderIfAbsent=true&apiKey=e0c2ebc9a94844e9bbae246c84a67ac2"
              className={styles.dropdownIcon}
              alt=""
            />
          </div>
          <div className={styles.linkGroup}>
            <a href="#about">About</a>
            <a href="#contact">Contact us</a>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2f918d542dae6cadbe8c1898aa4aa33520cd903060eae07eb59c1ff7ff78c?placeholderIfAbsent=true&apiKey=e0c2ebc9a94844e9bbae246c84a67ac2"
            className={styles.cartIcon}
            alt="Shopping cart"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc5f8d9ac56fd2378959c478852de927369aca0b079d8ab707fb6c80f371dae?placeholderIfAbsent=true&apiKey=e0c2ebc9a94844e9bbae246c84a67ac2"
            className={styles.userIcon}
            alt="User account"
          />
        </div>
      </div>
      <div className={styles.separator} />
    </nav>
  );
};
