import React from "react";
import { useGLTF } from "@react-three/drei";
import path from "../../../assets/models/AgrobotSketch.glb";

const AgrobotModel = (props) => {
  const { nodes, materials } = useGLTF(path);
  useGLTF.preload(path);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes["(MODIFIED_TO_196MM)_4558T62_Architectural_6063_Aluminum_H-B"]
            .geometry
        }
        material={materials.PaletteMaterial001}
        position={[0.26, 0.439, -0.054]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes["Battery-1_-_Part"].geometry}
        material={materials["White-PW-MT11050-3"]}
        position={[0, 0.543, -0.11]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes["Body_1210_-_Part"].geometry}
        material={materials["white-pw-mt11050-9"]}
        position={[0.018, 0.261, 0.051]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes["Body_-_Part_924"].geometry}
        material={materials["white-pw-mt11050-10"]}
        position={[0.018, 0.261, 0.051]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes["Body_-_Part_925"].geometry}
        material={materials["white-pw-mt11050.004"]}
        position={[0.018, 0.261, 0.051]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes["High_Cam_Base_Joint1-3_-_Part"].geometry}
        material={materials["polycarbonate-4.003"]}
        position={[-0.292, 0.462, 0.418]}
        rotation={[0.955, 0, 0]}
      />
      <mesh
        geometry={nodes["High_Cam_Base_Joint3-2_-_Part"].geometry}
        material={materials["polycarbonate-4.004"]}
        position={[-0.023, 0.623, 0.233]}
        rotation={[0.436, 0, 0]}
      />
      <mesh
        geometry={nodes["Back_Plate-1_-_Part"].geometry}
        material={materials["polycarbonate.012"]}
        position={[0, 0.785, 0.421]}
        rotation={[Math.PI / 4, 0, 0]}
      />
      <mesh
        geometry={nodes["LifeCam_Lens-1_-_Part"].geometry}
        material={materials["polycarbonate-4.001"]}
        position={[0, 0.769, 0.437]}
        rotation={[Math.PI / 4, 0, 0]}
      />
      <mesh
        geometry={nodes["Tripod_Knub_Joint-1_-_Part"].geometry}
        material={materials["polycarbonate-4"]}
        position={[0, 0.76, 0.41]}
        rotation={[-2.356, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes["Bottom_Panel-1_-_Part"].geometry}
        material={materials["polycarbonate-4.011"]}
        position={[0, 0.461, 0.417]}
        rotation={[-0.616, 0, 0]}
      />
      <mesh
        geometry={nodes["Top_Panel_V2-1_-_Part"].geometry}
        material={materials["polycarbonate-4.012"]}
        position={[0, 0.46, 0.418]}
        rotation={[0.955, 0, 0]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part"].geometry}
        material={materials["White-PW-MT11050-2"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_2"].geometry}
        material={materials["white-pw-mt11050-3"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_3"].geometry}
        material={materials["white-pw-mt11050-4"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_4"].geometry}
        material={materials["white-pw-mt11050-5"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_5"].geometry}
        material={materials["white-pw-mt11050-6"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_6"].geometry}
        material={materials["white-pw-mt11050-7"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Drive_Motor-1_-_Part_7"].geometry}
        material={materials["white-pw-mt11050-8"]}
        position={[0.187, 0.351, 0.236]}
        rotation={[0, 0.015, -Math.PI]}
      />
      <mesh
        geometry={nodes["Motor_Housing_Back-1_-_Part"].geometry}
        material={materials["polycarbonate.001"]}
        position={[0.115, 0.351, 0.237]}
        rotation={[Math.PI, 1.556, 0]}
      />
      <mesh
        geometry={nodes["Motor_Housing_Front-1_-_Part"].geometry}
        material={materials.polycarbonate}
        position={[0.12, 0.351, 0.237]}
        rotation={[Math.PI, 1.556, 0]}
      />
      <mesh
        geometry={nodes["Face-36_-_Part_2"].geometry}
        material={materials["color-10 (Cosmetic Thread)"]}
        position={[0.236, 0.182, 0.29]}
        rotation={[Math.PI, 1.556, 0]}
      />
      <mesh
        geometry={nodes["Tensioner_(03_06_2024)-1_-_Part"].geometry}
        material={materials["polycarbonate.002"]}
        position={[0.244, 0.264, 0.255]}
        rotation={[-3.142, 1.556, -1.889]}
      />
      <mesh
        geometry={nodes["Bottom_Frame-1_-_Part"].geometry}
        material={materials["translucent plastic"]}
        position={[0.175, 0.428, 0.281]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes["Steering_Motor_V2-1_-_Part"].geometry}
        material={materials["White-PW-MT11050"]}
        position={[0.175, 0.497, 0.282]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Steering_Motor_V2-1_-_Part_3"].geometry}
        material={materials["white-pw-mt11050-2"]}
        position={[0.175, 0.497, 0.282]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Thrust_Bearing_Bottom-1_-_Part"].geometry}
        material={materials["shiny galvanized"]}
        position={[0.175, 0.421, 0.291]}
        rotation={[-Math.PI, 1.556, -Math.PI]}
      />
      <mesh
        geometry={nodes["332_(0093750)_Diameter_Hole1_-_Part"].geometry}
        material={materials["shiny galvanized-2.001"]}
        position={[0.175, 0.421, 0.291]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes["Left_Side_Panel-1_-_Part"].geometry}
        material={materials["White-PW-MT11050-4"]}
        position={[0.278, 0.455, 0]}
        rotation={[1.571, 1.567, -1.571]}
      />
      <instancedMesh
        args={[nodes.Mesh_1726.geometry, materials.PaletteMaterial001, 22]}
        instanceMatrix={nodes.Mesh_1726.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1738.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Mesh_1738.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1739.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Mesh_1739.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1740.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Mesh_1740.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1554.geometry, materials["polycarbonate-4.007"], 6]}
        instanceMatrix={nodes.Mesh_1554.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1553.geometry, materials["polycarbonate-4.007"], 6]}
        instanceMatrix={nodes.Mesh_1553.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_191.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_191.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_192.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_192.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_193.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_193.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_194.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_194.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_195.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_195.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_325.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_325.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_326.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_326.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_327.geometry, materials.PaletteMaterial001, 128]}
        instanceMatrix={nodes.Mesh_327.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_149.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_149.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_150.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_150.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_94.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_94.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_51.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_51.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_52.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_52.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_53.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_53.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_54.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_54.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_55.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_55.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_56.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_56.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_48.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_48.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_49.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_49.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_50.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Mesh_50.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_96.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_96.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_97.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_97.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_98.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_98.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_44.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_44.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1630.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1630.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1631.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1631.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1632.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1632.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1633.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1633.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1634.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1634.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1635.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Mesh_1635.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1682.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_1682.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1684.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_1684.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh_1683.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_1683.instanceMatrix}
      />
    </group>
  );
};


export default AgrobotModel;

