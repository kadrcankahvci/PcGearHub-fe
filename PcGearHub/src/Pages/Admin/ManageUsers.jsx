import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { getAllUsers, updateUser, deleteUser, createUser } from '../../services/UserService'; // Kullanıcı API servis dosyanız

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      if (data && data.$values) {
        setUsers(data.$values);
      } else {
        console.error('Beklenen veri yapısına ulaşılamadı:', data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleShowModal = (user = null) => {
    setSelectedUser(user || { username: '', email: '', phoneNumber: '', firstName: '', lastName: '', password: '' });
    setShowModal(true);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser.userId) {
        // Var olan kullanıcıyı güncelle
        await updateUser(selectedUser.userId, selectedUser);
        const updatedUsers = users.map((u) =>
          u.userId === selectedUser.userId ? selectedUser : u
        );
        setUsers(updatedUsers);
        setSuccess('User updated successfully!');
      } else {
        // Yeni kullanıcı ekle
        const newUser = await createUser(selectedUser);
        setUsers([...users, newUser]);
        setSuccess('User created successfully!');
      }
      setShowModal(false);
      setSelectedUser(null);
    } catch (error) {
      setError('Error saving user: ' + error.message);
      console.error('Error saving user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      const filteredUsers = users.filter((u) => u.userId !== userId);
      setUsers(filteredUsers);
      setSuccess('User deleted successfully!');
    } catch (error) {
      setError('Error deleting user: ' + error.message);
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Manage Users</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Button variant="primary" className="mb-3" onClick={() => handleShowModal()}>
          Add New User
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleShowModal(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteUser(user.userId)}
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
            <Modal.Title>{selectedUser?.userId ? 'Edit User' : 'Add New User'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSaveUser}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={selectedUser?.username || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, username: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={selectedUser?.firstName || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, firstName: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={selectedUser?.lastName || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, lastName: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={selectedUser?.email || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={selectedUser?.password || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, password: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={selectedUser?.phoneNumber || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                {selectedUser?.userId ? 'Update User' : 'Add User'}
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ManageUsers;
