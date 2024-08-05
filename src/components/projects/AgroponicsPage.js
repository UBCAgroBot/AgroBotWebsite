import { AgroponicsFarm } from "../../assets";
import AgroponicsMain from "./agroponics/AgroponicsMain";
import Subteams from "./agroponics/Subteams";

const AgroponicsPage = () => {
  return (
    <main
      style={{
        overflowX: "hidden",
        overflowY: "hidden"
      }}
    >
      <AgroponicsMain />
      <Subteams />
    </main>
  );
};

export default AgroponicsPage;
