import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import AgrobotsModel from "./AgrobotsModel";
import { agrobotFarm } from "../../assets/image";

export const Agrobots = () => {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current, {
        y: 10,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <main className="relative w-screen h-[300vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${agrobotFarm})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="flex w-screen h-max justify-center align-middle items-center">
          <div className="z-10 flex flex-col justify-center align-middle items-center w-[100lvw] h-lvh">
            <div className="z-15 bg-opacity-45 bg-blue-300 h-[50lvh] ml-12 flex flex-col justify-center items-center align-middle px-10 rounded-xl">
              <h1 className="z-20 text-white font-bold text-9xl -mt-20 mb-10 flex flex-col justify-center align-middle items-center">
                Agrobots
              </h1>
              <p className="z-20 rounded-e text-white font-bold font-sans text-xl">
                This is some random text that will describe an overall idea of
                the project, subteams, and mission that this project has, as the
                user scrolls this text wil transition away with the head and the
                model will come into focus breifly before it is send away and
                the sub team descriptions come up and the model is in the
                backgroud moving
              </p>
            </div>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
      <AgrobotsModel ref={modelRef} position={[1, 0, 0]} scale={[1, 1, 1]} />
    </main>
  );
};
