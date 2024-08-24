import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import { AgrobotModelView } from "../../models";
import { AgrobotModel2D } from "../../../assets";

const AgrobotMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = "mainAgrobotModel";
  const modelContainerId = "#" + modelContainer;
  const modelRender = "mainAgroGsap";
  const modelRenderId = "#" + modelRender;
  const modelDestContainer = "agrobotDestContaienr";
  const modelDestContainerId = "#" + modelDestContainer;
  const textDiv = "agrobotMainText";
  const textDivId = "#" + textDiv;
  const isMobile = useMediaQuery({ query: "( max-width: 640px)" });

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const dest = document.getElementById(modelDestContainer);
    const destDiv = dest.getBoundingClientRect();
    const modelDivStartinPosition = window.innerWidth / 2;
    const destDivCenter = (destDiv.left + destDiv.right) / 2;

    mm.add("(min-width: 1024px)", () => {

      ScrollTrigger.defaults({
        immediateRender: false,
        ease: 'power1.inOut1',
        scrub: true,
        pinSpacer: false,
        ease: 'none',
      });

      gsap.from(modelContainerId, {
        delay: 2,
        duration: 1,
        opacity: 0
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: modelRenderId,
          start: "center center",
          endTrigger: modelDestContainerId,
          end: "center center",
          markers: false,
          pin: true,
          invalidateOnRefresh: true,
          pinSpacer: false,
          ease: "none"
        }
      })
        .to(modelRenderId, {
          x: () => destDivCenter - modelDivStartinPosition,
        });

    });

    return () => {
      mm.revert();
    };
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: textDivId,
        markers: false,
        start: "top bottom",
        end: "center center",
      },
    });

    timeline.fromTo(textDivId, {
      opacity: 0,
    },
      {
        y: "1rem",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      },
    );
  }, []);

  return (
    <section
      className="flex w-full flex-col justify-start gap-[2rem] overflow-hidden bg-black pt-10 lg:h-[175vh]"
    >
      <div className="opacity-1 h-[50vh] w-full pt-8 lg:h-[100vh]">
        {!isMobile ?
          <AgrobotModelView
            id={modelContainer}
            gsapType={modelRender}
            scale={[1, 1, 1]}
            cameraPosition={[0.75, 1, 1.25]}
            groupPosition={[0, 0, 0]}
            vectorPosition={[0, 0.25, 0]}
          /> :
          <img
            src={AgrobotModel2D}
          ></img>
        }
      </div>

      <div className="flex w-full flex-col lg:h-[75vh] lg:flex-row ">
        <div id={modelDestContainer} className="h-full w-full ">

        </div>
        <div className="h-full w-full">
          <div id={textDiv} className="mx-5 justify-center">
            <h2 className="mb-2 text-center text-[42px] font-bold text-white lg:text-[7rem]">AgroBot</h2>
            <p className="text-center text-[18px] text-white lg:text-[1.25rem]">
              An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.
            </p>
            <p className="mb-20 mt-10 text-center text-[18px] font-bold text-white lg:text-[1.25rem]">
              AgroBot is a product of collaboration between five different sub-teams, each playing a pivotal role in its development and performance:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgrobotMain;
