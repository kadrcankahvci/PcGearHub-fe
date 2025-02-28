import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCookie } from '../utils/cookieUtils.jsx';
import '../App.css'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Auths/Login.jsx';
import Register from '../Pages/Auths/Register.jsx';
import Profile from '../Pages/Profile.jsx';
import AdminDashboard from '../Pages/Admin/AdminDashboard.jsx';
import ManageProducts from '../Pages/Admin/ManageProducts.jsx';
import { Nav } from 'react-bootstrap';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Categories from '../pages/Categories.jsx';
// import Footer from './Components/Footer.jsx/index.js';

import Footer from '../components/Footer.jsx';
import ProductDetail from '../Pages/Product/ProductDetail.jsx';
import CategoryProducts from '../Pages/CategoryProducts.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import '../styles/GearApp.css';
import CartPage from '../Pages/CardPage.jsx';
import SearchResults from '../Pages/Product/SearchProducts.jsx';

const GearApp = () => {

  return (<div className='main'>
   <NavigationBar/>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard}/>} />
        <Route path="/admin/manage-products" element={<ProtectedRoute element={ManageProducts}  />} />
        
     <Route path="/product/:id" element={<ProductDetail />} /> {/* Ürün detay sayfası için rota */}
     <Route path='/categories/:categoryId' element={<CategoryProducts />} /> {/* Kategori ürünleri sayfası */}
     <Route path="/search-results" element={<SearchResults />} /> {/* Yeni rota */}
  
        
     
       
    </Routes>
  <Footer/>
  
  
  
  
  
  </div>
    
  )
}

export default GearApp