import React, { useContext,  useState } from 'react'; // Import useContext and other necessary hooks
import './TopSellingProduct.css'; 
import { CartContext } from './CartContext';
import { ProductContext } from './ProductContext';

const DiscountProduct = ({ category }) => {
  const { addToCart } = useContext(CartContext); // Use CartContext to access addToCart function
  const { prevPage, nextPage, loading, products, currentPage } = useContext(ProductContext); // Use ProductContext to access product-related data and functions
  const [addedToCart, setAddedToCart] = useState({}); // State to track added to cart status
  
  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart using context function
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true, // Update addedToCart state to indicate product is added to cart
    }));
  };
  
  return (
    <div className='cards-container'>
      <h1>Discount Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='products-grid'>
          {products.map((product) => (
            <div key={product.id} className='product-card'>
              <div className='card'>
                <div className='image-container'>
                  <img src={product.image} alt={product.title} />
                  <div className='discount-tag'>-20%</div>
                </div>
                <p>{product.title}</p>
                <p>{product.brand}</p>
                <p>{product.price ? `$${product.price}` : 'Price not available'}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedToCart[product.id]}
                >
                  {addedToCart[product.id] ? 'Added To Cart' : 'Add To Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className='page-number'>{currentPage}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default DiscountProduct;
