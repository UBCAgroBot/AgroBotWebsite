import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  View,
} from '@react-three/drei'
import Lights from './Lights'
import * as THREE from 'three'
import { Suspense } from 'react'

const ModelViewer = ({
  groupRef,
  gsapType,
  cameraRef,
  setRotation,
  model,
  cameraPosition,
  vectorPosition,
  groupPosition,
}) => {
  const x = vectorPosition[0],
    y = vectorPosition[1],
    z = vectorPosition[2]

  return (
    <View id={gsapType} className="w-full h-full">
      <ambientLight intensity={1} />
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        ref={cameraRef}
      />
      <Lights />
      <OrbitControls
        makeDefault
        ref={cameraRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.3}
        target={new THREE.Vector3(x, y, z)}
        onEnd={() => setRotation(cameraRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} position={groupPosition}>
        <Suspense fallback="model">{model}</Suspense>
      </group>
    </View>
  )
}

export default ModelViewer
