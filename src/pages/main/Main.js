import React from "react";

import "./main.css";
import About from "../../components/about/About";
import Roadmap from "../../components/roadmap/Roadmap";
import FAQ from "../../components/faq/FAQ";
import Animation from "../../components/animation/Animation";
import Team from "../../components/team/Team";

const Main = () => {
  return (
    <div className="main">
      <About />
      <Roadmap />
      <Team />
      <FAQ />
      <Animation />
    </div>
  );
};

export default Main;
