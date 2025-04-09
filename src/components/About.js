import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the bio if it exists */}
      {bio && <p>{bio}</p>}
      {/* Render the Links component */}
      <Links links={links} />
    </div>
  );
}

export default About;