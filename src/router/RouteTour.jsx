import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Education from "../pages/education/Education";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const RouteTour = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RouteTour;
