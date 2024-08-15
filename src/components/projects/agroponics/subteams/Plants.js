import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Plants = () => {
  const titleHeader = "plants" + "-header";
  const titleBody = "plants" + "-body";
  const titleTag = "#" + titleHeader;
  const bodyTag = "#" + titleBody;
  const isMobile = useMediaQuery({ query: "( max-width: 800px)" });


  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleTag,
        start: "top center",
      },
    });

    timeline.fromTo(
      titleTag,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        ease: "power1.out",
      },
    );
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: bodyTag,
        start: "top center",
      },
    });

    timeline.fromTo(
      bodyTag,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        ease: "power1.outIn",
      },
    );
  }, []);

  return (
    <section id="plants-section" className="flex w-[100lvw] h-[40lvh]">
      <div className="flex w-full z-30">
        <div className="flex-col items-center justify-center mx-5 overflow-x-visible h-full ">
          {!isMobile && (
            <>
              <div id={titleHeader} className="flex items-end justify-end w-full mt-[5%] ml-5">
                <div className="w-[90%]"></div>
                <div className="w-[100%] max-w-[80%] items-center justify-center flex">
                  <h1 className="px-[4rem] font-bold bg-glass 
                 text-[3rem] rounded-3xl text-center">
                    Plants
                  </h1>
                </div>
              </div>
              <div className="flex">
                <div className="w-[50%]"></div>
                <div
                  id={titleBody}
                  className="bg-glass mt-[2rem] border-2 min-w-[20%] max-w-[50%] flex items-end justify-end border-black rounded-3xl ml-5 opacity-0"
                >
                  <p className="text-[1.2rem] m-[20px]">
                    The Plants sub-team is dedicated to ensuring the successful growth and harvest of staple crops. The team works at the intersection of various disciplines, blending engineering principles with techniques from chemistry, applied/plant biology, and food, nutrition, and health. Its focus includes designing innovative methods for crop cultivation and optimizing growth conditions through experimentation and data collection. Members of the Plants sub-team are actively involved in research, utilizing analytical techniques, and contributing to all aspects of the team’s efforts.
                  </p>
                </div>
              </div>
            </>
          )}
          {isMobile && (
            <div className="flex flex-col w-[90lvw] h-[40lvh] z-[5] items-center justify-center mt-[-10%] mb-[20%]">
              <div className="flex flex-col items-center justify-center ">
                <div id={titleHeader} className="justify-center items-center flex">
                  <h1 className="w-auto px-[1rem] bg-glass font-bold text-[2.5rem] text-center rounded-3xl">
                    Plants
                  </h1>
                </div>
                <div
                  id={titleBody}
                  className=" bg-glass mt-[2rem] border-2 min-w-[20%] border-black rounded-3xl opacity-0 flex justify-center items-center"
                >
                  <p className="text-[0.9rem] m-[20px]">
                    Develops systems to target and destroy weeds without damaging the crops around them. In our first year, we explored several possible ways to accomplish this, from robot claws to lasers, and eventually settled on a machine-vision-aimed herbicide sprayer and a robotic weedwhacker. We developed a working prototype of the herbicide sprayer, complete with targeting software, and continue to work on the weedwhacker.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div >
    </section>
  );
};
export default Plants;
