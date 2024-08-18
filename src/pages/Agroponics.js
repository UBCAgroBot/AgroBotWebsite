import { useEffect } from "react";
import AgroponicSubteams from "../components/projects/agroponics/AgroponicSubteams";
import AgroponicsMain from "../components/projects/agroponics/AgroponicsMain";

const Agroponics = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main
      style={{
        overflow: "hidden",
      }}
    >
      <AgroponicsMain />
      <AgroponicSubteams />
    </main>
  );
};

export default Agroponics;
