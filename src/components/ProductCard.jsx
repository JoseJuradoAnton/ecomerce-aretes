import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <h3 className="product-card-price">{product.price}</h3>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to Car {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
