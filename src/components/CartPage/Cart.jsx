import React from "react";
import { CartItem } from "./CartItem"; // Import CartItem
import { NavBar } from "./NavBar"; // Import NavBar (adjusted path)
import { Footer } from "./Footer"; // Import Footer (adjusted path)
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItem = {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3ce728619e2b503c16e7e8832d4937bab05d39a57f45e191eca0ab191a6d3dd3?placeholderIfAbsent=true&apiKey=e0c2ebc9a94844e9bbae246c84a67ac2",
    name: "Standard Honey®",
    price: 9.99, // Price as a number for calculations
  };

  return (
    <div className={styles.cartPage}>
      {/* Render NavBar at the top */}
      <header>
        <NavBar />
      </header>

      {/* Main cart content */}
      <main className={styles.mainContent}>
        <h2 className={styles.pageTitle}>Your cart items</h2>
        <button className={styles.backButton}>Back to shopping</button>

        <div className={styles.cartHeader}>
          <span className={styles.productLabel}>Product</span>
          <div className={styles.cartLabels}>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Render CartItem */}
        <CartItem {...cartItem} />

        <div className={styles.divider} />

        <div className={styles.summary}>
          <div className={styles.subtotal}>
            <div className={styles.subtotalHeader}>
              <span>Sub-total</span>
              <span className={styles.subtotalAmount}>$ 9.99</span>
            </div>
            <p className={styles.taxNote}>
              Tax and shipping cost will be calculated later
            </p>
          </div>
          <button className={styles.checkoutButton}>Check-out</button>
        </div>
      </main>

      {/* Render Footer at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Cart ; 