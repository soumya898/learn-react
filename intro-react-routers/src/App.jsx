

import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from './Routes/Home';
import Blog from './Routes/Blog';
import Contact from './Routes/Contact';
import Menu from './Routes/Menu';
import Navbar from './Routes/Navbar';


// pages


function App() {

  const navigation=useNavigate();

  let x=20
function Blogpage(){

      navigation("/blog",{state:{x:x}})
      

}





  return (

    <div>
      <Navbar />
      <button onClick={Blogpage}> blog Page </button>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="/blog" element={<Blog />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route  path="/navbar" element={<Navbar/>}/> */}




      </Routes>

    </div>


  )

}

export default App
