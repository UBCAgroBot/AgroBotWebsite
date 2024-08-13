import { useState, useRef } from "react";
import ModelViewer from "./ModelViewer";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Preload, View } from "@react-three/drei";


const AgroponicView = ({ gsapType }) => {
  const cameraRef = useRef();
  const modelRef = useRef(new THREE.Group());
  const [rotation, setRotation] = useState(0);

  return (
    <div
      id="main-model-container"
      className="absolute w-full h-full z-10 md:h-[90vh] overflow-hidden"
    >
      <ModelViewer
        groupRef={modelRef}
        gsapType={gsapType}
        cameraRef={cameraRef}
        setRotation={setRotation}
      />
      <Canvas
        id="model"
        frameloop="always"
        className="w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default AgroponicView;
