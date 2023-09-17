import React, { useContext } from 'react';
import { MyContext } from './Provider';

function SuperChild() {
  const { Lastname, setLastName } = useContext(MyContext);

  return (
    <div>
        <p> I am super Child</p>
    <h2> this is my last name :{Lastname}</h2>  
    </div>
  );
}

export default SuperChild;
