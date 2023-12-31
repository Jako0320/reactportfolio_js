import profilePic from "../assets/ProfilePic.jpeg";
import { Link } from "react-router-dom";
import React from "react";

function About() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={profilePic} className="profilePic" alt="Profile Pic" />
        </div>
        <div className="col-md-6">
          <h1>About Me</h1>
          <p>
            I started programming in the late 90's, mainly python, pascal and
            visual basic, completing a computer science certificate in 2002. I
            shifted to business after completing my quantum chemistry diploma
            and only used programming sporadically for specific needs across my
            various roles.
          </p>

          <p>
            I never lost interesting in programming however, still coding for
            myself on occasion, and I eventually shifted back to programming,
            completing the fullstack boot camp offered by Columbia and eDX in
            2023, and am looking for a position as a back end developer.
          </p>

          <p>
            <Link to="/portfolio" className="text-black h3">My projects</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
