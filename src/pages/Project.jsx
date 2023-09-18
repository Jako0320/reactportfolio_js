import React from "react";

function Project({ title, description, imageUrl, demoUrl, githubUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}

export default Project;
