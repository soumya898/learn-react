// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Router/Navbar';
 import Home from './Router/Home';

import About from './Router/About';
import Contact from './Router/Contact';

function App() {
  return (
  
      <div>
  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

  );
}

export default App;
