import React,{createContext,useState} from 'react'
import {  useNavigate } from 'react-router-dom';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [activeKey, setActiveKey] = useState('user'); // Tab seçimi için state
    const navigate = useNavigate();
  
    const values = {
        password,setPassword,error, setError,success, setSuccess,activeKey, setActiveKey,navigate,email, setEmail
    }
    return (
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    );
  };