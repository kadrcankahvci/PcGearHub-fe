import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';

const AdminDashboard = () => {
  return (
    <>
      
      <Container className="mt-4">
        <h2 className="text-center mb-4">Admin Dashboard</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>User Management</Card.Title>
                <Card.Text>
                  Manage users, view user details, and handle user permissions.
                </Card.Text>
                <Button variant="primary" href="/admin/manage-users">
                  Manage Users
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Product Management</Card.Title>
                <Card.Text>
                  Add, update, or delete products in your inventory.
                </Card.Text>
                <Button variant="primary" href="/admin/manage-products">
                  Manage Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Manage Categories</Card.Title>
                <Card.Text>
                Add, update, or delete products in your inventory.
                </Card.Text>
                <Button variant="primary" href="/admin/manage-categories">
                  View Statistics
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
