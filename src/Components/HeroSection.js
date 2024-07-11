import React from 'react';
import heroImage from '../Assets/store-2.jpg'
import './HeroSection.css' 

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h1>We sell the best of the best 
          <span>Quality Products</span>
        </h1>
        <p>We specialize in all kinds of products, offering a friendly price that meets everyone's needs and budget.</p>
      </div>
      <img src={heroImage} alt='Hero' />
    </div>
  );
}

export default HeroSection;
