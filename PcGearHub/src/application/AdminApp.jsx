import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getCookie } from '../utils/cookieUtils.jsx';
import '../App.css'

import AdminDashboard from '../Pages/Admin/AdminDashboard.jsx';
import ManageProducts from '../Pages/Admin/ManageProducts.jsx';
import Contact from '../pages/Contact.jsx';
import About from '../pages/About.jsx';
import CategoryPage from '../pages/Categories.jsx';

// import Footer from './Components/Footer.jsx/index.js';

import Footer from '../components/Footer.jsx';

import ProtectedRoute from '../components/ProtectedRoute.jsx';



const AdminApp = () => {
    const isAdmin = getCookie('isAdmin');
  const isLoggedIn= getCookie('isLoggedIn');
  return (<div className='main'>
 <NavigationBar/>
    <Routes>
    <Route path='/' element={<AdminDashboard />} />
    <Route path="/Admin/dashboard" element={<ProtectedRoute element={AdminDashboard}  />} />
    <Route path="/Admin/manage-products" element={<ProtectedRoute element={ManageProducts}  />} />
    <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<CategoryPage />} />
        
       
       
  
        
     
       
    </Routes>
  <Footer/>
  
  
  
  
  
  </div>
    
  )
}

export default AdminApp