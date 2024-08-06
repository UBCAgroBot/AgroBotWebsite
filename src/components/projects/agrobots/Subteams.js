import { AgrobotModel2D, FarmPath } from "../../../assets";
import AppliedAi from "./AppliedAI";
import Chassis from "./Chassis";
import Electrical from "./Electrical";
import Extermination from "./Extermination";
import Navigation from "./Navigation";
import React from "react";
import { gsap }from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function calculateViewportWidth() {
  const width = window.innerWidth;
  const xRatio = [0.7, 0.67, 0.3, 0.60, 0.23, 0.5, 0.48, 0.45, 0.3]
  const xPosition = [];

  for (let i = 0; i < xRatio.length; i++) {
    const xPos = width * xRatio[i];
    xPosition.push(xPos);
  }

  return xPosition;
}

function calculateViewportHeight() {
  const height = 3.9 * window.innerHeight;
  const yRatio = [0, 0.12, 0.28, 0.4, 0.5, 0.7, 0.82, 0.85, 0.96]
  const yPosition = [];

  for (let i = 0; i < yRatio.length; i++) {
    const yPos = height * yRatio[i];
    yPosition.push(yPos);
  }

  return yPosition
}

const Subteams = () => {
  const xPos = calculateViewportWidth();
  const yPos = calculateViewportHeight();
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

  let model = "#DAgrobot";
  const path = [
    { x: xPos[0], y: yPos[0] },
    { x: xPos[1], y: yPos[1] },
    { x: xPos[2], y: yPos[2] },
    { x: xPos[3], y: yPos[3] },
    { x: xPos[4], y: yPos[4] },
    { x: xPos[5], y: yPos[5] },
    { x: xPos[6], y: yPos[6] },
    { x: xPos[7], y: yPos[7] },
    { x: xPos[8], y: yPos[8] },
  ];

  if (window.innerWidth < 800) {
  model = "c"
  }

  useGSAP(() => {

    gsap.set(model, {
      x: xPos[0],
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
        path: path,
        align: "self",
        autoRotate: 250,
        alignOrigin: [0.5, 0.5],
      },
    })
  });

  return (
    <main
      id="farm"
      className="bg-black z-[-20] h-[390vh]"
      style={{
        backgroundImage: `url(${FarmPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(50% + 5%) center",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
      {!isMobile &&
      <img
        id="DAgrobot"
        className="absolute size-[15rem] z-[1]"
        src={AgrobotModel2D}
        alt="img"
      />
}
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </main>
  );
};

export default Subteams;
