import React from "react";

function Projects({ projects }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">
        {projects.map((project, index) => (
          <div className="col mb-4" key={index}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{project.title}</h3>
                <div className="text-center">
                  <img
                    src={project.imageUrl}
                    className="card-img-top img-fluid"
                    alt={project.title}
                  />
                </div>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  {" "}
                  {/* This div pushes the links to the bottom */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
