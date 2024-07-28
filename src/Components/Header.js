import React, { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Header.css'; 
import { FaBars } from "react-icons/fa"; 
import { CartContext } from './CartContext'; 
import SignUpForm from './SignUpForm';
import StateSelection from './StateSelection';
import { ProductContext } from './ProductContext';

const Header = ({ setCategory, setSearchQuery }) => {
  const navigate = useNavigate(); 
  const { cart } = useContext(CartContext); 

  const [searchInput, setSearchInput] = useState(''); 
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const { handleFilter } = useContext(ProductContext);

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value); 
  };

  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false);
  }

  const handleCloseAddressForm = () => {
    setShowAddressForm(false);
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle nav visibility
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
        <button className='menu-button' onClick={toggleNav}>
        <FaBars className='nav-icon' />
        </button>
      </header>
      <nav className={isNavOpen ? 'nav-open' : 'nav-closed'}>
        <ul className='nav-list'>
          <li>
            <button className='nav-button' onClick={() => handleFilter('All Categories clicked')}>
              All Categories
            </button>
          </li>
          <li><button className='nav-button' onClick={() => handleFilter('jewelery')}>Jewelery</button></li>
          <li><button className='nav-button' onClick={() => handleFilter('electronics')}>Electronics</button></li>
          <li><button className='nav-button' onClick={() => handleFilter("men's clothing")}>Men's Clothing</button></li>
          <li><button className='nav-button' onClick={() => handleFilter("women's clothing")}>Women's Clothing</button></li>
        </ul>
      </nav>
      {showSignUpForm && <SignUpForm onClose={handleCloseSignUpForm} />}
      {showAddressForm && <StateSelection onClose={handleCloseAddressForm}/>}
    </>
  );
};

export default Header;
