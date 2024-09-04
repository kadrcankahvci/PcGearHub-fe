import React from 'react'
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
import Footer from './Components/Footer.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import CategoryProducts from './Pages/CategoryProducts.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import './styles/GearApp.css';
import CartPage from './Pages/CardPage.jsx';

const GearApp = () => {
    const isAdmin = getCookie('isAdmin');
  const isLoggedIn= getCookie('isLoggedIn');
  return (<div className='main'>
   <NavigationBar/>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard}  />} />
     <Route path="/admin/manage-products" element={<ProtectedRoute element={ManageProducts}  />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        <Route path='/cart' element={<CartPage />} />
        
     <Route path="/product/:id" element={<ProductDetail />} /> {/* Ürün detay sayfası için rota */}
     <Route path='/categories/:categoryId' element={<CategoryProducts />} /> {/* Kategori ürünleri sayfası */}
       
  
        
     
       
    </Routes>
  <Footer/>
  
  
  
  
  
  </div>
    
  )
}

export default GearApp