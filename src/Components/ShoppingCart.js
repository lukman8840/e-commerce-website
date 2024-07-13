import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import './ShoppingCart.css';
import Footer from './Footer';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  console.log(cart)
  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    navigate('/Checkout');
  };


  
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity > item.quantity) {
      addToCart({ ...item, quantity: item.quantity + 1 }); // Ensure to update quantity in addToCart
    } else if (newQuantity > 0) {
      addToCart({ ...item, quantity: item.quantity - 1 }); // Ensure to update quantity in addToCart
    } else {
      removeFromCart(item);
    }
  };

  const Subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Subtotal;

  return (
    <div className='shopping-cart'>
      <a className='home' href='#!' onClick={handleHomeClick}>
        <IoIosArrowRoundBack /> Home
      </a>
      <h1>Shopping Cart</h1>
      <div className='content'>
        <div className='items-container'>
          {cart.map((item, index) => (
            <div className='item' key={index}>
              <img src={item.image} alt='product-image' />
              <div className='item-details'>
                <h2>{item.title}</h2>
                <button
                  className='btn'
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className='btn'
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  +
                </button>
                <p>${item.price}</p>
                <MdDelete
                  className='delete-icon'
                  onClick={() => removeFromCart(item)}
                />
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
      <Footer />
    </div>
  );
};

export default ShoppingCart;
