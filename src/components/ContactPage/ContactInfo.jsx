import React from "react";
import styles from "./styles/ContactInfo.module.css";

export const ContactInfo = () => {
  const contactMethods = [
    {
      title: "Call To Us",
      icon: "/icons/phone.svg",
      description: "We are available 24/7, 7 days a week.",
      details: ["Phone: +8801611112222"],
    },
    {
      title: "Write To US",
      icon: "/icons/mail.svg",
      description: "Fill out our form and we will contact you within 24 hours.",
      details: [
        "Emails: customer@exclusive.com",
        "Emails: support@exclusive.com",
      ],
    },
  ];

  return (
    <aside className={styles.infoContainer} role="complementary">
      {contactMethods.map((method, index) => (
        <div key={index} className={styles.infoBlock}>
          <div className={styles.methodHeader}>
            <img
              loading="lazy"
              src={method.icon}
              alt=""
              className={styles.methodIcon}
              aria-hidden="true"
            />
            <h2 className={styles.methodTitle}>{method.title}</h2>
          </div>
          <div className={styles.methodContent}>
            <p className={styles.description}>{method.description}</p>
            {method.details.map((detail, idx) => (
              <p key={idx} className={styles.detail}>
                {detail}
              </p>
            ))}
          </div>
          {index === 0 && <div className={styles.divider} role="separator" />}
        </div>
      ))}
    </aside>
  );
};
