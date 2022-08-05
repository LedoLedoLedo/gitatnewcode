import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage">
      <article>
        <h2>
          {" "}
          Welcome Y'all
          <br /> let us introduce you
          <br /> to our services.{" "}
        </h2>
        <p>
          We are the most locally based events search in USA, allowing you to
          get detail information on your zipcode.
          <br />
          We have now added one of our more liked features Which is our Gig
          Posting Board ! There you can make sure you catch all extremely local
          events
        </p>
      </article>
      <div className="halfPageImg"></div>
    </div>
  );
};

export default About;
