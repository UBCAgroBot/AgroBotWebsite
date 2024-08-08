import { useEffect } from "react";
import AgroponicsMain from "./agroponics/AgroponicsMain";
import Subteams from "./agroponics/Subteams";

const Agroponic = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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

export default Agroponic;
