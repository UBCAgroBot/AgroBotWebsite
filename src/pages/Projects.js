import React from "react";
import { Agrobots, Agropicker, Agroponics } from "../components/projects";

function Projects() {
  return (
    <div className="!bg-gradient-to-b from-[#F8F7F1]  via-[#F8F7F1] to-lime-500 w-auto">
      <Agrobots></Agrobots>
      <Agroponics></Agroponics>
      <Agropicker></Agropicker>
    </div>
  );
}

export default Projects;

