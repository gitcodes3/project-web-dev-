import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Checkout from './components/Checkout';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <h2>Welcome to the Tech Gadget Store</h2>;
      case 'smartphones':
        return <ProductList addToCart={addToCart} category="smartphones" />;
      case 'laptops':
        return <ProductList addToCart={addToCart} category="laptops" />;
      case 'cart':
        return <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />;
      case 'checkout':
        return <Checkout />;
      case 'contact':
        return <ContactUs />;
      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
