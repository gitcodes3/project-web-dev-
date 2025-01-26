import React from 'react';

function Checkout() {
  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Shipping Address" required />
        <textarea placeholder="Additional Notes"></textarea>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;
