import { Loader, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import AgroponicModel from "./AgroponicModel";
import Lights from "./../agrobots/Lights";
import * as THREE from 'three';
import { Suspense } from "react";

const ModelViewer = ({ groupRef, gsapType, cameraRef, setRotation }) => {

    return (
       <View id={gsapType} className="w-full h-full">
            <ambientLight intensity={1}/>
            <PerspectiveCamera makeDefault position={[3,2,3]} ref={cameraRef}/>
            <Lights/>
            <OrbitControls
                makeDefault
                ref={cameraRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.3}
                target={new THREE.Vector3(0,-1,0)}
                onEnd={() => setRotation(cameraRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} position={[0,0,0]}>
                <Suspense fallback="AgroponicModel" > 
                    <AgroponicModel
                        scale={[2,2,2]}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelViewer;
