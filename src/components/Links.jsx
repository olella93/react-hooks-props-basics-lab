import React from "react";

function Links({ links = {} }) {
  return (
    <div>
      <h3>Links</h3>
      {links.github && (
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          {links.github}
        </a>
      )}
      {links.linkedin && (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          {links.linkedin}
        </a>
      )}
    </div>
  );
}

export default Links;