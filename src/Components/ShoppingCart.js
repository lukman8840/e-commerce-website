import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';
import { CartContext } from './CartContext';
import EmptyCart from './EmptyCart';
import SignUpModal from './SignUpModal'; // Import SignUpModal

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, addToCart, decrementFromCart } = useContext(CartContext);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const handleCheckout = (event) => {
    event.preventDefault();
    const isAuthenticated = false; // Replace with your authentication check

    if (!isAuthenticated) {
      setShowSignUpModal(true); // Show the SignUpModal if not authenticated
    } else {
      navigate('/Checkout'); // Navigate to checkout page if authenticated
    }
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity > item.quantity) {
      addToCart({ ...item, quantity: item.quantity + 1 });
    } else if (newQuantity > 0) {
      decrementFromCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(item);
    }
  };

  const Subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = Subtotal;

  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      <div className='content'>
        <div className='items-container'>
          {cart.map((item, index) => (
            <div className='item' key={index}>
              <img src={item.image} alt='product-image' className='product-image' />
              <div className='item-details'>
                <h2 className='item-title'>{item.title}</h2>
                <div className='add-min'>
                  <button className='btn' onClick={() => updateQuantity(item, item.quantity - 1)}>
                    -
                  </button>
                  <span className='quantity'>{item.quantity}</span>
                  <button className='btn' onClick={() => updateQuantity(item, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <p className='price'>${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='summary'>
          <div className='smr'>
            <h2>Summary</h2>
            <p>{cart.length} items</p>
          </div>
          <div className='summary-details'>
            <p className='sub-total'>Subtotal</p>
            <p className='sub-total'>${Subtotal.toFixed(2)}</p>
          </div>
          <div className='summary-details'>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className='checkout-btn' onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <p className='pay'>Pay with</p>
          <div className='payment-methods'>
            <img src='Images/visa.png' alt='Visa' />
            <img src='Images/master-card.jpeg' alt='Mastercard' />
            <img src='Images/verve.png' alt='Verve' />
          </div>
        </div>
      </div>
      {showSignUpModal && (
        <SignUpModal onClose={closeSignUpModal} />
      )}
    </div>
  );
};

export default ShoppingCart;
