import React from "react";
import { Header } from "./Header";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import styles from "./styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <ContactInfo />
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage ; 