import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Widget from "./Widget";
import Search from "./Search";

const Home = () => {
  return (
    <div className="wholePage">
      <div className="heroImage">
        <article className="textWrapper">
          <h1>
            <span>Find</span>
            <br />
            <span>where</span>
            <br />
            <span>it's at</span>
          </h1>
          <p>All your local events in one place</p>
        </article>
      </div>
      <Search />
      <Widget />
      {/* <Login/>  */}
    </div>
  );
};

export default Home;
