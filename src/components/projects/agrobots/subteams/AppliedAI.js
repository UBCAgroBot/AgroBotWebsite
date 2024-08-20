import SubteamSection from "../../utils/SubteamSection";
import TextChild from "../../utils/TextChild";
import ImageChild from "../../utils/ImageChild";

const AppliedAi = () => {



  return (
    <section id="ai-section" className="flex w-[100lvw] ">
      <SubteamSection
        id={"AppliedAiSection"}
        leftChild={<TextChild
          id={"AppliedAiText"}
          header={"Applied AI"}
          body={"The Applied AI sub-team is dedicated to creating advanced machine learning models that address a variety of AgroBot's tasks. This includes detecting maize and weeds, segmenting grape clusters, and implementing machine vision in the Robot Operating System (ROS). By exploring the intersections between AI research and emerging Agri-Tech, the team continually pushes the boundaries of agricultural innovation. Their work ensures that AgroBot can efficiently and accurately perform its functions in diverse agricultural settings."}
        />}
        rightChild={<ImageChild />}
      />
    </section>
  );
};

export default AppliedAi;
