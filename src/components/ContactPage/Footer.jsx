import React from "react";
import styles from "./styles/Footer.module.css";

export const Footer = () => {
  const footerSections = [
    {
      title: "Discovery",
      items: [
        { label: "New season", href: "/new-season" },
        { label: "Most searched", href: "/most-searched" },
        { label: "Most selled", href: "/most-selled" },
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
        {/* Top white separator line */}
        <div className={styles.separator} role="separator" />

        {/* Footer Columns */}
        <div className={styles.footerColumns}>
          {footerSections.map((section, index) => (
            <div key={index} className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>{section.title}</h3>
              <nav
                className={styles.columnNav}
                aria-label={`${section.title} navigation`}
              >
                {section.items.map((item, idx) => (
                  <a key={idx} href={item.href} className={styles.footerLink}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
