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
    <div>
      <h2>All Posts</h2>
      <h3>{status}</h3>
      {posts.map((post) => {
        return (
          <div>
            <p>
              {/* Created by:{post.creatorId.username} */}
              <Link to={`/users/${post.creatorId._id}`}>
                {post.creatorId.username}
              </Link>
            </p>
            <h3>{post.content}</h3>
            <button
              className="delete"
              onClick={() => {
                deletePost(post._id);
              }}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
