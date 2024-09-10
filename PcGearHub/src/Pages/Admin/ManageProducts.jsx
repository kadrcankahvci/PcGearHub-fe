import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllProducts, updateProduct, deleteProduct, createProduct } from '../../services/baseService'; // API servis dosyanız

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      console.log('Fetched data:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleShowModal = (product = null) => {
    setSelectedProduct(product || { name: '', description: '', price: 0, stockQuantity: 0, categoryId: 1 });
    setShowModal(true);
  };

  const handleSaveProduct = async () => {
    try {
      if (selectedProduct.productId) {
        // Var olan ürünü güncelle
        await updateProduct(selectedProduct);
        const updatedProducts = products.map((p) =>
          p.productId === selectedProduct.productId ? selectedProduct : p
        );
        setProducts(updatedProducts);
      } else {
        // Yeni ürün ekle
        const newProduct = await createProduct(selectedProduct);
        setProducts([...products, newProduct]);
      }
      setShowModal(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      const filteredProducts = products.filter((p) => p.productId !== productId);
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Manage Products</h2>
        <Button variant="primary" className="mb-3" onClick={() => handleShowModal()}>
          Add New Product
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Category ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>{product.categoryId}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleShowModal(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(product.productId)}
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
            <Modal.Title>{selectedProduct?.productId ? 'Edit Product' : 'Add New Product'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct?.name || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct?.description || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, description: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formProductPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct?.price || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, price: parseFloat(e.target.value) })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formProductStockQuantity">
                <Form.Label>Stock Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct?.stockQuantity || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, stockQuantity: parseInt(e.target.value) })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formProductCategoryId">
                <Form.Label>Category ID</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct?.categoryId || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, categoryId: parseInt(e.target.value) })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveProduct}>
              Save Product
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ManageProducts;
