import { AgrobotModelView } from "../../models";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";


const AgrobotMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = "mainAgrobotModel";
  const modelContainerId = "#" + modelContainer;
  const modelRender = "mainAgroGsap";
  const modelRenderId = "#" + modelRender;
  const modelDestContainer = "agrobotDestContaienr";
  const modelDestContainerId = "#" + modelDestContainer;

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const dest = document.getElementById(modelDestContainer);
      const destDiv = dest.getBoundingClientRect();
      const modelDivStartingPosition = window.innerWidth / 2;
      const destDivCenter = (destDiv.left + destDiv.right) / 2;

      ScrollTrigger.defaults({
        immediateRender: false,
        ease: 'power1.inOut',
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
      }).to(modelRenderId, {
        x: () => {
          return destDivCenter - modelDivStartingPosition;
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      className="w-full bg-black flex flex-col gap-[2rem] justify-start pt-10 overflow-hidden"
    >
      <div className="w-full h-[75vh] pt-8 opacity-1">
        <AgrobotModelView
          id={modelContainer}
          gsapType={modelRender}
          scale={[1, 1, 1]}
          cameraPosition={[0.75, 1, 1.25]}
          groupPosition={[0, 0, 0]}
          vectorPosition={[0, 0.25, 0]}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row ">
        <div id={modelDestContainer} className="w-full h-full ">

        </div>
        <div className="w-full h-full">
          <div className="justify-center mx-5">
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
