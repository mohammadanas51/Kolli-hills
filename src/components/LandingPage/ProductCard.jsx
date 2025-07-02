import * as React from "react";

export default function ProductCard({ image, name, price, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price" aria-label={`Price: ${price} dollars`}>
          ${price}
        </p>
        <button 
          className="cta-button"
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}