import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/productcontext'; // Context for product operations

// ProductCard component definition
function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext); // Destructure addToCart from ProductContext

  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={product.image} alt={product.productName} /> {/* Product image */}
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title> {/* Product name */}
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
