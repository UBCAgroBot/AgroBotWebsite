import React, { useEffect } from "react";
import { AgrobotMain, AgrobotSubteams } from "../components/projects";

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
      <p>test</p>
      <AgrobotSubteams />
    </main >
  );
};

export default Agrobot;
