import React,{createContext,useState} from 'react'
import {  useNavigate } from 'react-router-dom';



export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 
 
    
  
    const values = {username,setUsername,firstName,setFirstName,lastName, setLastName,email, setEmail,password, setPassword,phoneNumber, setPhoneNumber,error, setError
      ,success, setSuccess,navigate
    }
    return (
      <RegisterContext.Provider value={values}>
        {children}
      </RegisterContext.Provider>
    );
  };