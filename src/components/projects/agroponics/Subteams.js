import { AgroponicsFarm } from "../../../assets";
import Automation from "./Automation";
import Plants from "./Plants";
import Structure from "./Structure";

const Subteams = () => {
    return (
    <section className="bg-black"
      style={{
        backgroundImage: `url(${AgroponicsFarm})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}>
      <Automation/>
      <Plants/>
      <Structure/>
      </section>
       );
  };
  
  export default Subteams; 
