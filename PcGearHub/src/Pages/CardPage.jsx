// src/pages/CartPage.jsx

import React, { useContext } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../contexts/authcontext';

const CartPage = () => {
  // AuthContext'ten gerekli değerleri al
  const { cartItems, totalAmount, setCartItems } = useContext(AuthContext);

  // Sepeti boşaltma işlevi
  const handleEmptyCart = () => {
    setCartItems([]); // Sepeti boşalt
  };

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>

      {/* Eğer sepet boşsa kullanıcıya mesaj göster */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.productId}>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td> {/* Ürün ismi */}
                  <td>{item.description}</td> {/* Ürün açıklaması */}
                  <td>${item.price.toFixed(2)}</td> {/* Ürün fiyatı */}
                  <td>1</td> {/* Varsayılan olarak 1 adet her ürün */}
                  <td>${item.price.toFixed(2)}</td> {/* Ürün ara toplamı */}
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Toplam tutar gösterimi */}
          <div className="d-flex justify-content-between mt-3">
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
            {/* Sepeti boşaltma butonu */}
            <Button variant="danger" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
          </div>

          {/* Satın alma işlemi için bir buton */}
          <div className="d-flex justify-content-end mt-3">
            <Button variant="success">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
