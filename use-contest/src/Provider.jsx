import React, { createContext, useState } from 'react';

// Create a context
export const MyContext = createContext();

const Provider = ({ children }) => {
  const [name, setName] = useState('Soumya');
  const [Lastname, setLastName] = useState('nayak'); // Include Lastname and setLastName
   const [color]=useState('green')
  return (
    <MyContext.Provider value={{ name, setName, Lastname, setLastName ,color}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
