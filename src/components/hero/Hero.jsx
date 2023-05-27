import React from "react";
import profile from "../../asserts/images/picofme.png";

const Hero = () => {
  return (
    <>
      <div className="container pb-5 px-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="p-5">
              <span className="text-warning fw-bold">
                Hi everyone, my name is
              </span>
              <h1 className="display-1 fw-bolder ">Isuru Madusanka</h1>
              <span className="text-muted fw-bold">
                I'm a Undergraduate Student - SLIIT
              </span>
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
