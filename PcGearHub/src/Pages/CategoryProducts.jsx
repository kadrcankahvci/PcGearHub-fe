import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import products from '../data/products'; // Ürün verilerini import et

const CategoryProducts = () => {
  const { categoryId } = useParams(); // URL'den kategori ID'sini al

  // Kategorilere göre ürünleri filtrele
  const filteredProducts = products.filter(product => product.categoryId === parseInt(categoryId));

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Products in Category</h2>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col md={4} key={product.categoryId} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No products found in this category.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryProducts;
