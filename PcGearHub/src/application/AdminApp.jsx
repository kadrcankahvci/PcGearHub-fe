import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavigationBar from '../Pages/Admin/AdminNavbar.jsx';
import { getCookie } from '../utils/cookieUtils.jsx';
import '../App.css';

import AdminDashboard from '../Pages/Admin/AdminDashboard.jsx';
import ManageProducts from '../Pages/Admin/ManageProducts.jsx';
import Categories from '../pages/Categories.jsx';
import CategoryProducts from '../Pages/CategoryProducts.jsx';
import ManageUsers from '../Pages/Admin/ManageUsers.jsx';

import Footer from '../components/Footer.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

const AdminApp = () => {
 

  return ( <>
  
      <AdminNavigationBar />
      <Routes>
     
      <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
      <Route path="/admin/manage-products" element={<ProtectedRoute element={ManageProducts} />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryId' element={<CategoryProducts />} />
        <Route path='/admin/manage-users' element={<ManageUsers />} />

       
     
      </Routes>
      <Footer />
      </>
  );
};

export default AdminApp;
