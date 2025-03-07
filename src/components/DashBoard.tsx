import React from "react";
import About from "./About";
import Work from "./Work";
import Skill from "./Skill";
import Cert from "./Cert";

const DashBoard = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <About />
      <Cert />
      <Skill />
      <Work />
    </div>
  );
};

export default DashBoard;
