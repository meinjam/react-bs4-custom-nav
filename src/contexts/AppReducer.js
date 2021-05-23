const addProductToCart = (state, product) => {
  const updateCart = [...state.carts];
  const updateItemIndex = updateCart.findIndex(
    (item) => item.id === product.id
  );

  if (updateItemIndex < 0) {
    updateCart.push({ ...product, quantity: 1 });
  } else {
    const updateItem = {
      ...updateCart[updateItemIndex],
    };
    updateItem.quantity++;
    updateCart[updateItemIndex] = updateItem;
  }

  return { ...state, carts: updateCart };
};

const addCartQty = (state, product) => {
  const updatedCart = [...state.carts];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  const updateItem = {
    ...updatedCart[updatedItemIndex],
  };
  updateItem.quantity++;
  updatedCart[updatedItemIndex] = updateItem;

  return { ...state, carts: updatedCart };
};

const removeCartQty = (state, product) => {
  const updatedCart = [...state.carts];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  const updateItem = {
    ...updatedCart[updatedItemIndex],
  };
  if (updateItem.quantity > 1) {
    updateItem.quantity--;
    updatedCart[updatedItemIndex] = updateItem;
  }

  return { ...state, carts: updatedCart };
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return {
        ...state,
        tests: [action.payload, ...state.tests],
      };
    case 'DELETE_TEST':
      return {
        ...state,
        tests: state.tests.filter((test) => test.id !== action.payload.id),
      };
    case 'DELETE_ALL_TEST':
      return {
        ...state,
        tests: [],
      };

    // cart functionality
    case 'ADD_CART':
      return addProductToCart(state, action.payload);
    case 'ADD_CART_QUANTITY':
      return addCartQty(state, action.payload);
    case 'REMOVE_CART_QUANTITY':
      return removeCartQty(state, action.payload);
    case 'DELETE_CART':
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default AppReducer;
