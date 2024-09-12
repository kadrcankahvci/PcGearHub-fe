// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const SearchResults = () => {
  // useLocation hook'u ile arama sonuçlarını alın
  const location = useLocation();
  const products = location.state?.products?.$values || []; // $values anahtarını kullanarak ürünleri alın

  // Ürün yoksa "Ürün bulunamadı" mesajını göster
  if (products.length === 0) {
    return (
      <div className="container mt-4">
        <h1>Search Results</h1>
        <p>Ürün bulunamadı.</p> {/* Ürün bulunamadığında gösterilecek mesaj */}
      </div>
    );
  }

  // Ürünleri listele
  return (
    <div className="container mt-4">
      <h1>Search Results</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.productId} className="col-md-4">
            <ProductCard product={product} /> {/* Ürünleri ProductCard bileşeniyle göster */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
