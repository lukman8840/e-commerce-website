import React, { useContext, useState } from 'react'; // Import necessary hooks and React library
import './TopSellingProduct.css'; // Import CSS for styling
import { CartContext } from './CartContext'; // Import CartContext for managing cart state
import { ProductContext } from './ProductContext';

// TopSellingProducts component definition
const TopSellingProducts = ({ category, searchQuery }) => {
  const { addToCart } = useContext(CartContext); // Use CartContext to access addToCart function
  const { prevPage, nextPage, loading, products, currentPage } = useContext(ProductContext); // Use CartContext to access addToCart function
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
      <h1>Top Selling Products</h1>
      {loading ? (
        <p>Loading...</p> // Show loading text if loading state is true
      ) : (
        <>
          <div className='products-grid'>
            {products.map((product) => (
              <div key={product.id} className='product-card'>
                <div className='card'>
                  <div className='image-container'>
                    <img src={product.image} alt={product.title} /> {/* Display product image */}
                  </div>
                  <p>{product.title}</p> {/* Display product title */}
                  <p>${product.price}</p> {/* Display product price */}
                  <button
                    onClick={() => handleAddToCart(product)} // Add product to cart on button click
                    disabled={addedToCart[product.id]} // Disable button if product is already added to cart
                  >
                    {addedToCart[product.id] ? 'Added To Cart' : 'Add To Cart'} {/* Show appropriate button text */}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='pagination'>
            <button onClick={prevPage} disabled={currentPage === 1}> {/* Go to previous page if not on first page */}
              Previous
            </button>
            <span className='page-number'>{currentPage}</span> {/* Display current page number */}
            <button onClick={nextPage}>Next</button> {/* Go to next page */}
          </div>
        </>
      )}
    </div>
  );
};

export default TopSellingProducts; // Export the TopSellingProducts component as the default export
