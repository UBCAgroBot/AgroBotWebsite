import { useEffect } from "react";

const Agroponic = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main
      style={{
        overflow: "hidden",
      }}
    >
    </main>
  );
};

export default Agroponic;
