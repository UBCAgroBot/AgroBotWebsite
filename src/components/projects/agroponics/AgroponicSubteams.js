import { AgroponicsFarm } from "../../../assets";

import Automation from "./subteams/Automation";
import Plants from "./subteams/Plants";
import Structure from "./subteams/Structure";

const AgroponicSubteams = () => {

  return (
    <section
      id="agroponic"
      className="flex flex-col overflow-hidden bg-black "
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
