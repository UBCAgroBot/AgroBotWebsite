import Automation from "./subteams/Automation";
import Plants from "./subteams/Plants";
import Structure from "./subteams/Structure";
import { AgroponicsFarm } from "../../../assets";

const AgroponicSubteams = () => {

  return (
    <section
      id="agroponic"
      className="bg-black flex flex-col overflow-hidden "
      style={{
        backgroundImage: `url(${AgroponicsFarm})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(50% + 5%) center",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >

      <Automation />
      <Plants />
      <Structure />

    </section>
  );
}

export default AgroponicSubteams;
