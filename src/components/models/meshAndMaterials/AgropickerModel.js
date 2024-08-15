import React from 'react'
import { useGLTF } from '@react-three/drei'
import path from "../../../assets/models/agroarm-transformed.glb"

const AgroPickerModel = (props) => {
  const { nodes, materials } = useGLTF(path)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Boss-Extrude2_2_-_Part'].geometry} material={materials.PaletteMaterial001} position={[0.491, 0.442, -0.107]} rotation={[0, 0.214, 2.929]} />
    </group>
  )
}

useGLTF.preload(path)

export default AgroPickerModel;
