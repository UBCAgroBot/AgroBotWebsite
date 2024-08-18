import SubteamSection from "../../utils/SubteamSection";
import TextChild from "../../utils/TextChild";
import ImageChild from "../../utils/ImageChild";
const Electrical = () => {
  return (
    <section id="electrical-section" className="flex  w-[100lvw] ">
      <SubteamSection

        id={"electricalSection"}
        leftChild={<TextChild
          id={"electricalText"}
          header={"Electrical"}
          body={"The Electrical Team is crucial to AgroBot’s success, focusing on the design, specification, assembly, and manufacturing of the robot’s power electronics. They develop detailed electrical schematics and layouts, select and procure high-quality components, and integrate technologies for efficient power management. The team ensures reliable operations through the precise assembly and integration of these power systems, complemented by rigorous testing under various conditions and advanced quality control measures to detect and resolve any issues. Their meticulous approach ensures that AgroBot’s electrical systems are robust, reliable, and support its autonomous operations effectively."}
        />}
        rightChild={<ImageChild />}
      />
    </section>
  );
};

export default Electrical;
