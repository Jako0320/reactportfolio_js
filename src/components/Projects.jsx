import React from "react";

function Projects({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.title} /><br/>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a><br/>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
