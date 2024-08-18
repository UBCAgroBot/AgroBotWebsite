import TextChild from "../../utils/TextChild";
import ImageChild from "../../utils/ImageChild";
import SubteamSection from "../../utils/SubteamSection";

const Structure = () => {
  return (
    <section id="structure-section" className="flex  w-[100lvw]">
      <SubteamSection
        id={"structureSection"}
        leftChild={<TextChild
          id={"structureText"}
          header={"Structure"}
          body={"The Structure sub-team integrates the needs of the Automation and Plants sub-teams to create optimal environments for crop growth. Currently, the team is renovating an old 16-foot trailer by adding insulation, heating, electrical systems, a rainwater collection system, and structural reinforcement to support a controlled environment for hydroponic systems. The work is diverse and evolves with the project’s needs, presenting new and unexpected challenges. This hands-on team addresses multi-scale problems through collaborative and innovative solutions."}
        />}
        rightChild={<ImageChild />}
      />
    </section>
  );
};

export default Structure;
