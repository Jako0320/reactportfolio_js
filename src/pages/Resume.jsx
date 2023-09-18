import React from "react";
import resume from "../assets/JacquesScoffoniResume.pdf";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <a href={resume} className="link">My resume</a>
    </section>
  );
}

export default Resume;
