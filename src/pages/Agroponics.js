import React, { useEffect } from "react";
import { AgroponicsMain, AgroponicSubteams } from "../components/projects";

const Agroponics = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main
      style={{
        overflow: "hidden",
      }}
    >
      <AgroponicsMain />
      <AgroponicSubteams />
    </main>
  );
};

export default Agroponics;
