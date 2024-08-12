import { useEffect } from "react";
import LeftBlock from "../utils/LeftBlock";

const Navigation = () => {
  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--dynamic-height', `${vh * 75} px`);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id="navigation-section" className="flex w-[100lvw] ">
      <LeftBlock
        title="navigation"
        titleContent="Navigational & Embedded Systems"
        bodyContent="The Navigation & Embedded Systems sub-team is responsible for developing sophisticated systems that guide AgroBot through crop fields autonomously. By integrating a range of sensors such as depth cameras, LiDAR, GPS, and IMU, the team ensures that AgroBot can plan and execute precise paths, avoiding crop damage and optimizing field traversal. The team's innovative designs and implementations are crucial for achieving fully autonomous operation, making efficient and careful navigation through diverse agricultural environments possible."
      />
    </section>
  );
};

export default Navigation;
