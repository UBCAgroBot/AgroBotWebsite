import { useEffect } from "react";
import LeftBlock from "../utils/LeftBlock";

const AppliedAi = () => {
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
    <section id="ai-section" className="flex w-[100lvw] mt-[0%]">
      <LeftBlock
        title="ai"
        titleContent="Applied Ai"
        bodyContent="The Applied AI sub-team is dedicated to creating advanced machine learning models that address a variety of AgroBot's tasks. This includes detecting maize and weeds, segmenting grape clusters, and implementing machine vision in the Robot Operating System (ROS). By exploring the intersections between AI research and emerging Agri-Tech, the team continually pushes the boundaries of agricultural innovation. Their work ensures that AgroBot can efficiently and accurately perform its functions in diverse agricultural settings."
      />
    </section>
  );
};

export default AppliedAi;
