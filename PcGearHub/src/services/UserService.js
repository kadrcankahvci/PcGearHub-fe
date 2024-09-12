import api from '../services/baseService';

export const getAllUsers = async () => {
  try {
    const response = await api.get('/User/GetAllUsers');
    // Dönen veriden $values dizisini al
    return response.data.$values;
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await api.delete(`/User/DeleteUser/${userId}`);
  } catch (error) {
    console.error('Error deleting user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createUser = async (userDTO) => {
  try {
    const response = await api.post('/User/CreateUser', userDTO);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateUser = async (userDTO) => {
  try {
    const response = await api.put('/User/UpdateUser', userDTO);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};
