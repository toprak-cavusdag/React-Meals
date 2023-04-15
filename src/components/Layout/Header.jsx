import React from 'react';
import './Header.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='Meal Images' />
      </div>
    </>
  );
};

export default Header;
