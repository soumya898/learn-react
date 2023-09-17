
import React from "react";

import { NavLink } from "react-router-dom";

// Link == a tag  , NavLink is used to navigate which page it is 


  const Navbar=()=>{
    return(

     <div className="navbar">

       <NavLink to="/">Home</NavLink>
       <NavLink to="/contact"> Contact</NavLink>
       <NavLink to="/menu">Menu</NavLink>
       <NavLink to="/blog">Blog</NavLink>

     </div>
    )
  }

  export default Navbar 