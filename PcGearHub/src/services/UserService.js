    
    import api from "./baseService";
    
    
    
    // Tüm kullanıcıları almak için fonksiyon
export const getAllUsers = async () => {
    try {
      const response = await api.get('/User/GetAllUsers');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  // Tek bir kullanıcıyı ID ile almak için fonksiyon
  export const getUserById = async (id) => {
    try {
      const response = await api.get(`/User/GetUserById/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  // Kullanıcı oluşturma
  export const createUser = async (userDto) => {
    try {
      const response = await api.post('/User/CreateUser', userDto);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  // Kullanıcı güncelleme
  export const updateUser = async (id, user) => {
    try {
      const response = await api.put(`/User/UpdateUser/${id}`, user);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  // Kullanıcı silme
  export const deleteUser = async (id) => {
    try {
      await api.delete(`/User/DeleteUser/${id}`);
    } catch (error) {
      console.error('Error deleting user:', error.response ? error.response.data : error.message);
      throw error;
    }
  };