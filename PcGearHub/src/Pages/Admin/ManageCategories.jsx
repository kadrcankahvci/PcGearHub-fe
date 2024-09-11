import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllCategories, deleteCategory, createCategory } from '../../services/CategoryService'; // updateCategory kaldırıldı

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      console.log('Fetched data:', data);
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleShowModal = () => {
    // Sadece yeni kategori eklemek için modal açılıyor
    setSelectedCategory({ name: '', description: '' });
    setShowModal(true);
  };

  const handleSaveCategory = async () => {
    try {
      // Yeni kategori ekle
      const newCategory = await createCategory(selectedCategory);
      setCategories([...categories, newCategory]);
      setShowModal(false);
      setSelectedCategory(null);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      const filteredCategories = categories.filter((c) => c.categoryId !== categoryId);
      setCategories(filteredCategories);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Manage Categories</h2>
        <Button variant="primary" className="mb-3" onClick={handleShowModal}>
          Add New Category
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.categoryId}>
                <td>{category.categoryId}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteCategory(category.categoryId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCategoryName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCategory?.name || ''}
                  onChange={(e) =>
                    setSelectedCategory({ ...selectedCategory, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formCategoryDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCategory?.description || ''}
                  onChange={(e) =>
                    setSelectedCategory({ ...selectedCategory, description: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveCategory}>
              Save Category
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ManageCategories;
