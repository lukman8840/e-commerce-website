import React, { useState } from 'react';
import './CardInfo.css';
import { useNavigate } from 'react-router-dom';

const CardInfo = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleContinue = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate('/Otp');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format';
    }
    if (!cvv.match(/^\d{3}$/)) {
      errors.cvv = 'CVV must be 3 digits';
    }
    return errors;
  };

  return (
    <div className='main-container'>
      <div className='container'>
        {/* <div className='logo' onClick={handleHomeClick}>
          Flexmart
          <i className="fas fa-shopping-cart" ></i>
        </div> */}
        <h1>Checkout</h1>
        <form>
          <div className='input-group'>
            <label htmlFor='card-number'>Card Number</label>
            <input
              type='text'
              id='card-number'
              name='card-number'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              aria-describedby='card-number-error'
            />
            {errors.cardNumber && <span id='card-number-error' className='error'>{errors.cardNumber}</span>}
            <img src='Images/master-card.jpeg' alt='MasterCard' className='card-icon' />
          </div>
          <div className='input-group'>
            <label htmlFor='expiry-date'>Expiry Date</label>
            <input
              type='text'
              id='expiry-date'
              name='expiry-date'
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              aria-describedby='expiry-date-error'
            />
            {errors.expiryDate && <span id='expiry-date-error' className='error'>{errors.expiryDate}</span>}
          </div>
          <div className='input-group'>
            <label htmlFor='cvv'>CVV</label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              aria-describedby='cvv-error'
            />
            {errors.cvv && <span id='cvv-error' className='error'>{errors.cvv}</span>}
          </div>
          <div className='btn-container'>
          <button onClick={handleContinue} className='btn continue-btn'>Continue</button>
          <button type="button" className='btn cancel-btn' onClick={handleHomeClick}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardInfo;
