import { Loader, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Agropicker from "./AgropickerModel";
import Lights from "./../agrobots/Lights";
import * as THREE from 'three';
import { Suspense } from "react";

const ModelViewer = ({ groupRef, gsapType, cameraRef, setRotation }) => {

    return (
        <View id={gsapType} className="w-full h-full">
            <ambientLight intensity={1} />
            <PerspectiveCamera makeDefault position={[2, 1, -6]} ref={cameraRef} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={cameraRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.3}
                target={new THREE.Vector3(0.9, -0.1, 0)}
                onEnd={() => setRotation(cameraRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} position={[0, 0, 0]}>
                <Suspense fallback="AgroponicModel" >
                    <Agropicker
                        scale={[3.7, 3.7, 3.7]}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelViewer;
