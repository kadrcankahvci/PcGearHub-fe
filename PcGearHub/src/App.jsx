import React from 'react';
import { getCookie } from './utils/cookieUtils.jsx';
import './App.css';
import { AuthProvider } from './contexts/authcontext.jsx';
import GearApp from './application/GearApp.jsx';
import AdminApp from './application/AdminApp.jsx';
import { ProductProvider } from './contexts/productcontext.jsx';
import { RegisterProvider } from './contexts/registercontext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const isAdmin = getCookie('isAdmin') === 'true'; // Cookie'nin string olabileceğini varsayarak 'true' ile karşılaştırma yapıyoruz.
  const isLoggedIn = getCookie('isLoggedIn') === 'true'; // Giriş kontrolü yapıyoruz.

  return (
    <AuthProvider>
      <ProductProvider>
        <RegisterProvider>
         
            {/* Giriş yapılmışsa ve adminse AdminPage göster, değilse GearApp göster */}
            {isLoggedIn && isAdmin ? <AdminApp /> : <GearApp />}
         
        </RegisterProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
