import React, { useContext, useState } from 'react'; // Import necessary hooks and components from React
import './Checkout.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { CartContext } from './CartContext'; // Import CartContext to access cart data
import { AuthContext } from './AuthContext';

const Checkout = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const { cart } = useContext(CartContext); // Get cart data from CartContext
  const { isAuthenticated } = useContext(AuthContext)

  const [addressSelected, setAddressSelected] = useState(false); // State to track if address is selected
  const [paymentSelected, setPaymentSelected] = useState(false); // State to track if payment method is selected

  const handlePayClick = (event) => {
    event.preventDefault();
    if (!isAuthenticated){
      navigate('./checkout')
    }else if (addressSelected && paymentSelected) {
      navigate('/CardInfo'); 
    } else {
      alert('Please select a shipping address and a payment method'); // Alert if either address or payment method is not selected
    }
  };

  const handleShippingAddress = (event) => {
    event.preventDefault();
    navigate('/AddressForm'); // Navigate to AddressForm page
  };

  const handlePaymentSelection = () => {
    setPaymentSelected(true); // Set paymentSelected to true
  };

  const handleShippingSelection = () => {
    setAddressSelected(true); // Set addressSelected to true
  };

  const Subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // Calculate subtotal of items in cart
  const total = Subtotal; // Set total to subtotal (adjust if there are additional charges)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total number of items in cart

  return (
    <div className='checkout-container'>

      <h1 className='checkout-title'>Checkout</h1>
      <div className='main-content'>
        <div className='content'>
          <div className='shipping-content'>
            <div className='shipping-info'>
              <h1>Shipping Address</h1>
              <button onClick={handleShippingAddress}>Add Shipping Address</button>
            </div> {/* Section to add shipping address */}
            <div className='delivery'>
              <label>
                <input type='radio' name='delivery' onChange={handleShippingSelection} /> Same Day Delivery
              </label>
              <label>
                <input type='radio' name='delivery' onChange={handleShippingSelection} /> Delivery Between 3 Business Days
              </label>
            </div> {/* Options for delivery method */}
            <div className='payment'>
              <h1>Payment Method</h1>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With MasterCard
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With Visa
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With Verve
              </label>
              <label>
                <input type='radio' name='payment' onChange={handlePaymentSelection} /> Pay With Interswitch
              </label>
            </div> {/* Options for payment method */}
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
          </div> {/* Subtotal amount */}
          <div className='summary-details'>
            <p>Total</p>
            <p>${total}</p>
          </div> {/* Total amount */}
          <button className='checkout-btn' onClick={handlePayClick}>Proceed to Pay</button>
          <p className='pay'>Pay with</p>
          <div className='payment-methods'>
            <img src='Images/visa.png' alt='Visa' />
            <img src='Images/master-card.jpeg' alt='Mastercard' />
            <img src='Images/verve.png' alt='Verve' />
          </div> {/* Payment method logos */}
        </div>
      </div>
    </div>
  );
};

export default Checkout; // Export Checkout component as default
