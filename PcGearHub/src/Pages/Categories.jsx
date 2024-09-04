import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Category.css'; // CSS file to style the categories
import Product from '../models/Product';
// Import images
import keyboardImg from '../assets/keyboard.jpg';
import mouseImg from '../assets/mouse.jpg';
import monitorImg from '../assets/monitor.jpg';
import headphoneImg from '../assets/headphone.jpg';
import micImage from '../assets/mic.jpg';
import categories from '../data/categories';

// Define the categories with images and descriptions


const CategoryPage = () => {
  return (
    <Container className="category-page">
      <h2 className="text-center my-4">Product Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <div className="categories-img-container">
                <Card.Img variant="top" src={category.image} alt={category.name} />
              </div>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <p className="card-description">{category.description}</p>
                <Link to={category.path} className="btn btn-primary">
                  View {category.name}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
