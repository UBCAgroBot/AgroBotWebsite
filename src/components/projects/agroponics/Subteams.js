import { AgroponicsFarm } from "../../../assets";
import Automation from "./Automation";
import Plants from "./Plants";
import Structure from "./Structure";

const Subteams = () => {
  return (
    <section
      className="bg-black z-[-20] flex flex-col"

      style={{
        backgroundImage: `url(${AgroponicsFarm})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: 'hidden',
      }}>
      <Automation />
      <Plants />
      <Structure />
    </section>
  );
};

export default Subteams; 
