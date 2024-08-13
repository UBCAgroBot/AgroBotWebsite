import RightBlock from "../utils/RightBlock";
import { useEffect } from "react";

const Extermination = () => {
  return (
    <section
      id="extermination-section"
      className="flex  w-[100lvw] "
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
