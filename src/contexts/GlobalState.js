import { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  tests: [],
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

  const value = {
    tests: state.tests,
    addTest,
    deleteTest,
    clearTest,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
