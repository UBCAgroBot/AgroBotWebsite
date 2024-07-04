import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";

export const Agrobots = () => {
  const splineRef = useRef();

  useEffect(() => {
    const { current: spline } = splineRef;

    const handleLoad = () => {
      const { scene } = spline;

      const objectToAnimate = scene.getObjectById(
        "b01a039c-7fb4-4cba-87b2-dcc6726d1d8e",
      );

      gsap.to(objectToAnimate.position, {
        x: 100,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(objectToAnimate.rotation, {
        y: Math.PI * 2,
        duration: 4,
        ease: "power2.inOut",
      });
    };

    if (spline) {
      spline.addEventListener("load", handleLoad);
    }

    return () => {
      if (spline) {
        spline.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <main>
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/cZiyYftCY9Y7EUSP/scene.splinecode"
      />
    </main>
  );
};
