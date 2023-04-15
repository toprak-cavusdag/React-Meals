import React, { useContext } from 'react';
import './HeaderCartButton.css';
import CarContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CarContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className='button' onClick={props.onClick}>
      <span className='icon'>
        <CartIcon />
      </span>

      <span>Your Carts</span>

      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
