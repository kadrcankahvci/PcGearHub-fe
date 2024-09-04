import { useState } from 'react'
import NavigationBar from './Components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCookie } from './Utils/cookieUtils';
import './App.css'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Profile from './Pages/Profile.jsx';
import AdminDashboard from './Pages/AdminDashboard';
import ManageProducts from './Pages/ManageProducts.jsx';
import { Nav } from 'react-bootstrap';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Categories from './pages/Categories.jsx';
// import Footer from './Components/Footer.jsx/index.js';
import { AuthProvider } from './contexts/authcontext.jsx';
import GearApp from './GearApp.jsx';
import { ProductContext, ProductProvider } from './contexts/productcontext.jsx';





function App() {
  const isAdmin = getCookie('isAdmin');
  const isLoggedIn= getCookie('isLoggedIn');


 
  return (<>
  
  <AuthProvider>
 <ProductProvider>
    <GearApp/>
    </ProductProvider>
    </AuthProvider>
  </>
  )
}

export default App
