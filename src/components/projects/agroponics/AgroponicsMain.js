import { AgroponicModelView } from "../../models";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const AgroponicsMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = "mainAgroponicModel";
  const modelContainerId = "#" + modelContainer;
  const modelRender = "mainAgroPonicGsap";
  const modelRenderId = "#" + modelRender;
  const modelDestContainer = "agroponicDestContaienr";
  const modelDestContainerId = "#" + modelDestContainer;
  const agroponicMainheader = "agroponicMainheader";
  const agroponicmainheaderId = "#" + agroponicMainheader;

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
      })
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      className="h-auto w-full bg-black flex flex-col gap-[2rem] justify-start pt-10 overflow-hidden"
    >
      <div className="w-full h-[75vh] pt-8 opacity-1">
        <AgroponicModelView
          id={modelContainer}
          gsapType={modelRender}
          scale={[1, 1, 1]}
          cameraPosition={[0.5, 1, 2]}
          groupPosition={[0, 0, 0]}
          vectorPosition={[0, 0, 0]}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row ">
        <div id={modelDestContainer} className="w-full h-full ">

        </div>
        <div className="w-full h-full">
          <div className="justify-center mx-5">
            <h2 id={agroponicMainheader} className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">AgroPonics</h2>
            <p className="text-white text-center text-[18px] lg:text-[1.25rem]">
              An NFT (Nutrient Film Technique) hydroponic system focused on data collection, environmental control, and automation to optimize the nutrients and growing conditions of staple foods. Through a series of meticulously designed experiments, it aims to discover the most efficient environmental settings for growing a variety of crops.
            </p>
            <p className="text-white text-center font-bold text-[18px] lg:text-[1.25rem] mt-10 mb-20">
              AgroPonics is a product of collaboration between three different sub-teams, each playing a pivotal role in its development and performance:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgroponicsMain;
