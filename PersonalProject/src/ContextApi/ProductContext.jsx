import React, { createContext, useContext, useEffect, useState } from "react";

// Create context properly
export const ProductContext = createContext();

// Custom hook to use the ProductContext
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Function to fetch products
const getProduct = async (setProducts) => {
  try {
    let response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let proData = await response.json();
    console.log(proData);
    setProducts(proData); // Set fetched products to state
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

// The ProductProvider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // State to store products
  const [cartItem, setcartItem] = useState([]); // State to store cart items

  // Function to add an item to the cart
  const addToCart = (pid) => {
    setcartItem((prevCart) => [...prevCart, { id: pid }]);
  };

  // Log cart items whenever they change
  useEffect(() => {
    console.log("Updated cart items:", cartItem);
  }, [cartItem]);

  // Fetch products when the component mounts
  useEffect(() => {
    getProduct(setProducts);
  }, []);

  // Provide the products and addToCart function to children components
  return (
    <ProductContext.Provider value={{ products, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
