import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import DiscountProduct from './Components/DiscountProduct';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import TopSellingProducts from './Components/TopSellingProducts';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import CardInfo from './Components/CardInfo';
import AddressForm from './Components/AddressForm';
import OrderConfrimation from './Components/OrderConfirmation';
import { CartProvider } from './Components/CartContext';

function App() {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';
  const isCheckoutPage = location.pathname === '/Checkout';
  const isCardInfoPage = location.pathname === '/CardInfo';
  const isAddressFormPage = location.pathname === '/AddressForm';
  const isOrderConfirmationPage = location.pathname === '/OrderConfirmation';

  return (
    <CartProvider>
      <div className="App">
        {!isCheckoutPage && !isCardInfoPage && !isAddressFormPage && !isOrderConfirmationPage && <Header />}
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <TopSellingProducts />
            <DiscountProduct />
          </>} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/CardInfo" element={<CardInfo />} />
          <Route path="/AddressForm" element={<AddressForm />} />
          <Route path="/OrderConfirmation" element={<OrderConfrimation />} />
        </Routes>
        {!isCartPage && !isCheckoutPage && !isCardInfoPage && !isAddressFormPage && !isOrderConfirmationPage && <Footer />}
      </div>
    </CartProvider>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
