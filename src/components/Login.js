import React, { useState } from "react";
import { post } from "../services/service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  //step 1 get user input
  //  const nav = useNavigate();
  const [status, setStatus] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  //  const handleUsernameChange = (username) =>{
  //  console.log(username)
  //  setUsername(username)
  //  }
  const navigate = useNavigate();

  //  const handleLogin = (e)=>{
  //    e.preventDefault()

  //     console.log(username)
  //     console.log(password)
  //  }
  //  const handlePasswordChange = (password) =>{
  //   console.log(password)
  //   setPassword(password)
  //  }

  const create = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        setStatus("Please include username and password");
      } else {
        let response = await post("/users/login", {
          username: username,
          password: password,
        });
        console.log("RESPONSE", response.data);
        localStorage.setItem("token", response.data);
        //  localStorage.setItem("username", response.data.username);
        navigate("/all");
      }
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="logInPage">
      <form onSubmit={create}>
        <h2>Please Login</h2>
        <label for="uname">Username</label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Username"
          name="uname"
          required
        />

        <label for="psw">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <span>Don't have an account?</span>
        <Link to="/signup" id="signUpBtn">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
