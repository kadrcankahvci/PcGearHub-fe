import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllUsers, updateUser, deleteUser, createUser } from '../../services/UserService'; // API servis dosyanız

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log('Fetched data:', data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleShowModal = (user = null) => {
    setSelectedUser(
      user || {
        userId: 0,
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        roleId: '', // Varsayılan değer 1
      }
    );
    setShowModal(true);
  };

  const handleSaveUser = async () => {
    try {
      if (selectedUser.userId) {
        // Var olan kullanıcıyı güncelle
        await updateUser(selectedUser);
        const updatedUsers = users.map((u) =>
          u.userId === selectedUser.userId ? selectedUser : u
        );
        setUsers(updatedUsers);
      } else {
        // Yeni kullanıcı ekle
        const newUser = await createUser(selectedUser);
        setUsers([...users, newUser]);
      }
      setShowModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      const filteredUsers = users.filter((u) => u.userId !== userId);
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Manage Users</h2>
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
              <th>Role ID</th>
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
                <td>{user.roleId}</td>
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
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser?.username || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, username: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={selectedUser?.email || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser?.phoneNumber || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser?.firstName || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, firstName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser?.lastName || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, lastName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formRoleId">
                <Form.Label>Role ID</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedUser?.roleId || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, roleId: parseInt(e.target.value) })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={selectedUser?.password || ''}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, password: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveUser}>
              Save User
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ManageUsers;
