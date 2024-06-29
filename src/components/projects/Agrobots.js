import React, { useEffect, useRef, useState } from "react";
import AgrobotsModel from "./AgrobotsModel";

export const Agrobots = () => {
  const cameraRef = useRef();
  const [rotation, setRotation] = useState(0);

  return (
    <section className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
      <div className="w-full h-full">
        <AgrobotsModel controlRef={cameraRef} setRotationState={setRotation} />
      </div>
    </section>
  );
};

export default Agrobots;
