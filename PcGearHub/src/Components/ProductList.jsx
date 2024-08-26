import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import '../styles/ProductList.css'; // İsteğe bağlı CSS dosyanızı buraya import edin

const products = [
  {
    id: 1,
    name: 'Gaming Mouse',
    description: 'High precision gaming mouse with customizable DPI.',
    price: 29.99,
    image: '/images/mouse.jpg'
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'Durable mechanical keyboard with RGB lighting.',
    price: 89.99,
    image: '/images/keyboard.jpg'
  },
  {
    id: 3,
    name: '4K Monitor',
    description: 'Ultra HD monitor with excellent color accuracy.',
    price: 299.99,
    image: '/images/monitor.jpg'
  },
  {
    id: 4,
    name: 'Wireless Headset',
    description: 'Comfortable wireless headset with noise cancellation.',
    price: 149.99,
    image: '/images/headset.jpg'
  }
];

const ProductList = () => {
  return (
    <Container>
      <h2 className="mt-4">Our Products</h2>
      <Row>
        {products.map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
