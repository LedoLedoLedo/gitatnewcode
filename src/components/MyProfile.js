import React from "react";
import { get } from "../services/service";
import { useParams, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    fetchUser();
  },);

  const fetchUser = async () => {
    try {
      const response = await get(`/users/profile`);
      setUser(response.data);
     
    } catch (err) {
      setStatus(err.message);
    }

    return user ? (
      <div>
       <h1>{}</h1>
        
      </div>
    ) : (
      <p>{status}</p>
    );
  };
};

export default MyProfile;