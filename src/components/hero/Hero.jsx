import React from "react";
import profile from "../../asserts/images/picofme.png";
import cv from "../../asserts/pdf/cv.pdf";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleDownload = () => {
    saveAs(cv, "cv.pdf");
  };

  return (
    <>
      <div className="container pb-5 px-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="p-5">
              <div className="text-center text-xxl-start">
                <div className="fs-4 fw-light text-muted">
                  Undergraduate Student - SLIIT
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Isuru Madusanka
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <button
                    className="btn btn-warning btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    onClick={handleDownload}
                  >
                    Download Resume
                  </button>
                  <Link
                    to="/projects"
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  >
                    My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="p-lg-5 m-lg-2">
              <div className="rounded-circle border border-5 border-dark">
                <img src={profile} alt="profile" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
