import React, { useContext, useEffect, useState } from 'react';
import './TopSellingProduct.css'; 
import { CartContext } from './CartContext';

const TopSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  // const [cart, setCart] = useState([])

  const { addToCart} = useContext(CartContext)

 
  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

 const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
 };

  return (
    <div className='cards-container'>
      <h1>Top Selling Products</h1>
      <div className='products-grid'>
        {products.map((product, index) => (
          <div key={product.id} className='product-card'>
            <div className='card'>
              <div className='image-container'>
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button 
              onClick={() => handleAddToCart(product)} disabled={addedToCart[product.id]}
              >{addedToCart[product.id] ? 'Added To Cart' : 'Add To Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
