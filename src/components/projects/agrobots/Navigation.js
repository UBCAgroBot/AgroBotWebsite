import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const titleHeader = "navigation"
  const titleContent = "Navigation & Embedded Systems";
  const titleBody = "body";
  const bodyContent = "Applied AI is looking to change the way we farm and is paving the way for a sustainable future. Leveraging cutting edge research in artificial intelligence and machine learning to develop practical solutions to optimize crop yield, minimize costs, and reduce environmental impact."
  const isMobile = width <= 800;

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize());
    return () => {
      window.removeEventListener("resize", handleResize());
    };
  });

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#navigation",
        start: "top center",
      },
    });

    timeline.fromTo(
      "#navigation",
      {
        opacity: 0,
      },
      {
        y: "1rem",
        opacity: 1,
        duration: 0.75,
        ease: "power1.out",
      },
    );
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top center",
      },
    });

    timeline.fromTo(
      "#body",
      {
        y: "-1.8rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power1.outIn",
      },
    );
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center w-[50vw] z-[5]">
        <div id={titleHeader}>
          <h1 className="w-auto px-[1rem] bg-glass font-bold text-[5rem] text-center rounded-3xl">
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
    );
  } else {
    return (
      <div className="flex w-[100lvw] h-[75lvh] z-[5]">
        <div className=""></div>

        <div className="flex flex-col items-center justify-center ">
          <div id={titleHeader} className="">
            <h1 className="w-auto px-[1rem] bg-glass font-bold text-[2rem] text-center rounded-3xl">
              {titleContent}
            </h1>
          </div>
          <div
            id={titleBody}
            className=" bg-glass mt-[2rem] border-2 min-w-[20%] max-w-[40rem] border-black rounded-3xl opacity-0"
          >
            <p className="text-[0.9rem] m-[20px]">{bodyContent}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Navigation;
