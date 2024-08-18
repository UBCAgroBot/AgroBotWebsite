import AppliedAi from "./subteams/AppliedAI";
import Chassis from "./subteams/Chassis";
import Electrical from "./subteams/Electrical";
import Extermination from "./subteams/Extermination";
import Navigation from "./subteams/Navigation";
import FarmPath from "../../../assets/image/FarmPath.jpeg"

const AgrobotSubteams = () => {

  return (
    <section
      id="farm"
      className="bg-black z-[-20] flex flex-col overflow-hidden "
      style={{
        backgroundImage: `url(${FarmPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(50% + 5%) center",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </section>
  )

}

export default AgrobotSubteams;
