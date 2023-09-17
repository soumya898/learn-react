import React, { useContext } from 'react';
import { MyContext } from './Provider'; // Import the context

const Child = () => {
  const { name, setName ,color} = useContext(MyContext);

  return (
    <div>
      <h1 style={{color:color}}>My name is {name}</h1>
      <button onClick={() => setName('Ranjan')}>Change Name</button>
    </div>
  );
};

export default Child;
