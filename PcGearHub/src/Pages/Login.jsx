import React, { useContext, useState } from 'react';
import { Container, Form, Button, Alert, Tabs, Tab } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../Utils/cookieUtils'; // Çerez yönetim fonksiyonunu import et
import '../styles/Login.css'; // Özel stil dosyanızı import edin
import { AuthContext } from '../contexs/authcontext';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  // const [activeKey, setActiveKey] = useState('user'); // Tab seçimi için state
  // const navigate = useNavigate(); // Yönlendirme için hook
  const { password,setPassword,error, setError,success, setSuccess,activeKey, setActiveKey,navigate,email, setEmail} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basit bir giriş simülasyonu
    if (activeKey === 'user' && email === 'test@example.com' && password === 'kdr123') {
      setSuccess('Login successful!');
      setError('');
      
      // Çerez oluştur
      setCookie('isLoggedIn', true, 1);

      // Formu temizle
      setEmail('');
      setPassword('');
      
      // 1 saniye sonra ana sayfaya yönlendir
      setTimeout(() => navigate('/'), 1000);
    } else if (activeKey === 'admin' && email === 'admin@example.com' && password === 'admin123') {
      setSuccess('Admin login successful!');
      setError('');

      // Çerez oluştur
      setCookie('isAdmin', true, 1);
      setCookie('isLoggedIn', true, 1);

      // Formu temizle
      setEmail('');
      setPassword('');

      // 1 saniye sonra admin paneline yönlendir
      setTimeout(() => navigate('/admin/dashboard'), 1000);
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
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        id="login-tabs"
        className="mb-3"
      >
        <Tab eventKey="user" title="User Login">
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
        </Tab>
        <Tab eventKey="admin" title="Admin Login">
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
        </Tab>
      </Tabs>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </Container>
  );
};

export default Login;
