import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaJava, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiSpringboot,
  SiPhp,
  SiPython,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiAndroidstudio,
  SiFigma,
  SiCanva,
  SiIntellijidea,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section className="pb-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center mb-5">
                <h2 className="fs-2 fw-semibold">
                  <span className="text-dark d-inline">Skills</span>
                </h2>
                <p className="mt-3 badge bg-warning">Languages & frameworks</p>
                <div className="row">
                  <div className="d-flex col-12 col-lg-6 justify-content-center fs-1  gap-4">
                    <FaReact />
                    <FaJava />
                    <SiJavascript />
                    <SiKotlin />
                    <FaNodeJs />
                    <SiMongodb />
                    <SiSpringboot />
                  </div>
                  <div className="d-flex col-12 col-lg-6 justify-content-center mt-lg-0 mt-3 fs-1 gap-4">
                    <SiPhp />
                    <SiPython />
                    <SiMysql />
                    <SiTailwindcss />
                    <SiBootstrap />
                    <SiHtml5 />
                    <FaCss3Alt />
                  </div>
                </div>
                <p className="badge bg-warning mt-3">Environments</p>
                <div className="row">
                  <div className="d-flex col-12 justify-content-center fs-1  gap-4">
                    <TbBrandVscode />
                    <SiAndroidstudio />
                    <SiIntellijidea />
                    <SiFigma />
                    <SiCanva />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
