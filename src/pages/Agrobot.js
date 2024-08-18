import React, { useEffect } from "react";
import AgrobotMain from "../components/projects/agrobots/AgrobotMain";
import AgrobotSubteams from "../components/projects/agrobots/AgrobotSubteams";

const Agrobot = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={{
        overflow: 'hidden',
      }}
    >
      <AgrobotMain />
      <AgrobotSubteams />
    </main >
  );
};

export default Agrobot;
