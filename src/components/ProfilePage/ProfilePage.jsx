import React from "react";
import { ProfileForm } from "./ProfileForm"; // Import ProfileForm
import { Header } from "./Header"; // Import Header (adjusted path)
import { Footer } from "./Footer"; // Import Footer (adjusted path)
import styles from "./ProfilePage.module.css"; // Import CSS module

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      {/* Render Header at the top */}
      <header>
        <Header />
      </header>

      {/* Main profile content */}
      <main className={styles.mainContent} role="main">
        <ProfileForm />
      </main>

      {/* Render Footer at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePage ; 