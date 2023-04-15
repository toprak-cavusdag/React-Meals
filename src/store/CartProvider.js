import CarContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const carContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CarContext.Provider value={carContext}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CartProvider;
