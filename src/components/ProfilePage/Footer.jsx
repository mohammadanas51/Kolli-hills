import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const footerSections = [
    {
      title: "Discovery",
      items: [
        { label: "New season", href: "/new-season" },
        { label: "Most searched", href: "/most-searched" },
        { label: "Most selled", href: "/best-sellers" },
      ],
    },
    {
      title: "About",
      items: [
        { label: "Help", href: "/help" },
        { label: "Shipping", href: "/shipping" },
        { label: "Affiliate", href: "/affiliate" },
      ],
    },
    {
      title: "Info",
      items: [
        { label: "Contact us", href: "/contact" },
        { label: "Privacy Policies", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContent}>
        <hr className={styles.separator} aria-hidden="true" />
        <div className={styles.footerGrid}>
          {footerSections.map((section, index) => (
            <div key={index} className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className={styles.footerLink}
                      tabIndex="0"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomBar} aria-hidden="true" />
    </footer>
  );
};
