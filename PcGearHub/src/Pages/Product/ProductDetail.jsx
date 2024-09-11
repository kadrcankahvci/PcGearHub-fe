import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/authcontext'; // Import AuthContext if needed
import { ProductContext } from '../../contexts/productcontext';
import { getProductById } from '../../services/ProductService';// Import the API service to fetch product details

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null); // State to hold the product details
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const { addToCart } = useContext(ProductContext); // Context to handle adding to cart

  useEffect(() => {
    // Fetch the product details from the backend API
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProductById(id); // Fetch product by ID from API
        setProduct(fetchedProduct); // Set the product state
      } catch (err) {
        setError('Error fetching product details'); // Set error if the fetch fails
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchProduct(); // Call the fetch function
  }, [id]); // Dependency array includes 'id' to refetch if it changes

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Use context to add product to cart
  };

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>{error}</p>;
  }

  // Render if the product is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  // Render the product details
  return (
    <div className="container mt-4">
      <h1>{product.name}</h1> {/* Use 'name' from API data */}
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" /> {/* Adjust if 'image' is provided */}
        </div>
        <div className="col-md-6">
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
          
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
