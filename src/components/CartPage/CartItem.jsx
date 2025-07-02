import React, { useState } from "react";
import styles from "./CartItem.module.css";

export const CartItem = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemove = () => {
    alert("Item removed");
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        <img loading="lazy" src={image} className={styles.productImage} alt={name} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.productName}>{name}</h3>
        <button className={styles.removeButton} onClick={handleRemove}>Remove</button>
      </div>
      <span className={styles.unitPrice}>${price.toFixed(2)}</span>
      <div className={styles.quantityControl}>
        <button className={styles.decrement} onClick={decrementQuantity}>-</button>
        <span className={styles.amount}>{quantity}</span>
        <button className={styles.increment} onClick={incrementQuantity}>+</button>
      </div>
      <span className={styles.totalPrice}>${(price * quantity).toFixed(2)}</span>
    </div>
  );
};
