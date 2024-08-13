import { AgrobotBackground } from "../../assets";
import AgrobotMain from "./agrobots/AgrobotMain";
import Subteams from "./agrobots/Subteams";
import React, { useEffect } from "react";

const AgrobotsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={{
        flex: '1',
        backgroundImage: `url(${AgrobotBackground})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat-y",
        overflow: 'hidden',
        maxWidth: "100vw",
      }}
    >
      <AgrobotMain />
      <Subteams />
    </main >
  );
};

export default AgrobotsPage;
