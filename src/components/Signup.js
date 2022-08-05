import React from "react";
import { post } from "../services/service";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        setStatus("Please include username and password");
      } else {
        let response = await post("/users/signup", {
          username: username,
          password: password,
        });
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/login");
      }
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="signUpPage">
      <form onSubmit={create}>
        <h2>Create an Account</h2>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Create Account</button>
        <span>Already have an account?</span>
        <Link to="/login" id="loginBtn">
          Login
        </Link>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Signup;
