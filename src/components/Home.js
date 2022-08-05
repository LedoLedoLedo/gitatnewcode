import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Widget from "./Widget";
import Search from "./Search";

 const Home = ()=> {

    return(
        <div className="wholePage">
            <Navbar/>
            <div className="heroImage">
                <article className="textWrapper">
                    <h1>Find <br/> where  <br/> it's at</h1>
                    <p>All your local events in one place</p>
                </article>
            </div>
            <Search/>
            <Widget/> 
            {/* <Login/>  */}
        </div>
    )
 }





export default Home;