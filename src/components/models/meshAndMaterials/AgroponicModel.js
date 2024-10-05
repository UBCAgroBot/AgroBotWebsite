import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import path from '../../../assets/models/AgroponicsSketch.glb'
import { useFrame } from '@react-three/fiber'

const AgroponicModel = (props) => {
  const { nodes, materials } = useGLTF(path)
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.0005
    ref.current.rotation.x += 0.0
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes['Dirt-1_-_Part'].geometry}
        material={materials['leather 2d']}
        position={[0, 0.127, 0]}
      />
      <mesh
        geometry={nodes['Pipe-1_-_Part'].geometry}
        material={materials['pw-mt11000']}
        position={[0, 0.127, 0]}
      />
      <instancedMesh
        args={[nodes.Mesh_4.geometry, materials.PaletteMaterial001, 30]}
        instanceMatrix={nodes.Mesh_4.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_5.geometry, materials.PaletteMaterial001, 30]}
        instanceMatrix={nodes.Mesh_5.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_6.geometry, materials.PaletteMaterial001, 30]}
        instanceMatrix={nodes.Mesh_6.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_7.geometry, materials.PaletteMaterial001, 30]}
        instanceMatrix={nodes.Mesh_7.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_8.geometry, materials.PaletteMaterial001, 60]}
        instanceMatrix={nodes.Mesh_8.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_9.geometry, materials.PaletteMaterial001, 60]}
        instanceMatrix={nodes.Mesh_9.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_10.geometry, materials.PaletteMaterial001, 60]}
        instanceMatrix={nodes.Mesh_10.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_11.geometry, materials.PaletteMaterial001, 60]}
        instanceMatrix={nodes.Mesh_11.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_12.geometry, materials.PaletteMaterial001, 20]}
        instanceMatrix={nodes.Mesh_12.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_13.geometry, materials.PaletteMaterial001, 20]}
        instanceMatrix={nodes.Mesh_13.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_14.geometry, materials.PaletteMaterial001, 20]}
        instanceMatrix={nodes.Mesh_14.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_15.geometry, materials.PaletteMaterial001, 20]}
        instanceMatrix={nodes.Mesh_15.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_36.geometry, materials.PaletteMaterial001, 95]}
        instanceMatrix={nodes.Mesh_36.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_37002.geometry, materials.PaletteMaterial001, 95]}
        instanceMatrix={nodes.Mesh_37002.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_38.geometry, materials.PaletteMaterial001, 95]}
        instanceMatrix={nodes.Mesh_38.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_39002.geometry, materials.PaletteMaterial001, 95]}
        instanceMatrix={nodes.Mesh_39002.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_2.geometry, materials.PaletteMaterial002, 5]}
        instanceMatrix={nodes.Mesh_2.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_3.geometry, materials['leather 2d-2'], 5]}
        instanceMatrix={nodes.Mesh_3.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_108.geometry, materials.PaletteMaterial003, 60]}
        instanceMatrix={nodes.Mesh_108.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_109.geometry, materials.PaletteMaterial001, 60]}
        instanceMatrix={nodes.Mesh_109.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_110.geometry, materials.PaletteMaterial003, 60]}
        instanceMatrix={nodes.Mesh_110.instanceMatrix}
      />
    </group>
  )
}

useGLTF.preload(path)

export default AgroponicModel
