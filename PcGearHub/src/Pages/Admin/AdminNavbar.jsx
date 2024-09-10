import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { eraseCookie } from '../../utils/cookieUtils'; // Çerez yönetim fonksiyonlarını import et
import myIcon from '../../assets/images/hacker.png';
import '../../styles/Navbar.css';
import { AuthContext } from '../../contexts/authcontext';

const AdminNavigationBar = () => {

    
  const handleLogout = () => {
    eraseCookie('isLoggedIn');
    eraseCookie('isAdmin');
    window.location.href = '/'; // Çıkış yaptıktan sonra ana sayfaya yönlendir
  };

  return (
    
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={myIcon} alt="My Logo" width="40" height="40" />
          <span className="ms-2" as={Link} to="/admin/dashboard">Admin Panel</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/categories" className="nav-link">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/dashboard" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/manage-products" className="nav-link">
              Manage Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/manage-users" className="nav-link">
              Manage Users
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/manage-categories" className="nav-link">
              Manage Categories
            </Nav.Link>
           
          
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavigationBar;
