import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import NavigationBar from '../Components/Navbar';

const ManageProducts = () => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Manage Products</h2>
        <Button variant="primary" className="mb-3">Add New Product</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product 1</td>
              <td>Description 1</td>
              <td>$100</td>
              <td>
                <Button variant="warning" className="me-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            {/* Diğer ürünler buraya eklenecek */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ManageProducts;
