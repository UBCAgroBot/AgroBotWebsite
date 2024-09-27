import React from "react";
import AgroponicsMain from './AgroponicsMain'
import AgroponicSubteams from "./AgroponicsSubteams";

function Agroponics() {
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
