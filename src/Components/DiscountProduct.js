import React, { useEffect, useState } from 'react';
import './TopSellingProduct.css'; // Assuming you have a separate CSS file for styling

const DiscountProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Discount.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='cards-container'>
      <h1>Discount Products</h1>
      <div className='products-grid'>
        {products.map((product, index) => (
          <div key={index} className='product-card'>
            <div className='card'>
              <div className='image-container'>
                <img src={product.image} alt={product.name} />
                <span className='discount-tag'>{product.discount}</span>
              </div>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProduct;
