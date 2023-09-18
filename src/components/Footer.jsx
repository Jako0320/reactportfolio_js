import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2">
            <a
              href="https://www.linkedin.com/in/jacques-scoffoni/"
              className="text-white text-decoration-none"
            >
              LinkedIn
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://github.com/jako0320"
              className="text-white text-decoration-none"
            >
              GitHub
            </a>
          </div>
          <div className="col-2">
            <a
              href="mailto:jacques.scoffoni@gmail.com"
              className="text-white text-decoration-none"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
