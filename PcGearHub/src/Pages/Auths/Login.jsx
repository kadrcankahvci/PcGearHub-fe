import React, { useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/bla.css';
import { AuthContext } from '../../contexts/authcontext';
import { setCookie } from '../../utils/cookieUtils';
import { loginUser } from '../../services/baseService';

const Login = () => {
  const { password, setPassword, error, setError, success, setSuccess, email, setEmail, setIsLoggedIn, setIsAdmin} = useContext(AuthContext);
  const navigate = useNavigate(); // useNavigate kullanarak yönlendirme işlemleri yapılır
  const {data} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // API'ye giriş bilgilerini gönder
      const response = await loginUser({ email, password });
      const { message, user } = response;
  
      // Başarılı giriş durumunda
      if (user) {
        setSuccess(message);
        setError('');
  
        // Çerezleri ayarla
        setCookie('isLoggedIn', true, 1);
        setCookie('user', JSON.stringify(user), 1); // Kullanıcı bilgilerini çerezde saklayabilirsiniz
  
        // Kullanıcının rolüne göre çerez ayarla ve yönlendirme yap
        if (user.userRoleId === 4) { // Admin rolü
          setCookie('isAdmin', true, 1);
          setIsAdmin(true);
          navigate('/admin/dashboard');
        } else {
          setCookie('isAdmin', false, 1);
          setIsAdmin(false);
          navigate('/');
        }
  
        // Oturum açılmış olarak işaretle ve userId'yi ayarla
        setIsLoggedIn(true);
       
        
        // Formu temizle
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
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
