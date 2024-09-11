import React, { useContext, useMemo } from 'react';
import { Table, Container, Button, Dropdown } from 'react-bootstrap';
import { ProductContext } from '../contexts/productcontext';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);

  // Sepeti boşaltma işlevi
  const handleEmptyCart = () => {
    setCartItems([]); // Sepeti boşalt
  };

  // Ürünün miktarını güncelleme işlevi
  const handleQuantityChange = (productId, quantity) => {
    setCartItems(prevItems => {
      // Miktarı sıfır olan ürünü kaldır
      if (quantity === 0) {
        return prevItems.filter(item => item.productId !== productId);
      }
      // Miktarı güncelle
      return prevItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      );
    });
  };

  // Toplam tutarı hesaplamak için useMemo kullanımı
  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }, [cartItems]);

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
                  <td>{item.name}</td> {/* Ürün ismi */}
                  <td>{item.description}</td> {/* Ürün açıklaması */}
                  <td>${item.price.toFixed(2)}</td> {/* Ürün fiyatı */}
                  <td>
                    <Dropdown onSelect={(value) => handleQuantityChange(item.productId, Number(value))}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {item.quantity || 1}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {[...Array(10).keys()].map(num => (
                          <Dropdown.Item key={num + 1} eventKey={num + 1}>
                            {num + 1}
                          </Dropdown.Item>
                        ))}
                        <Dropdown.Item eventKey={0}>Remove</Dropdown.Item> {/* 0 seçeneği eklenir */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td> {/* Ürün ara toplamı */}
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
