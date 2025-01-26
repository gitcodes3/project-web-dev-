import React from 'react';

function ProductList({ addToCart, category }) {
  const products = {
    smartphones: [
      { name: 'iPhone 13', price: '$799', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'Samsung Galaxy S21', price: '$699', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'Google Pixel 6', price: '$599', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'OnePlus 9', price: '$729', imgSrc: 'https://via.placeholder.com/150' },
    ],
    laptops: [
      { name: 'MacBook Pro', price: '$1299', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'Dell XPS 13', price: '$999', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'HP Spectre x360', price: '$1099', imgSrc: 'https://via.placeholder.com/150' },
      { name: 'Lenovo ThinkPad X1', price: '$1149', imgSrc: 'https://via.placeholder.com/150' },
    ],
  };

  return (
    <div className="product-list">
      {products[category].map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.imgSrc} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;