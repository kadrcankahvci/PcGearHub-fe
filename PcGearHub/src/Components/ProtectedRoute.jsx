import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authcontext';

const ProtectedRoute = ({ element: Component, adminOnly = false }) => {
  const { isLoggedIn, userRole } = useContext(AuthContext); // Giriş durumu ve kullanıcı rolü

  // Eğer kullanıcı giriş yapmamışsa veya admin sayfasına erişmeye çalışıyorsa
  if (!isLoggedIn || (adminOnly && userRole !== 'admin')) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
