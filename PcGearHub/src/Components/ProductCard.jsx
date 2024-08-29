import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../models/Product';
import { AuthContext } from '../contexts/authcontext';

function ProductCard({ product }) {
  const {addToCart} = useContext(AuthContext);
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
        <Link to={`/product/${product.productId}`}>
          <Button variant="secondary">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
