import React, { useContext, useEffect, useState } from 'react'; // Import necessary hooks and React library
import './TopSellingProduct.css'; // Import CSS for styling
import { CartContext } from './CartContext'; // Import CartContext for managing cart state

// TopSellingProducts component definition
const TopSellingProducts = ({ category, searchQuery }) => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [addedToCart, setAddedToCart] = useState({}); // State to track added to cart status
  const { addToCart } = useContext(CartContext); // Use CartContext to access addToCart function

  const [currentPage, setCurrentPage] = useState(1); // State to track current page number
  const [productsPerPage] = useState(8); // State to define number of products per page
  const [loading, setLoading] = useState(true); // State to track loading status

  // useEffect hook to fetch products when category, currentPage, or productsPerPage changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading state
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?_page=${currentPage}&_limit=${productsPerPage}`
        ); // Fetch products from API
        const data = await response.json(); // Parse the response as JSON

        let filteredProducts = data; // Initialize filteredProducts with fetched data

        // Filter products based on category if category is not 'all'
        if (category !== 'all') {
          filteredProducts = data.filter((product) => product.category === category);
        }

        setProducts(filteredProducts.slice(0, 30)); // Set products state with filtered data, limited to 30 items
      } catch (error) {
        console.error('Error fetching products:', error); // Log any errors
      } finally {
        setLoading(false); // Update loading state after fetching data
      }
    };

    fetchProducts(); // Call fetchProducts function
  }, [category, currentPage, productsPerPage, searchQuery]); // Dependency array

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart using context function
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true, // Update addedToCart state to indicate product is added to cart
    }));
    
  };

  // Function to go to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment currentPage state
  };

  // Function to go to the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1); // Decrement currentPage state
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
