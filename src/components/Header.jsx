import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="container py-3">
        <div className="row align-items-center">
          <div className="col-4">
            <Link to="/" className="text-white text-decoration-none h1 d-inline-block text-nowrap">
              Jacques Scoffoni
            </Link>
          </div>
          <div className="col">
            <Link to="/" className="text-white text-decoration-none">
              About Me
            </Link>
          </div>
          <div className="col">
            <Link to="/portfolio" className="text-white text-decoration-none">
              Portfolio
            </Link>
          </div>
          <div className="col">
            <Link to="/contact" className="text-white text-decoration-none">
              Contact
            </Link>
          </div>
          <div className="col">
            <Link to="/resume" className="text-white text-decoration-none">
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
