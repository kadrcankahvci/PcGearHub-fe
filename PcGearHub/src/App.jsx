import React, { useContext } from 'react';
import { getCookie } from './utils/cookieUtils.jsx';
import './App.css';
import { AuthContext, AuthProvider } from './contexts/authcontext.jsx';
import GearApp from './application/GearApp.jsx';
import AdminApp from './application/AdminApp.jsx';
import { ProductProvider } from './contexts/productcontext.jsx';
import { RegisterProvider } from './contexts/registercontext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 const {isLoggedIn,isAdmin} = useContext(AuthContext)

  return (
   
      <ProductProvider>
        <RegisterProvider>
        
            {/* Giriş yapılmışsa ve adminse AdminPage göster, değilse GearApp göster */}
            {  isLoggedIn ? (isAdmin ? <AdminApp /> : <GearApp />) : <GearApp/>}
          
        </RegisterProvider>
      </ProductProvider>
    
  );
}

export default App;
