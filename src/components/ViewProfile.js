
import React from "react";
import { get } from "../services/service";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState("");

  const params = useParams();

  React.useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    try {
      const response = await get(`/users/${params.userId}`);
      setUser(response.data);
    } catch (err) {
      setStatus(err.message);
    }

    return user ? (
      <div>
        <h2>{user.username}'s profile</h2>
      </div>
    ) : (
      <p>{status}</p>
    );
  };
};

export default ViewProfile;