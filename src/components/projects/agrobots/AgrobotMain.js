import { AgrobotModelView } from "../../models";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
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
        delay: 1.25,
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
      className="lg:h-[175vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10 overflow-hidden"
    >
      <div className="w-full h-[50vh] lg:h-[100vh] pt-8 opacity-1">
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

      <div className="w-full lg:h-[75vh] flex flex-col lg:flex-row ">
        <div id={modelDestContainer} className="w-full h-full ">

        </div>
        <div className="w-full h-full">
          <div id={textDiv} className="justify-center mx-5">
            <h2 className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">AgroBot</h2>
            <p className="text-white text-center text-[18px] lg:text-[1.25rem]">
              An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.
            </p>
            <p className="text-white text-center font-bold text-[18px] lg:text-[1.25rem] mt-10 mb-20">
              AgroBot is a product of collaboration between five different sub-teams, each playing a pivotal role in its development and performance:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgrobotMain;
