import { AgrobotModelView } from "../../models";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";


const AgrobotMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = "mainAgrobotModel";
  const modelContainerId = "#" + modelContainer;
  const modelRender = "mainAgroGsap";
  const model = "#" + modelRender;
  const modelDestContainer = "agrobotDestContaienr";
  const modelDestContainerId = "#" + modelDestContainer;

  useGSAP(() => {
    //    const dest = document.getElementById(modelDestContainer);
    //    const destDiv = dest.getBoundingClientRect();
    //    const modelDiv = document.getElementById(modelContainer);
    //    ScrollTrigger.defaults({
    //      immediateRender: false,
    //      ease: 'power1.inOut1',
    //      scrub: true,
    //      pinSpacer: false,
    //      ease: 'none',
    //    })
    //
    gsap.from(modelContainerId, {
      delay: 2,
      duration: 1,
      opacity: 0
    })
    //
    //    gsap.timeline({
    //      scrollTrigger: {
    //        trigger: modelRenderId,
    //        start: "center center",
    //        endTrigger: modelDestContainerId,
    //        end: "center center",
    //        markers: true,
    //        pin: true,
    //        invalidateOnRefresh: true,
    //        pinSpacer: false,
    //      }
    //    })
    //      .to(modelRenderId, {
    //        x: () => {
    //          console.log(destDiv.top)
    //          return destDiv.left - modelDiv.getBoundingClientRect().left;
    //        },
    //        y: () => {
    //          return destDiv.top - modelDiv.getBoundingClientRect().top
    //        },
    gsap.timeline({
      scrollTrigger: {
        trigger: model,
        start: "top top+=36.5%",
        markers: false,
        end: modelDestContainerId,
        scrub: 2,
        pinType: "transform",
        pin: true,
      },
    })

      .set(model, {
        translate: "0% 10%",
        scale: 1.7,
      })

      .to(model, {
        delay: 1,
        ease: "power1.out",
      })

      .to(model, {
        translate: "-25% 15%",
        duration: 0.5,
      })

      .from("#main-header", {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        delay: 0.01,
      })

      .from("#main-body", {
        opacity: 0,
        YPercent: 100,
        duration: 0.5,
        delay: 0.01,
      });
  }, []);

  // black screen
  // model fades in
  // we scroll down, model gets bigger and follows our scroll
  // then it locks as the heading and subteam text fade in
  // end of scene
  return (
    <section
      className="h-[175vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10"
    >
      <div className="w-full h-[100vh] pt-8 opacity-1">
        <AgrobotModelView
          id={modelContainer}
          gsapType={modelRender}
          scale={[1, 1, 1]}
          cameraPosition={[0.75, 1, 1.25]}
          groupPosition={[0, 0, 0]}
          vectorPosition={[0, 0.25, 0]}
        />
      </div>

      <div className="w-full h-[75vh] flex flex-col md:flex-row ">
        <div id={modelDestContainer} className="w-full h-full ">

        </div>
        <div className="w-full h-full">
          <div className="justify-center mx-5">
            <h2 className="text-white text-center md:text-[7rem] md:font-[500] mb-2">AgroBot</h2>
            <p className="text-white text-center md:text-[1.25rem]">
              An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.
            </p>
            <p className="text-white text-center font-bold md:text-[1.25rem] mt-10">
              AgroBot is a product of collaboration between five different sub-teams, each playing a pivotal role in its development and performance:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgrobotMain;
