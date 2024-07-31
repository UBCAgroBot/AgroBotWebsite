import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LeftBlock = ({ title, titleContent, bodyContent }) => {
  const titleHeader = title + "-header"; 
  const titleBody = title + "-body";
  const titleTag = "#" + titleHeader;
  const bodyTag = "#" + titleBody;

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
        y: "1rem",
        opacity: 1,
        duration: 1,
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
        y: "-1.8rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.outIn",
      },
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[50vw] z-[5]">
      <div id={titleHeader}>
        <h1 className="w-auto px-[1rem] bg-glass font-bold text-[5rem] text-center rounded-3xl">
    {titleContent}
        </h1>
      </div>
      <div
        id={titleBody}
        className=" bg-glass mt-[2rem] border-2 min-w-[20%] max-w-[40rem] border-black rounded-3xl opacity-0"
      >
        <p className="text-[1.2rem] m-[20px]">{bodyContent}</p>
      </div>
      <div className="w-[50%]"></div>
    </div>
  );
};

export default LeftBlock;
