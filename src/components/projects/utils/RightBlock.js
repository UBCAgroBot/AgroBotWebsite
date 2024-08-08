import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const RightBlock = ({ title, titleContent, bodyContent }) => {
  const titleHeader = title + "-header";
  const titleBody = title + "-body";
  const titleTag = "#" + titleHeader;
  const bodyTag = "#" + titleBody;
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery({ query: "(max-width: 1000)" });

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
    <div className="items-end justify-end m-10 w-[100%]">
      {!isMobile && (
        <div className="flex flex-col justify-end items-end">
          <div id={titleHeader} className="items-center">
            <h1 className="w-auto px-[1rem] bg-glass font-bold text-[4rem] text-center rounded-3xl">
              {titleContent}
            </h1>
          </div>
          <div
            id={titleBody}
            className="bg-glass mt-[2rem] border-2 min-w-[20%] max-w-[40rem] border-black rounded-3xl opacity-0"
          >
            <p className="text-[1.0rem] m-[20px]">{bodyContent}</p>
          </div>
          <div className="w-[50%]"></div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col items-end justify-center w-[100vw] h-[40vh]">
          <div id={titleHeader}>
            <h1 className="w-auto px-[1rem] bg-glass font-bold text-[2rem] text-center rounded-1xl">
              {titleContent}
            </h1>
          </div>
          <div
            id={titleBody}
            className="bg-glass mt-[2rem] border-2 min-w-[20%] max-w-[40rem] border-black rounded-3xl opacity-0"
          >
            <p className="text-[0.9rem] m-[20px]">{bodyContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default RightBlock;
