import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DiscountProduct from './Components/DiscountProduct';
import Header from './Components/Header';
import TopSellingProducts from './Components/TopSellingProducts';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import CardInfo from './Components/CardInfo';
import AddressForm from './Components/AddressForm';
import OrderConfirmation from './Components/OrderConfirmation';
import { CartProvider } from './Components/CartContext';
import OtpPage from './Components/OtpPage';
import ProtectedRoute from './Components/ProtectedRoute';
import SignUpModal from './Components/SignUpModal';
import { AuthProvider } from './Components/AuthContext';
import {  ProductProvider} from './Components/ProductContext';

function App() {
  const navigate = useNavigate();  


  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false);  // Added useState for showSignUpModal

  const handleCheckout = (event) => {
    event.preventDefault();
    const isAuthenticated = false;

    if (!isAuthenticated) {
      setShowSignUpModal(true);
    } else {
      navigate('/checkout');
    }
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <CartProvider>
      <div className="App">
        <Header setCategory={setCategory} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={
            <>
              <TopSellingProducts category={category} searchQuery={searchQuery} />
              <DiscountProduct category={category} />
            </>
          } />
          <Route path="/cart" element={<ShoppingCart handleCheckout={handleCheckout} />} />
          <Route path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } 
          />
          <Route path="/CardInfo" 
            element={
              <ProtectedRoute>
                <CardInfo />
              </ProtectedRoute>
            } 
          />
          <Route path="/AddressForm" element={<AddressForm />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
          <Route path="/otp" element={<OtpPage />} />
        </Routes>
        <Footer />
        {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
      </div>
    </CartProvider>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
        <App />
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default AppWithRouter;
