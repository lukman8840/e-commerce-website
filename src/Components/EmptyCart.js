import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Cart.css';  // Import the CSS file

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <FaShoppingCart className="empty-cart-icon" />
      <h2>Your cart is empty</h2>
    </div>
  );
};

export default EmptyCart;
