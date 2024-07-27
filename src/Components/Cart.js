import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import EmptyCart from './EmptyCart';
import './Cart.css';  // Import the CSS file

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {/* Render cart items */}
    </div>
  );
};

export default Cart;
