import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Preload, View } from "@react-three/drei";
import ModelViewer from "./utils/ModelView";
import AgrobotModel from "./meshAndMaterials/AgrobotModel";

// TODO: add the loader as fallback
const AgrobotModelView = ({ id, gsapType, scale, cameraPosition, groupPosition, vectorPosition }) => {
  const cameraRef = useRef();
  const modelRef = useRef(new THREE.Group());
  const [rotation, setRotation] = useState(0);

  return (
    <div
      id={id}
      className="h-full w-full"
    >
      < ModelViewer
        groupRef={modelRef}
        gsapType={gsapType}
        cameraRef={cameraRef}
        setRotation={setRotation}
        model={<AgrobotModel scale={scale} />}
        cameraPosition={cameraPosition}
        groupPosition={groupPosition}
        vectorPosition={vectorPosition}
      />
      <Canvas
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
    </div >
  )
}

export default AgrobotModelView;
