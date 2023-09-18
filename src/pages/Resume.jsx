import React from "react";
import resume from "../assets/JacquesScoffoniResume.pdf";

function Resume() {
  return (
    <section className="container my-5">
      <h1>Resume</h1>
      <a href={resume} className="btn btn-primary">
        My resume
      </a>
      <div className="container my-5">
        <h2>SKILLS:</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript / jQuery</li>
          <li>SQL / MySQL</li>
          <li>NoSQL / MongoDB</li>
          <li>Node.js / Express</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
