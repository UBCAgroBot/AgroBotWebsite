import RightBlock from "../utils/RightBlock";

const Extermination = () => {
  return (
    <section id="extermination-section" className="flex  w-[100lvw] h-[75lvh] z-[999]">
      <RightBlock
        title={"extermination"}
        titleContent={"Extermination"}
        bodyContent={
          "Develops systems to target and destroy weeds without damaging the crops around them. In our first year, we explored several possible ways to accomplish this, from robot claws to lasers, and eventually settled on a machine-vision-aimed herbicide sprayer and a robotic weedwhacker. We developed a working prototype of the herbicide sprayer, complete with targeting software, and continue to work on the weedwhacker."
        }
      />
    </section>
  );
};

export default Extermination;

