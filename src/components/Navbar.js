import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>
        <Link to="/">GIG AT</Link>
      </h1>
      <div class="link-container">
        <Link to="about">About</Link>
        <Link to="/signup">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
