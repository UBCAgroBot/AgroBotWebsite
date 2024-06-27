import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SpinningBox = () => {
  const ref = useRef();
  const spinSpeed = useRef(0.005);

  useFrame(() => {
    ref.current.rotation.x += spinSpeed.current;
    ref.current.rotation.y += spinSpeed.current;
  });

  return (
    <Box ref={ref} args={[1, 1, 1]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  );
};

const AgrobotsModel = ({ controlRef, setRotationState }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />
      <SpinningBox />
    </Canvas>
  );
};

export default AgrobotsModel;
