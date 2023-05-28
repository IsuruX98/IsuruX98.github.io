import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:isurusanka98@gmail.com";
  };

  return (
    <>
      <footer className="bg-light py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">
                Copyright &copy; Isuru Madusanka 2023
              </div>
            </div>
            <div className="col-auto">
              <Link className="small" to="/">
                Home
              </Link>
              <span className="mx-1">&middot;</span>
              <Link className="small" to="/projects">
                Projects
              </Link>
              <span className="mx-1">&middot;</span>
              <Link className="small" to="#" onClick={handleContactClick}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
