import { AgrobotBackground } from "../../assets";
import AgrobotMain from "./agrobots/AgrobotMain";
import Subteams from "./agrobots/Subteams";
import React, { useEffect } from "react";

const Agrobot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <main
      style={{
        backgroundImage: `url(${AgrobotBackground})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
        maxWidth: "100vw",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <AgrobotMain />
      <Subteams />
    </main>
  );
};

export default Agrobot;
