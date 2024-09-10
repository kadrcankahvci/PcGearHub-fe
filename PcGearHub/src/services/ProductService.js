




import api from '../services/baseService';


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