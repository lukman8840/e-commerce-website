import React, { useEffect, useState } from 'react';
import './TopSellingProduct.css'; // Assuming you have a separate CSS file for styling

const DiscountProduct = ({ category, addToCart , }) => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscountProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?_page=${currentPage}&_limit=${productsPerPage}`
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Update loading state after fetching data
      } catch (error) {
        console.error('Error Fetching products:', error);
        setLoading(false); // Ensure loading state is updated in case of error
      }
    };
    fetchDiscountProducts();
  }, [category, currentPage, productsPerPage]);

  const handleAddToCart = (product) => {
    addToCart(product); // Ensure addToCart is a function passed as prop
    // Update the prop received from parent, not internal state
    addedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className='cards-container'>
      <h1>Discount Products</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className='products-grid'>
          {products.map((product, index) => (
            <div key={index} className='product-card'>
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
