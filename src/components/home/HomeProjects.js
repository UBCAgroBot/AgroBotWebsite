import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import AgrobotsModel from "../projects/AgrobotsModel";

function Project({ ProjectName, background }) {
  const containerRef = useRef(null);

  function useFadeIn(containerRef) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const height = window.innerHeight;
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerBottom =
          containerRef.current.getBoundingClientRect().bottom;

        console.log(containerBottom + ", " + height);

        if (containerTop < 200 && containerBottom > height + 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [containerRef]);

    return useSpring({
      opacity: isVisible ? 1 : 0,
      config: { duration: 200 },
    });
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[250vh] flex px-[10%] items-start justify-between"
      style={background}
    >
      <animated.div
        style={useFadeIn(containerRef)}
        className="w-[36%] h-[50vh] sticky top-[25vh]"
      >
        <div className="w-full h-full text-[#2E1B0F] flex flex-col justify-center">
          <div>
            <h1 className="px-4 bg-[#ffffffe8] rounded-[36px] text-[56px] font-black inline-block mb-4 drop-shadow-xl">
              {ProjectName}
            </h1>
          </div>
          <div>
            <p className="p-4 bg-[#ffffffe8] rounded-[36px] text-[20px] mb-7 drop-shadow-xl">
              The University of British Columbia (UBC) is a public research
              university with campuses near Vancouver and Okanagan in British
              Columbia, Canada. Established in 1908, it is the oldest university
              in British Columbia. With an annual research budget of $773
              million, UBC funds over 10,000 projects a year.[4]
            </p>
          </div>
          <div>
            <a
              href="#"
              className="p-3 px-8 text-[24px] bg-[#2E1B0F] text-white font-bold rounded-[36px] drop-shadow-xl"
            >
              LEARN MORE <FaChevronRight className="inline mb-1" />{" "}
            </a>
          </div>
        </div>
      </animated.div>
      <div className="w-[47.5%] h-[50vh] bg-[#2E1B0F] relative top-[100vh] rounded-lg">
        <AgrobotsModel ref={null} position={[0, 0, 0]} scale={[3, 3, 3]} />
      </div>
    </div>
  );
}

function HomeProjects() {
  return (
    <div className="bg-[#CDFF70]">
      <Project ProjectName="AgroBot" />
      <Project
        ProjectName="AgroPonics "
        background={{
          background: "linear-gradient(to bottom, #CDFF70, #78BE20)",
        }}
      />
      <Project
        ProjectName="AgroPicker "
        background={{ background: "#78BE20" }}
      />
    </div>
  );
}

export default HomeProjects;
