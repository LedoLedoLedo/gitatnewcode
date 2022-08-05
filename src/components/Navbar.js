import React from "react";
import { Link } from "react-router-dom";


  const Navbar = () => {
    return (
      <nav id="navbar">
        {/* <div class="link-container">
          <a>Lodging</a>
          <a>Day-Tours</a>
        </div>  */}
        <h1>GIG AT</h1>
        <Link to="/signup">
          Login
        </Link>
        <Link to='about'> About Us</Link>
      </nav>   
    )
  }



  export default Navbar;