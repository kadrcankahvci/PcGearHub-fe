// src/components/NavigationBar.jsx

import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { getCookie, eraseCookie } from '../Utils/cookieUtils'; // Çerez yönetim fonksiyonlarını import et
import myIcon from '../assets/hacker.png';
import '../styles/Navbar.css';

const NavigationBar = () => {
  const isLoggedIn = getCookie('isLoggedIn'); // Kullanıcının giriş yapıp yapmadığını kontrol et

  const handleLogout = () => {
    eraseCookie('isLoggedIn');
    window.location.href = '/'; // Çıkış yaptıktan sonra ana sayfaya yönlendir
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={myIcon} alt="My Logo" width="40" height="40" />
          <span className="ms-2" as={Link} to="/">PcGearHub</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/categories" exact className="nav-link">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" exact className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" exact className="nav-link">
              Contact
            </Nav.Link>
          </Nav>

          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search" className="me-2 form-control" aria-label="Search" />
            <Button variant="outline-light" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>

          <Nav className="ms-2">
            <Nav.Link as={NavLink} to="/" exact className="nav-link home-link">
              HOME
            </Nav.Link>
          </Nav>

          <Nav className="ms-3">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/Profile">
                  <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
                  Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
