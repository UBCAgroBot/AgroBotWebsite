import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import path from '../../../assets/models/agroarm-transformed.glb'
import { useFrame } from '@react-three/fiber'

const AgroPickerModel = (props) => {
  const { nodes, materials } = useGLTF(path)
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.0005
    ref.current.rotation.x += 0.0
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes['Boss-Extrude2_2_-_Part'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.491, 0.442, -0.107]}
        rotation={[0, 0.214, 2.929]}
      />
    </group>
  )
}

useGLTF.preload(path)

export default AgroPickerModel
