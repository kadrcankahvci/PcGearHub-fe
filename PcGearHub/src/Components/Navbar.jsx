import React, { useContext } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { getCookie, eraseCookie } from '../utils/cookieUtils'; // Çerez yönetim fonksiyonlarını import et
import myIcon from '../assets/images/hacker.png';
import '../styles/Navbar.css';
import { AuthContext } from '../contexts/authcontext';
import { ProductContext } from '../contexts/productcontext';

const NavigationBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { cartItems } = useContext(ProductContext);
  const isAdmin = getCookie('isAdmin') === 'true'; // Admin olup olmadığını kontrol et

  // Toplam ürün sayısını hesapla
  const cartCount = cartItems.length;

  const handleLogout = () => {
    setIsLoggedIn(getCookie('isLoggedIn'));
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
            <Nav.Link as={NavLink} to="/categories" className="nav-link">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            {isLoggedIn && isAdmin && (
              <>
                <Nav.Link as={NavLink} to="/admin/manage-products" className="nav-link">
                  Manage Products
                </Nav.Link>
                <Nav.Link as={NavLink} to="/admin/manage-users" className="nav-link">
                  Manage Users
                </Nav.Link>
              </>
            )}
          </Nav>

          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search" className="me-2 form-control" aria-label="Search" />
            <Button variant="outline-light" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>

          <Nav className="ms-2">
            <Nav.Link as={NavLink} to="/" className="nav-link home-link">
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
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
