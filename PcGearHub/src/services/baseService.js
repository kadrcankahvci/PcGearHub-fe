import axios from 'axios'
import BASE_URL from '../constants/BaseApi'

// Create an Axios instance with a base URL
// const api = axios.create({
//   baseURL: BASE_URL, // Replace with your base URL
//   // Optional: Set a timeout in milliseconds
//   headers: { 'Content-Type': 'application/json' }, // Optional: Set default headers
// });

// Example usage of the Axios instance
  export const  adressGetApi = () =>  axios.get(BASE_URL +'/Address/Get')
  .then(response => {
    console.log(BASE_URL); // Handle the response data
    console.log(response.data); // Handle the response data
     return response.data;  
  } 
)
  .catch(error => {
    console.error(error); // Handle the error
  });
 
  

