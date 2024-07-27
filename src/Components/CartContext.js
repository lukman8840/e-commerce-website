import React, { createContext, useState, useContext } from 'react'; // Import useContext

// Create a new context for Cart
export const CartContext = createContext();
export const useCart = () => useContext(CartContext); // Custom hook to use CartContext

// CartProvider component to manage cart state and actions
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to store the cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product exists, update quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If product is new, add it with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const decrementFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevCart.filter((i) => i.id !== item.id);
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Provide cart state and actions via context provider
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decrementFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
