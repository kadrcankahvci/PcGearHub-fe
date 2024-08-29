import axios from 'axios'
import {BASE_URL} from '../constants/BaseApi'

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: BASE_URL, // Replace with your base URL
  timeout: 1000, // Optional: Set a timeout in milliseconds
  headers: { 'Content-Type': 'application/json' }, // Optional: Set default headers
});

// Example usage of the Axios instance
api.get('/users')
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle the error
  });
