import React,{createContext,useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import { getCookie } from '../Utils/cookieUtils';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [activeKey, setActiveKey] = useState('user'); // Tab seçimi için state
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(getCookie('isLoggedIn'))
    const [isAdmin,setIsAdmin]= useState(getCookie('isAdmin'));
    const [cartItems, setCartItems] = useState([]);

    
    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };
  
    // Sepetteki toplam ürün sayısını hesaplama
    const cartCount = cartItems.length;
  
    // Toplam tutarı hesaplama
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    
  
    const values = {
        password,setPassword,error, setError,success, setSuccess,activeKey, setActiveKey,navigate,email, setEmail,isLoggedIn, setIsLoggedIn,isAdmin,setIsAdmin,
        cartItems,setCartItems,addToCart, cartCount, totalAmount}
    return (
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    );
  };