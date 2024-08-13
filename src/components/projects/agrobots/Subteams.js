import { AgrobotModel2D, FarmPath } from "../../../assets";
import AppliedAi from "./AppliedAI";
import Chassis from "./Chassis";
import Electrical from "./Electrical";
import Extermination from "./Extermination";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function calculateViewportWidth() {
  const width = window.innerWidth;
  const xRatio = [0.7, 0.67, 0.3, 0.60, 0.23, 0.5, 0.48, 0.45, 0.3];
  return xRatio.map(ratio => width * ratio);
}

function calculateViewportHeight() {
  const height = 3.9 * window.innerHeight;
  const yRatio = [0, 0.12, 0.28, 0.4, 0.5, 0.7, 0.82, 0.85, 0.96];
  return yRatio.map(ratio => height * ratio);
}

const Subteams = () => {
  const [xPos, setXPos] = useState(calculateViewportWidth());
  const [yPos, setYPos] = useState(calculateViewportHeight());
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const updatePathDimensions = () => {
    setXPos(calculateViewportWidth());
    setYPos(calculateViewportHeight());
  };

  useEffect(() => {
    // Recalculate positions on resize
    window.addEventListener('resize', updatePathDimensions);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updatePathDimensions);
  }, []);

  useEffect(() => {
    let model = "#DAgrobot";

    if (window.innerWidth < 500) {
      model = "c";
    }

    gsap.set(model, {
      x: xPos[0],
      y: yPos[0],
      transformOrigin: "50% 50%",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: model,
        start: "top top",
        end: () =>
          "+=" + document.querySelector("#farm").getBoundingClientRect().height,
        markers: false,
      },
    });

    timeline.to(model, {
      immediateRender: true,
      motionPath: {
        path: xPos.map((x, i) => ({ x, y: yPos[i] })),
        align: "self",
        autoRotate: 250,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, [xPos, yPos]);

  return (
    <main
      id="farm"
      className="bg-black z-[-20] h-[390vh] flex flex-col"
      style={{
        backgroundImage: `url(${FarmPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "calc(50% + 5%) center",
        maxWidth: "100vw",
        overflowX: "hidden",
        overflowY: "visible",
        lineHeight: "normal",
        height: '100%',
      }}
    >
      {!isMobile && (
        <img
          id="DAgrobot"
          className="absolute size-[15rem] z-[1]"
          src={AgrobotModel2D}
          alt="img"
        />
      )}
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </main>
  );
};

export default Subteams;
