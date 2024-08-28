import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Ürün verilerini import edin

const ProductDetail = () => {
  const { id } = useParams(); // URL parametresinden ürün ID'sini alın
  const product = products.find(p => p.productId === parseInt(id)); // Ürünü bul

  if (!product) {
    return <p>Product not found</p>; // Ürün bulunamazsa hata mesajı göster
  }

  return (
    <div className="container mt-4">
      <h1>{product.productName}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.productName} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.detailedDescription}</p>
          <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
          
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
