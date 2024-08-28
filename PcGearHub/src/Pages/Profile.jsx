import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Profile.css'; // Özel stil dosyanızı import edin

const Profile = () => {
  return ( 
    <Container className="profile-container mt-4">
      <Row>
        {/* Kullanıcı Bilgileri */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>My Profile</Card.Header>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Email: john.doe@example.com</Card.Text>
              <Card.Text>Phone: +123 456 7890</Card.Text>
              <Button variant="primary" as={Link} to="/edit-profile">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Sipariş Geçmişi */}
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Order History</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Order #12345</strong> - Date: 2023-08-24 - Status: Delivered
                  <Button variant="link" className="float-end" as={Link} to="/order/12345">View Details</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Order #12344</strong> - Date: 2023-07-15 - Status: Shipped
                  <Button variant="link" className="float-end" as={Link} to="/order/12344">View Details</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Order #12343</strong> - Date: 2023-06-05 - Status: Processing
                  <Button variant="link" className="float-end" as={Link} to="/order/12343">View Details</Button>
                </ListGroup.Item>
                {/* Daha fazla sipariş geçmişi buraya eklenebilir */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Adres Bilgileri */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Shipping Addresses</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Home</strong><br />
                  123 Main St, Apt 4B<br />
                  New York, NY 10001<br />
                  <Button variant="link" as={Link} to="/edit-address/1">Edit</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Office</strong><br />
                  456 Corporate Blvd<br />
                  Los Angeles, CA 90017<br />
                  <Button variant="link" as={Link} to="/edit-address/2">Edit</Button>
                </ListGroup.Item>
                {/* Daha fazla adres buraya eklenebilir */}
              </ListGroup>
              <Button variant="primary" className="mt-3" as={Link} to="/add-address">Add New Address</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Hesap Ayarları */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Account Settings</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Password</strong><br />
                  <Button variant="link" as={Link} to="/change-password">Change Password</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email Notifications</strong><br />
                  <Button variant="link" as={Link} to="/email-settings">Manage Notifications</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Delete Account</strong><br />
                  <Button variant="danger" as={Link} to="/delete-account">Delete My Account</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ana Sayfaya Git Butonu */}
      <Row>
        <Col className="text-center">
          <Button variant="secondary" as={Link} to="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
