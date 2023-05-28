import React from "react";
import Hero from "../../components/hero/Hero";
import Aboutme from "../../components/aboutme/Aboutme";
import Skills from "../../components/skills/Skills";
import Education from "../education/Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Education />
      <Skills />
    </div>
  );
};

export default Home;
