import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaBars } from "react-icons/fa";
import { CartContext } from './CartContext';

const Header = ({ setCategory, setSearchQuery }) => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [searchInput, setSearchInput] = useState('')

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

    const handleSearchInput = (e) => {
      setSearchInput(e.target.value)
      setSearchInput = '';
    }
    const handleSearch = () => {
      setSearchQuery(searchInput);
    }
  return (
    <>
      <header>
        <div className='logo'>
          Flexmart
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className='search-container'>
          <i className="fas fa-search"></i>
          <input 
            type='text' 
            value={searchInput}
            onChange={handleSearchInput}
            placeholder='Search for Products, Brands and Categories...' />
          <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
        <button className='cart-button' onClick={handleCartClick}>
          <span className="cart-count">{cart.length}</span>
          <i className="fas fa-shopping-cart"></i> My Cart
        </button>
      </header>
      <nav>
        <ul className='nav-list'>
          <li>
            <button className='nav-button' onClick={() => { console.log('All Categories clicked'); setCategory('all'); }}>
              All Categories
              <FaBars className='nav-icon' />
            </button>
          </li>
          <li><button className='nav-button' onClick={() => handleCategoryClick('jewelery')}>Jewelery</button></li>
          <li><button className='nav-button' onClick={() => handleCategoryClick('electronics')}>Electronics</button></li>
          <li><button className='nav-button' onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button></li>
          <li><button className='nav-button' onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
