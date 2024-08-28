import React, { useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/bla.css'
import { AuthContext } from '../contexts/authcontext';
import { getCookie, setCookie } from '../Utils/cookieUtils'; // Çerez yönetim fonksiyonunu import et

// Mock kullanıcı verileri
const mockUsers = [
  {
    email: "admin@example.com",
    password: "admin123",
    roleId: 1, // Admin
  },
  {
    email: "customer@example.com",
    password: "customer123",
    roleId: 2, // Customer
  }
];

const Login = () => {
  const { password, setPassword, error, setError, success, setSuccess, navigate, email, setEmail, setIsLoggedIn,isAdmin,setIsAdmin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Kullanıcıyı mock verilerde ara
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSuccess('Login successful!');
      setError('');

      // Çerez oluştur
      setCookie('isLoggedIn', true, 1);
      setIsLoggedIn(getCookie('isLoggedIn'));

      // Role id'ye göre yönlendirme yap
      if (user.roleId === 1) { // Admin
        setCookie('isAdmin', true, 1);
        setIsAdmin(getCookie('isAdmin'));
        setTimeout(() => navigate('/admin/dashboard'), 1000);
      } else { // Customer
        setTimeout(() => navigate('/'), 1000);
      }

      // Formu temizle
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid email or password.');
      setSuccess('');
    }
  };

  return (
    <Container className="auth-container">
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </Container>
  );
};

export default Login;
