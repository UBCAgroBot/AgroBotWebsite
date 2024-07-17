import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, Box, OrbitControls, DragControls } from "@react-three/drei";
import * as THREE from "three";
import path from "./untitled.glb";

const SpinningBox = ({ position, scale }) => {
  const ref = useRef();
  const { scene } = useGLTF(path);

  useFrame(() => {
    ref.current.rotation.x += 0.0005;
    ref.current.rotation.y += 0.005;
  });

  return (
    <primitive object={scene} scale={scale} position={position} ref={ref} />
  );
};

const AgrobotsModel = ({ controlRef, scale, position }) => {
  let x = position[0];
  let y = position[1];
  let z = position[2];
  return (
    <Canvas>
      <ambientLight />
      <mesh scale={[2, 2, 2]} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        screenSpacePanning={false}
        maxAzimuthAngle={Infinity}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Infinity}
        minPolarAngle={0}
        enableRotate={true}
        target={new THREE.Vector3(x, y, z)}
      />
      <SpinningBox scale={scale} position={position} />
    </Canvas>
  );
};

export default AgrobotsModel;

useGLTF.preload(path);
