import RightBlock from "../utils/RightBlock";
import { useEffect } from "react";

const Extermination = () => {
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
    <section
      id="extermination-section"
      className="flex  w-[100lvw] z-[999]"
    >
      <RightBlock
        title={"extermination"}
        titleContent={"Extermination"}
        bodyContent={
          "The Extermination sub-team tackles multidisciplinary design challenges to create precision extermination mechanisms. They focus on minimizing environmental impact while safeguarding crops from damage. The team designs sprayer nozzles and delivery systems, implements control algorithms based on real-time sensor data, and ensures compatibility with various herbicides. They also develop mechanical systems for effective weed removal and design autonomous systems for targeted extermination. Their efforts are crucial in enhancing AgroBot's weed management capabilities, improving crop yields, and reducing labor and chemical usage."
        }
      />
    </section>
  );
};

export default Extermination;
