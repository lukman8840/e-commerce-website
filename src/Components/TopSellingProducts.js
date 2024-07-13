import React, { useContext, useEffect, useState } from 'react';
import './TopSellingProduct.css';
import { CartContext } from './CartContext';

const TopSellingProducts = ({ category, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const { addToCart } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading state
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?_page=${currentPage}&_limit=${productsPerPage}`
        );
        const data = await response.json();

        let filteredProducts = data;

        if (category !== 'all') {
          filteredProducts = data.filter((product) => product.category === category);
        }

        setProducts(filteredProducts.slice(0, 30)); // Limiting to 30 items for display
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Update loading state after fetching data, regardless of success or error
      }
    };

    fetchProducts();
  }, [category, currentPage, productsPerPage, searchQuery]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prevState) => ({
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
      <h1>Top Selling Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='products-grid'>
            {products.map((product) => (
              <div key={product.id} className='product-card'>
                <div className='card'>
                  <div className='image-container'>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
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
          <div className='pagination'>
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span className='page-number'>{currentPage}</span>
            <button onClick={nextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopSellingProducts;
