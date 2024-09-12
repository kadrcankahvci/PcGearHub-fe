

import api from '../services/baseService';

// Tüm kategorileri getirme
export const getAllCategories = async () => {
  try {
    const response = await api.get('/Category/GetAllCategories');
    return response.data.$values
  } catch (error) {
    console.error('Error fetching categories:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Kategori silme
export const deleteCategory = async (categoryId) => {
  try {
    await api.delete(`/Category/DeleteCategory/${categoryId}`);
  } catch (error) {
    console.error('Error deleting category:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Yeni kategori oluşturma
export const createCategory = async (categoryDTO) => {
  try {
    const response = await api.post('/Category/CreateCategory', categoryDTO);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Kategori güncelleme

