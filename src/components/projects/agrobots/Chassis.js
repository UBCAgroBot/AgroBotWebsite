import RightBlock from "../utils/RightBlock";
import { useEffect } from "react";

const Chassis = () => {
  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--dynamic-height', `${vh * 50} px`);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="chassis-section" className="flex  w-[100lvw]">
      <RightBlock
        title={"chassis"}
        titleContent={"Chassis/Powertrain"}
        bodyContent={
          "The Chassis/Powertrain sub-team is responsible for the comprehensive design and manufacturing of AgroBot’s chassis and powertrain. This entails overseeing AgroBot’s movement capabilities, aesthetic design, and the seamless integration of its internal components. The team meticulously selects appropriate motors and power transmission systems, conducts finite element analysis to ensure stress tolerance and safety, and develops detailed design solutions. Additionally, they are tasked with assembling components from all other sub-teams onto AgroBot’s main body, ensuring a cohesive and functional final product."
        }
      />
    </section>
  );
};

export default Chassis;
