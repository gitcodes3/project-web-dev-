import React from 'react';

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('smartphones')}>Smartphones</li>
        <li onClick={() => setCurrentPage('laptops')}>Laptops</li>
        <li onClick={() => setCurrentPage('cart')}>Cart</li>
        <li onClick={() => setCurrentPage('checkout')}>Checkout</li>
        <li onClick={() => setCurrentPage('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
