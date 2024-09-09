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


// Diğer API çağrılarını buraya ekleyebilirsiniz
