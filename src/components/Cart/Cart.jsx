import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
    (items, index) => <li key={index}>{items.name}</li>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      <ul className='cart-items'>{cartItems}</ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className='actions'>
        <button className='button--alt' onClick={props.onCloseCart}>
          Close
        </button>
        <button className='button' onClick={props.onCloseCart}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
