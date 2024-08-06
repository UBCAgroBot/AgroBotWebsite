import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import { Agrobotmd } from "../utils/Agrobotmd"; 
import ModelViewer from "./ModelView";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Preload, View } from "@react-three/drei";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { useMediaQuery } from "react-responsive";
import { AgrobotModel2D } from "../../../assets";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const AgrobotMain = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width >= 800;
  const cameraRef = useRef();
  const modelRef = useRef(new THREE.Group());
  const [rotation, setRotation] = useState(0);
  const [headerBottom, setHeaderBottom] = useState(0);
  const isLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize());
    return () => {
      window.removeEventListener('resize', handleResize())
    }
  });

  useEffect(() => {
    const header = document.getElementById("tag");
    if (header) {
      const rect = header.getBoundingClientRect();
      setHeaderBottom(rect.bottom);
    }
  }, []);

  const height = window.innerHeight / 3;

  useGSAP(() => {
    const model = "#view";

    gsap.to("#sunrise-overlay", {
      delay: 2,
      duration: 1,
      opacity: 0,
      zIndex: 0,
    });

    gsap.to("#agrobotmain-section", {
      delay: 2,
      duration: 1,
    });

    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: model,
          start: "top top+=36.5%",
          markers: false,
          end: height,
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

  return (
    <section
      id="agrobotmain-section"
      className="relative w-full h-[150lvh] bg-black"
      style={{
        backgroundSize: "cover",
      }}
    >
      <div
        id="sunrise-overlay"
        className="bg-black z-10 opacity-[100%] w-full h-full absolute"
      ></div>
      <div
        className=" absolute h-full w-full flex-center flex-col"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      ></div>

    {isLaptop &&
      <div
        className="w-full h-full flex items-center flex-col"
        style={{ position: "absolute", top: `${headerBottom}px` }}
      >
        <div className="flex flex-col items-center w-full h-full ">
          <div style={{ position: "absolute", top: "500px", right: "50px" }}>
            <h1
              id="main-header"
              className="text-[10rem] opacity-1 font-bold text-white"
            >
              Agrobot
            </h1>
            <p
              id="main-body"
              className="w-[42vw] ml-5 mt-5 text-[15rem], opacity-1 font-bold text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat, dolor eget tincidunt interdum, sapien lacus egestas
              libero, vitae tincidunt nisi dolor et purus. Sed ac velit sit amet
              quam convallis vestibulum a nec nisl. Vestibulum non nisl lectus.
              Proin nec scelerisque mauris. Quisque euismod orci ut ipsum
              convallis, sed sodales erat dapibus. Integer eget orci augue.
              Suspendisse eget mauris vel ex eleifend sagittis. Morbi at nunc
              nulla. Vivamus vel suscipit nunc. Proin vel cursus nisi. Phasellus
              bibendum efficitur justo, sed volutpat purus efficitur in. Cras
              sit amet semper lacus, eget lacinia nunc. Suspendisse vitae eros
              sollicitudin, dictum libero sit amet, ultricies elit. Ut et
              tincidunt urna. Cras nec nibh sit amet tortor interdum convallis.
              Donec id risus at lacus ultricies commodo. Nulla facilisi. Nam
              vitae felis in magna sodales mollis in a elit. Ut bibendum
              sagittis leo, a finibus magna tristique id. Aliquam posuere lectus
              non fermentum viverra. Nulla facilisi. Morbi et nulla sed leo
              ultrices pharetra nec at arcu. Duis vel hendrerit risus, vel
              mollis est
            </p>
          </div> 
        <Agrobotmd /> 
        </div>
      </div>
}
  {!isLaptop &&
      <div
        className="w-full h-full flex items-center flex-col"
        style={{ position: "absolute", top: `${headerBottom}px` }}
      >
        <div className="flex flex-col items-center w-full h-full ">
          <div style={{ position: "absolute", top: "500px" }}>
            <h1
              id="main-header"
              className="text-[5rem] text-center opacity-1 font-bold text-white"
            >
              Agrobot
            </h1>
            <p
              id="main-body"
              className="w-[40vpw] mt-5 opacity-1 text-center mx-5 font-bold text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat, dolor eget tincidunt interdum, sapien lacus egestas
              libero, vitae tincidunt nisi dolor et purus. Sed ac velit sit amet
              quam convallis vestibulum a nec nisl. Vestibulum non nisl lectus.
              Proin nec scelerisque mauris. Quisque euismod orci ut ipsum
              convallis, sed sodales erat dapibus. Integer eget orci augue.
              Suspendisse eget mauris vel ex eleifend sagittis. Morbi at nunc
              nulla. Vivamus vel suscipit nunc. Proin vel cursus nisi. Phasellus
              bibendum efficitur justo, sed volutpat purus efficitur in. Cras
              sit amet semper lacus, eget lacinia nunc. Suspendisse vitae eros
              sollicitudin, dictum libero sit amet, ultricies elit. Ut et
              tincidunt urna. Cras nec nibh sit amet tortor interdum convallis.
              Donec id risus at lacus ultricies commodo. Nulla facilisi. Nam
              vitae felis in magna sodales mollis in a elit. Ut bibendum
              sagittis leo, a finibus magna tristique id. Aliquam posuere lectus
              non fermentum viverra. Nulla facilisi. Morbi et nulla sed leo
              ultrices pharetra nec at arcu. Duis vel hendrerit risus, vel
              mollis est
            </p>
          </div> 
          <img src={AgrobotModel2D}
          style={{position: "absolute", top: "100px"}}
          ></img>
        </div>
      </div>
}
    </section>
  );
};

export default AgrobotMain;
