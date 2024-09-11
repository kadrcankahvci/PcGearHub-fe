import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import { getAllProducts } from '../services/ProductService'; // Import the service function to fetch products

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts(); // Fetch products using the service function
      setProducts(data); // Set fetched products to state
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error fetching products:', error); // Log errors to console
      setError('Failed to fetch products.'); // Set error message
      setLoading(false); // Set loading to false if an error occurs
    }
  };

  // useEffect to fetch products on component mount
  useEffect(() => {
    fetchProducts(); // Call fetch function on mount
  }, []);

  // Display loading spinner while fetching data
  if (loading) {
    return <div className="container mt-4"><p>Loading products...</p></div>;
  }

  // Display error message if fetching fails
  if (error) {
    return <div className="container mt-4"><p>{error}</p></div>;
  }

  // Render the product list
  return (
    <div className="container mt-4">
      <h1>Available Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.productId} className="col-md-4">
            <ProductCard product={product} /> {/* Pass each product to ProductCard */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
