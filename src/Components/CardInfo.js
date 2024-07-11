import React from 'react';
import './CardInfo.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CardInfo = () => {
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleContinue = (event) => {
    event.preventDefault();
    navigate('/OrderConfirmation');
  };

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='logo'>
          Flexmart 
        </div>
        <a className='home' href="#!" onClick={handleHomeClick}>
          <IoIosArrowRoundBack /> Home
        </a>
        <h1>Checkout</h1>
        <form>
          <div className='input-group'>
            <label htmlFor='card-number'>Card Number</label>
            <input type='text' id='card-number' name='card-number' />
            <img src='Images/master-card.jpeg' alt='MasterCard' className='card-icon' />
          </div>
          <div className='input-group'>
            <label htmlFor='expiry-date'>Expiry Date</label>
            <input type='text' id='expiry-date' name='expiry-date' />
          </div>
          <div className='input-group'>
            <label htmlFor='cvv'>CVV</label>
            <input type='text' id='cvv' name='cvv' />
          </div>
          <button onClick={handleContinue} className='continue-btn'>Continue</button>
          <button type="button" className='cancel-btn' onClick={handleHomeClick}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CardInfo;
