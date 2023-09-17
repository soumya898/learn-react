import React from 'react';
import Provider from './Provider'; // Import the Provider component
import Child from './Child'; // Import the Child component
 import SuperChild from './SuperChild';

const App = () => {
  return (
    <Provider>
      <div>
        <Child />
        <SuperChild/>
      </div>
    </Provider>
  );
};

export default App;
