import LeftBlock from "../utils/LeftBlock";
import { useEffect } from "react";

const Electrical = () => {
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
    <section id="electrical-section" className="flex  w-[100lvw]">
      <LeftBlock
        title="electrical"
        titleContent="Electrical"
        bodyContent="The Electrical Team is crucial to AgroBot’s success, focusing on the design, specification, assembly, and manufacturing of the robot’s power electronics. They develop detailed electrical schematics and layouts, select and procure high-quality components, and integrate technologies for efficient power management. The team ensures reliable operations through the precise assembly and integration of these power systems, complemented by rigorous testing under various conditions and advanced quality control measures to detect and resolve any issues. Their meticulous approach ensures that AgroBot’s electrical systems are robust, reliable, and support its autonomous operations effectively."
      />
    </section>
  );
};

export default Electrical;
