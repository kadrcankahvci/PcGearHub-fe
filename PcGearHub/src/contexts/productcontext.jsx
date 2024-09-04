import React,{createContext,useState} from 'react'

import { getCookie } from '../Utils/cookieUtils';



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState([]);

    
    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };
  
    // Sepetteki toplam ürün sayısını hesaplama
    const cartCount = cartItems.length;
  
    // Toplam tutarı hesaplama
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    
  
    const values = { cartItems,setCartItems,addToCart, cartCount, totalAmount}
    return (
      <ProductContext.Provider value={values}>
        {children}
      </ProductContext.Provider>
    );
  };