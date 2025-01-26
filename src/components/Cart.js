import React from 'react';

function Cart({ cartItems, removeFromCart, clearCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <span>{item.name}</span> - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <button onClick={clearCart} style={{ marginTop: '10px' }}>Clear Cart</button>
          <button onClick={() => alert('Proceed to checkout')} style={{ marginTop: '10px', marginLeft: '10px' }}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
