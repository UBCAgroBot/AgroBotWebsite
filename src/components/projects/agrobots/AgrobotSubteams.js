import AppliedAi from "./subteams/AppliedAI";
import Chassis from "./subteams/Chassis";
import Electrical from "./subteams/Electrical";
import Extermination from "./subteams/Extermination";
import Navigation from "./subteams/Navigation";
import ProjectSubteam from "../ProjectSubteam.tsx";

const AgrobotSubteams = () => {

  return (
    <section
      id="farm"
      className="flex flex-col"
    >
      <ProjectSubteam
        title = "Applied AI"
        text="Lorem lorem"
      />
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </section>
  )

}

export default AgrobotSubteams;
