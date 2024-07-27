import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>About Flexmart</h4>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Official Store</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Payment</h4>
        <ul>
          <li>MasterCard</li>
          <li>Verve</li>
          <li>Visa</li>
          <li>Interswitch</li>
          <li>Wallet</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li>Service Center</li>
          <li>Report A Product</li>
          <li>Return Policy</li>
          <li>FAQs</li>
          <li>Digital Services</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Join Us On</h4>
        <div className="social-icons">
          <FaFacebookF /> 
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
