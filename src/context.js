import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Context.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
