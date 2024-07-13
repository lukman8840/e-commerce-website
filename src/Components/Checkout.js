import React, { useContext, useState } from 'react';
import './Checkout.css'; 
import Footer from './Footer';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [addressSelected, setAddressSelected] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handlePayClick = (event) => {
    event.preventDefault();
    if(addressSelected && paymentSelected){
      navigate('/CardInfo');
    } else {
      alert('Please select a shipping address and a payment method')
    }
  };

  const handleShippingAddress = (event) => {
    event.preventDefault();
    navigate('/AddressForm')
  }

  const handlePaymentSelection = () => {
    setPaymentSelected(true)
  };

  const handleShippingSelection = () => {
    setAddressSelected(true)
  }

  const Subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Subtotal;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='checkout-container'>
      <a className='home' href="#!" onClick={handleHomeClick}>
        <IoIosArrowRoundBack /> Home
      </a>
      <div className='logo'>Flexmart
        <i className="fas fa-shopping-cart"></i>
      </div>
      <h1 className='checkout-title'>Checkout</h1>
      <div className='main-content'>
        <div className='content'>
          <div className='shipping-content'>
            <div className='shipping-info'>
              <h1>Shipping Address</h1>
              <button onClick={handleShippingAddress}>Add Shipping Address</button>
            </div>
            <div className='delivery'>
              <label>
                <input type='radio' name='delivery' onChange={handleShippingSelection} /> Same Day Delivery
              </label>
              <label>
                <input type='radio' name='delivery' onChange={handleShippingSelection}/> Delivery Between 3 Business Days
              </label>
            </div>
            <div className='payment'>
              <h1>Payment Method</h1>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With MasterCard
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With Visa
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection}/> Pay With Verve
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection}/> Pay With Interswitch
              </label>
            </div>
          </div>
        </div>
        <div className='summary'>
          <div className='smr'>
            <h2>Summary</h2>
            <p>Total items: {totalItems}</p>
          </div>
          <div className='summary-details'>
            <p className='sub-total'>Subtotal</p>
            <p className='sub-total'>${Subtotal}</p>
          </div>
          <div className='summary-details'>
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button className='checkout-btn' onClick={handlePayClick}>Proceed to Pay</button>
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

export default Checkout;
