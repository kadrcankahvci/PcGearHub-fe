// src/pages/ManageProducts.jsx

import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import productsData from '../../data/products'; // Ürün verilerini dışarıdan alıyoruz

const ManageProducts = () => {
  const [products, setProducts] = useState(productsData); // Ürünleri tutan state
  const [showModal, setShowModal] = useState(false); // Modal gösterme kontrolü
  const [selectedProduct, setSelectedProduct] = useState(null); // Düzenlenecek ürün

  // Ürün ekleme veya güncelleme modal'ını açma
  const handleShowModal = (product = null) => { 
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Ürün ekleme veya güncelleme işlemi
  const handleSaveProduct = () => {
    if (selectedProduct.productId) {
      // Var olan ürünü güncelle
      const updatedProducts = products.map((p) =>
        p.productId === selectedProduct.productId ? selectedProduct : p
      );
      setProducts(updatedProducts);
    } else {
      // Yeni ürün ekle
      const newProduct = {
        ...selectedProduct,
        productId: products.length + 1, // Yeni ürün ID'si otomatik atanıyor
      };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Ürün silme işlemi
  const handleDeleteProduct = (productId) => {
    const filteredProducts = products.filter((p) => p.productId !== productId);
    setProducts(filteredProducts);
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
              <th>Image</th> {/* Yeni sütun */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px' }} />
                  ) : (
                    'No image'
                  )}
                </td>
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

        {/* Ürün Ekle/Düzenle Modalı */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct ? 'Edit Product' : 'Add New Product'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct?.productName || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, productName: e.target.value })
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

              <Form.Group controlId="formProductImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct?.imageUrl || ''}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, imageUrl: e.target.value })
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
