import * as React from "react";

export default function Footer() {
  const footerLinks = {
    discovery: ["New season", "Most searched", "Most selled"],
    about: ["Help", "Shipping", "Affiliate"],
    info: ["Contact us", "Privacy Policies", "Terms & Conditions"]
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <hr className="footer-separator" />
        <nav 
          className="footer-nav" 
          role="navigation" 
          aria-label="Footer navigation"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h2 className="footer-heading">{category}</h2>
              <ul className="footer-links">
                {links.map(link => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-label={`${category} - ${link}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}