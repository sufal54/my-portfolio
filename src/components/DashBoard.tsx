import React from "react";
import About from "./About";
import Work from "./Work";
import Skill from "./Skill";

const DashBoard = () => {
  return (
    <div className="w-full h-full">
      <About />
      <Skill />
      <Work />
    </div>
  );
};

export default DashBoard;
