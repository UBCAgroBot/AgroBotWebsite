import { Loader, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Agropicker from "./AgropickerModel";
import Lights from "./../agrobots/Lights";
import * as THREE from 'three';
import { Suspense } from "react";

const ModelViewer = ({ groupRef, gsapType, cameraRef, setRotation }) => {

    return (
       <View id={gsapType} className="w-full h-full">
            <ambientLight intensity={1}/>
            <PerspectiveCamera makeDefault position={[0,0,6]} ref={cameraRef}/>
            <Lights/>
            <OrbitControls
                makeDefault
                ref={cameraRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.3}
                target={new THREE.Vector3(0.5,-0.5,0)}
                onEnd={() => setRotation(cameraRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} position={[0,0,0]}>
                <Suspense fallback="AgroponicModel" > 
                    <Agropicker
                        scale={[3,3,3]}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelViewer;
