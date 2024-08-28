// src/models/Product.js

class Product {
  constructor(productId, productName, description, detailedDescription, price, stockQuantity, categoryId, image) {
    this.productId = productId;
    this.productName = productName;
    this.description = description;
    this.detailedDescription = detailedDescription;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.categoryId = categoryId;
    this.image = image; // Yeni resim alanı
  }
}

export default Product;
