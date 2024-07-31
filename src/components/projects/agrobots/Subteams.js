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

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Subteams = () => {
  const model = "#DAgrobot";
  const path = [
    { x: 1200, y: 0 },
    { x: 1150, y: 350 },
    { x: 600, y: 900 },
    { x: 1050, y: 1200 },
    { x: 500, y: 1700 },
    { x: 850, y: 2100 },
    { x: 900, y: 2200 },
    { x: 880, y: 2500 },
    { x: 700, y: 3000 },
  ];

  useGSAP(() => {

    gsap.set(model, {
      x: 1200,
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
      className="bg-black z-[-20]"
      style={{
        backgroundImage: `url(${FarmPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
      <img
        id="DAgrobot"
        className="absolute size-[15rem] z-[1]"
        src={AgrobotModel2D}
        alt="img"
      />
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </main>
  );
};

export default Subteams;
