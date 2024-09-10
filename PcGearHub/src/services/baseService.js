import axios from 'axios';


// API URL'ini buraya yazın
  const BASE_URL = 'https://localhost:7005/api';

// Axios instance oluşturun
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Buraya diğer başlıkları ekleyebilirsiniz
  },
});

// Adresleri almak için fonksiyon
export const getAllAddresses = async () => {
  try {
    const response = await api.get('/Address/GetAllAddresses');
    return response.data;
   // response.status.
  } catch (error) {
    throw error; // Hata durumunda hatayı fırlat
  }
};

// Kullanıcı kaydı için fonksiyon
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/User/CreateUser', userData);
    return response.data;
  } catch (error) {
    throw error; // Hata durumunda hatayı fırlat
  }
};
export const loginUser = async (userLoginDTO) => {
  try {
    const response = await api.post('/Login/Authenticate', userLoginDTO);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// product serviceye tasinacak
export const getAllProducts = async () => {
  try {
    const response = await api.get('/Product/GetAllProducts');
    // Dönen veriden $values dizisini al
    return response.data.$values;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    throw error;
  }
};


// Ürün silme fonksiyonu
export const deleteProduct = async (productId) => {
  try {
    await api.delete(`/Product/DeleteProduct/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const createProduct = async (productDTO) => {
  try {
    const response = await api.post('/Product/CreateProduct', productDTO);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const updateProduct = async (productDTO) => {
  try {
    const response = await api.put('/Product/UpdateProduct', productDTO);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error.response ? error.response.data : error.message);
    throw error;
  }
};


// Diğer API çağrılarını buraya ekleyebilirsiniz
