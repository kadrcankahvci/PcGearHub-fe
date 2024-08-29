import React from 'react';
import ProductCard from './ProductCard'; // ProductCard bileşenini import edin
import products from '../data/products'; // Ürün verilerini import edin


const ProductList = () => {
  
  return (
    <div className="container mt-4">
      <h1>Available Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.productId} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
