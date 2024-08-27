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
import { AuthProvider } from './contexs/authcontext.jsx';





function App() {
  const isAdmin = getCookie('isAdmin'); // Admin kontrolü için çerezden bilgi al


 
  return (<>
  <AuthProvider>
  <NavigationBar/>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
       
        
      {isAdmin && (
        <>
        <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard /> : <Login />} />
          <Route path="/admin/manage-products" element={isAdmin ? <ManageProducts /> : <Login />} />
      
        </>
      )}
       
    </Routes>
    
    </AuthProvider>
  </>
  )
}

export default App
