// ProductCard.jsx
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/productcontext'; // Context for product operations

function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext); // Destructure addToCart from ProductContext

  // Create the URL path dynamically
  const imagePath = `/images/${product.image}`;

  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={imagePath} alt={product.name} /> {/* Dynamic image path */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title> {/* Product name */}
        <Card.Text>{product.description}</Card.Text> {/* Product description */}
        <Card.Text>${product.price.toFixed(2)}</Card.Text> {/* Product price */}
        
        {/* Button to add the product to the cart */}
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>

        {/* Link to the detailed product page */}
        <Link to={`/product/${product.productId}`} className="ms-2">
          <Button variant="secondary">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
