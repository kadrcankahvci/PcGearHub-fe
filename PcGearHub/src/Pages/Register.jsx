import React, { useContext, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios'u import etmeyi unutma
import '../styles/Register.css'; // Kendi CSS'ini import et
 import { registerUser } from '../services/baseService';
import { RegisterContext } from '../contexts/registercontext';

const Register = () => {
  const { username,setUsername,firstName,setFirstName,lastName, setLastName,email, setEmail,password, setPassword,phoneNumber, setPhoneNumber,error, setError
    ,success, setSuccess,navigate} = useContext(RegisterContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Kullanıcı kayıt verilerini oluştur
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    // Alanların doldurulup doldurulmadığını kontrol et
    if (!username || !firstName || !lastName || !email || !password || !phoneNumber) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }
    try {
      const response = await registerUser(newUser);
      console.log('Success:', response);
      setSuccess('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 1000); // Kayıt başarılıysa login sayfasına yönlendir
    } catch (err) {
      console.error('Error registering user:', err);
      setError('Registration failed. Please try again.');
      setSuccess('');
    }

    
  };

  return (
    <Container className="auth-container">
      <h2 className="text-center mb-4">Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFirstName" className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName" className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

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

        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
};

export default Register;
