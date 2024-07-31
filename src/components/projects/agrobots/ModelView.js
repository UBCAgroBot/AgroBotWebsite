import { Loader, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import AgrobotModel from "./AgrobotModel";
import Lights from "./Lights";
import * as THREE from 'three';
import { Suspense } from "react";

const ModelViewer = ({ groupRef, gsapType, cameraRef, setRotation }) => {

    return (
       <View id={gsapType} className="opacity-0 w-full h-full">
            <ambientLight intensity={1}/>
            <PerspectiveCamera makeDefault position={[1,1,4.1]} ref={cameraRef}/>
            <Lights/>
            <OrbitControls
                makeDefault
                ref={cameraRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.3}
                target={new THREE.Vector3(0,0,0)}
                onEnd={() => setRotation(cameraRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} position={[0,0,0]}>
                <Suspense fallback="AgrobotModel" > 
                    <AgrobotModel
                        scale={[2,2,2]}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelViewer;
