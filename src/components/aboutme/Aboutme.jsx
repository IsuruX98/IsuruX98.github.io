import React from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-bold mb-4 text-warning">
                  Intern - Software Enginer
                </p>
                <p className="text-muted">
                  I'm a BSc (Hons) software engineering student at the Sri Lanka
                  Institute of Information Technology. I'm passionate about
                  software development and seeking an internship as a software
                  engineer. I have coding skills in Java, Kotlin, Javascript and
                  python, I'm familiar with software development methodologies.
                  I'm eager to learn and contribute to meaningful projects with
                  a dynamic team
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <Link
                    to="https://wa.me/+94771886641"
                    className="text-success"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/isuru-madusanka-1b9210218/"
                    className="text-primary"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link to="https://github.com/IsuruX98" className="text-dark">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
