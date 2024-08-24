import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

import { AgroponicModel2D } from "../../../assets";
import { AgroponicModelView } from "../../models";

const AgroponicsMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = "mainAgroponicModel";
  const modelContainerId = "#" + modelContainer;
  const modelRender = "mainAgroPonicGsap";
  const modelRenderId = "#" + modelRender;
  const modelDestContainer = "agroponicDestContaienr";
  const modelDestContainerId = "#" + modelDestContainer;
  const textDiv = "agroponicMainText";
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
          <AgroponicModelView
            id={modelContainer}
            gsapType={modelRender}
            scale={[1, 1, 1]}
            cameraPosition={[0.5, 1, 2]}
            groupPosition={[0, 0, 0]}
            vectorPosition={[0, 0, 0]}
          />
          :
          <img
            src={AgroponicModel2D}
          >
          </img>
        }
      </div>

      <div className="flex w-full flex-col lg:h-[75vh] lg:flex-row ">
        <div id={modelDestContainer} className="h-full w-full ">

        </div>
        <div className="h-full w-full">
          <div id={textDiv} className="mx-5 justify-center">
            <h2 className="mb-2 text-center text-[42px] font-bold text-white lg:text-[7rem]">AgroPonics</h2>
            <p className="text-center text-[18px] text-white lg:text-[1.25rem]">
              An NFT (Nutrient Film Technique) hydroponic system focused on data collection, environmental control, and automation to optimize the nutrients and growing conditions of staple foods. Through a series of meticulously designed experiments, it aims to discover the most efficient environmental settings for growing a variety of crops.
            </p>
            <p className="mb-20 mt-10 text-center text-[18px] font-bold text-white lg:text-[1.25rem]">
              AgroPonics is a product of collaboration between three different sub-teams, each playing a pivotal role in its development and performance:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgroponicsMain;
