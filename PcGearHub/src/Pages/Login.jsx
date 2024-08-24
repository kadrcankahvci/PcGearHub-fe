import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import your custom CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    if (email === 'test@example.com' && password === 'password') {
      setSuccess('Login successful!');
      setError('');
      // Simulate clearing form
      setEmail('');
      setPassword('');
      // Redirect to homepage or other page
      setTimeout(() => navigate('/'), 1000); // Redirect after 1 second
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
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>
    </Container>
  );
};

export default Login;
