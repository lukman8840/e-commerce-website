import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Header.css'; 
import { FaBars } from "react-icons/fa"; 
import { CartContext } from './CartContext'; 
import SignUpForm from './SignUpForm';
import StateSelection from './StateSelection';

const Header = ({ setCategory, setSearchQuery }) => {
  const navigate = useNavigate(); 
  const { cart } = useContext(CartContext); 

  const [searchInput, setSearchInput] = useState(''); 
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false)

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to cart page regardless of the cart's content
  };

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleCategoryClick = (category) => {
    setCategory(category); 
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value); 
  };

  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false)
  }

  const handleCloseAddressForm = () => {
    setShowAddressForm(false);
  }

  return (
    <>
      <header>
        <div className='logo' onClick={handleHomeClick}>
          Flexmart
          <i className="fas fa-shopping-cart"></i> 
        </div>
        <div className='search-container'>
          <i className="fas fa-search"></i> 
          <input 
            type='text' 
            value={searchInput}
            onChange={handleSearchInput} 
            placeholder='Search for Products, Brands and Categories...' 
          />
        </div>
        <button className='cart-button' onClick={handleCartClick}> 
          {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span> 
          )}
          <i className="fas fa-shopping-cart"></i>
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
      {showSignUpForm && <SignUpForm onClose={handleCloseSignUpForm} />}
      {showAddressForm && <StateSelection onClose={handleCloseAddressForm}/>}
    </>
  );
};

export default Header; 
