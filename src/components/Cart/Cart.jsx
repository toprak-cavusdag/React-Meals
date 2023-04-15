import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
    (items) => <li>{items.name}</li>
  );
  return (
    <div>
      <ul className='cart-items'>{cartItems}</ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className='actions'>
        <button className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </div>
    </div>
  );
};

export default Cart;
