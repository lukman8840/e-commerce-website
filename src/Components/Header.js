import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaBars } from "react-icons/fa6";
import { CartContext } from './CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext)

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <header>
        <div className='logo'>
          Flexmart
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className='search-container'>
          <i className="fas fa-search"></i>
          <input type='text' placeholder='Search for Products, Brands and Categories...' />
          <button className='search-button'> Search</button>
        </div>
        <button className='cart-button' onClick={handleCartClick}>
          <span className="cart-count">{cart.length}</span>
          <i className="fas fa-shopping-cart"></i> My Cart
        </button>
      </header>
      <nav>
        <ul className='nav-list'>
          <li>
            <button className='nav-button'>
              All Categories
              <FaBars className='nav-icon' />
            </button>
          </li>
          <li><button className='nav-button'>Computer And Accessories</button></li>
          <li><button className='nav-button'>Electronics</button></li>
          <li><button className='nav-button'>Phones and Tablets</button></li>
          <li><button className='nav-button'>Home Appliances</button></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
