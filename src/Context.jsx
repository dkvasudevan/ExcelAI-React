import { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <MyContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
