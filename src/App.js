import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import CreatePost, { Post } from "./components/PostSection";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import AllPosts from "./components/AllPosts";
import MyProfile from "./components/MyProfile";
import About from "./components/About";
import ViewProfile from "./components/ViewProfile";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/posts" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all" element={<AllPosts />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/About" element={<About />} />
        <Route path="/users/:userId" element={<ViewProfile />} />

        {/* <p>{!data ? "Loading..." : data}</p> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

<div>
  <Link to="/search"> search</Link>
</div>;

export default App;
