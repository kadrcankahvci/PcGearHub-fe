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

// Define the categories with images and descriptions
const categories = [
 
  { name: 'Mice', path: '/categories/1', image: mouseImg, description: 'Explore our collection of mice for all your computing needs.' },
  { name: 'Keyboards', path: '/categories/2', image: keyboardImg, description: 'Find a variety of keyboards to enhance your typing experience.' },
  { name: 'Monitors', path: '/categories/3', image: monitorImg, description: 'Discover monitors with exceptional clarity and performance.' },
  { name: 'Headphones', path: '/categories/4', image: headphoneImg, description: 'Enjoy immersive sound with our range of headphones.' },
  { name: 'Microphones', path: '/categories/5', image: micImage, description: 'Upgrade your audio experience with high-quality speakers.' }
];

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
