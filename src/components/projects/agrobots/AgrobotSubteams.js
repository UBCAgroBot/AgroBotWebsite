import AppliedAi from "./subteams/AppliedAI";
import Chassis from "./subteams/Chassis";
import Electrical from "./subteams/Electrical";
import Extermination from "./subteams/Extermination";
import Navigation from "./subteams/Navigation";
import FarmPath from "../../../assets/image/FarmPath.jpeg"
import { AgrobotMoving } from "../../../assets";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin)

function calculateViewportWidth() {
  const width = 0.92 * window.innerWidth;
  const xRatio = [0.7, 0.67, 0.3, 0.60, 0.23, 0.5, 0.48, 0.45, 0.35];
  return xRatio.map(ratio => width * ratio);
}

function calculateViewportHeight() {
  const height = 3.2 * window.innerHeight;
  const yRatio = [0, 0.12, 0.28, 0.4, 0.5, 0.7, 0.82, 0.85, 0.96];
  return yRatio.map(ratio => height * ratio);
}

const AgrobotSubteams = () => {

  const [xPos, setXPos] = useState(calculateViewportWidth());
  const [yPos, setYPos] = useState(calculateViewportHeight());
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const updatePathDimensions = () => {
    setXPos(calculateViewportWidth());
    setYPos(calculateViewportHeight());
  };

  useEffect(() => {
    window.addEventListener('resize', updatePathDimensions);

    return () => window.removeEventListener('resize', updatePathDimensions);
  }, []);

  useGSAP(() => {
    let model = "#DAgrobot";

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
    <section
      id="farm"
      className="bg-black z-[-20] flex flex-col overflow-hidden "
      style={{
        backgroundImage: `url(${FarmPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(50% + 5%) center",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
    <img
          id="DAgrobot"
          className="absolute h-[200px] w-[250px] z-[1]"
          src={AgrobotMoving}
          alt=""
        />
      <AppliedAi />
      <Chassis />
      <Electrical />
      <Extermination />
      <Navigation />
    </section>
  )

}

export default AgrobotSubteams;
