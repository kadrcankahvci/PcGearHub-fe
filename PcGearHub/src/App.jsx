import { useState } from 'react'
import NavigationBar from './Components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';


function App() {
 
 
  return (<>
     
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    
    </>
  )
}

export default App
