import { AgrobotBackground } from "../../assets";
import AgrobotMain from "./agrobots/AgrobotMain";
import Subteams from "./agrobots/Subteams";

const AgrobotsPage = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${AgrobotBackground})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
        maxWidth: "100vw",
      }}
    >
      <AgrobotMain />
      <Subteams />
    </main>
  );
};

export default AgrobotsPage;
