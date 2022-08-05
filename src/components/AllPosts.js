import React from "react";
import { get, remove } from "../services/service";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const navigate = useNavigate;
  React.useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      let response = await get("/posts/all");
      // console.log("RESPONSE", response);
      setPosts(response.data);
    } catch (err) {
      setStatus(err.message);
    }
  };
  const deletePost = async (postId) => {
    let response = await remove(`/posts/delete/${postId}`);
    console.log(response);
  };

  return (
    <div className="allPostsPage">
      <h1>Gig Postings</h1>
      <h3>{status}</h3>
      {posts.map((post) => {
        return (
          <div className="postCard">
            <section className="postCardLeft">
              <div className="profileIcon"></div>
            </section>
            <section className="postCardCenter">
              <section className="postCardContent">
                <span className="postCardUserName">
                  {/* Created by:{post.creatorId.username} */}
                  <Link to={`/users/${post.creatorId._id}`}>
                    {post.creatorId.username}
                  </Link>
                </span>
                <span>{post.content}</span>
              </section>
              <section className="postCardActions">
                <button
                  className="delete"
                  onClick={() => {
                    deletePost(post._id);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
              </section>
            </section>
            <section className="postCardRight">
              <span>30 min</span>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
