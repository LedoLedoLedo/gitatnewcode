import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>
        The page you're looking for cannot be found.{" "}
        <Link to="/">Click here</Link> to return home.
      </p>
    </div>
  );
};

export default NotFound;
