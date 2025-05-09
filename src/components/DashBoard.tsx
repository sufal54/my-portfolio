import React from "react";
import About from "./About";
import Work from "./Work";
import Skill from "./Skill";
import Cert from "./Cert";
import Expr from "./Expr";

const DashBoard = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <About />
      <Cert />
      <Skill />
      <Expr/>
      <Work />
    </div>
  );
};

export default DashBoard;
