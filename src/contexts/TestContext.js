import { createContext, useContext, useState } from 'react';

const TestContext = createContext();

export function useTest() {
  return useContext(TestContext);
}

export function TestProvider({ children }) {
  const [tests, setTests] = useState([]);

  const value = {
    tests,
    setTests,
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}
