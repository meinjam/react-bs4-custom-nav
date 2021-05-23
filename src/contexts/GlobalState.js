import { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  tests: [],
  carts: [],
};

const GlobalContext = createContext(initialState);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTest = (test) => {
    dispatch({ type: 'ADD_TEST', payload: test });
  };

  const deleteTest = (test) => {
    dispatch({ type: 'DELETE_TEST', payload: test });
  };

  const clearTest = () => {
    dispatch({ type: 'DELETE_ALL_TEST' });
  };

  //cart
  const addCart = (item) => {
    dispatch({ type: 'ADD_CART', payload: item });
  };

  const deleteCart = (item) => {
    dispatch({ type: 'DELETE_CART', payload: item });
  };

  const addCartQuantity = (item) => {
    dispatch({ type: 'ADD_CART_QUANTITY', payload: item });
  };

  const removeCartQuantity = (item) => {
    dispatch({ type: 'REMOVE_CART_QUANTITY', payload: item });
  };

  const value = {
    tests: state.tests,
    addTest,
    deleteTest,
    clearTest,
    carts: state.carts,
    addCart,
    deleteCart,
    addCartQuantity,
    removeCartQuantity,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
