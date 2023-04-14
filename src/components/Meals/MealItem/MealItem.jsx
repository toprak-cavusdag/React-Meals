import React from 'react';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; //2 basamaklı olması için kullandık
  return (
    <li className='meal'>
      <div>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
