import React, { createContext, useState, useContext, useEffect } from 'react'; // Import useContext

// Create a new context for Cart
export const ProductContext = createContext();
export const Products = () => useContext(ProductContext); // Custom hook to use CartContext

// CartProvider component to manage cart state and actions
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // State to store the cart items
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true);
        try {
          const url = category ? 
            `https://fakestoreapi.com/products/category/${category}` :
            `https://fakestoreapi.com/products?page=${currentPage}&_limit=8`;
      
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data);
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false);
        }
      };
      
    fetchProducts();
  }, [currentPage, category]);

  const handleFilter = (category) => {
    setCategory(category); 
  };

  
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment currentPage state
  };

  // Function to go to the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1); // Decrement currentPage state
  };

  // Provide cart state and actions via context provider
  return (
    <ProductContext.Provider value={{ products, prevPage, nextPage, loading, currentPage, handleFilter}}>
      {children}
    </ProductContext.Provider>
  );
};
