import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { Agrobotmd } from "../utils/Agrobotmd";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { useMediaQuery } from "react-responsive";
import { AgrobotModel2D } from "../../../assets";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const AgrobotMain = () => {
  const [headerBottom, setHeaderBottom] = useState(0);
  const isLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });


  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--dynamic-height', `${vh * 100} px`);
    };

    const header = document.getElementById("tag");
    if (header) {
      const rect = header.getBoundingClientRect();
      setHeaderBottom(rect.bottom);
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
      className="relative w-full h-[155lvh] bg-black"
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

      {
        isLaptop && (
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
                  An autonomous robot utilizing AI and machine learning for
                  precise intra-row weeding and data collection. It identifies and
                  eliminates weeds without harming crops, reducing the need for
                  chemical pesticides. Additionally, the robot collects data on
                  crop health to help farmers make better, more informed
                  decisions. AgroBot is a product of collaboration between five
                  different sub-teams, each playing a pivotal role in its
                  development and performance:
                </p>
              </div>
              <Agrobotmd />
            </div>
          </div>
        )
      }
      {
        !isLaptop && (
          <div
            className="w-full h-full flex items-center flex-col"
            style={{ position: "absolute", top: `${headerBottom}px` }}
          >
            <img
              src={AgrobotModel2D}
              style={{
                height: '80%',
                width: '70%',
                marginTop: '50px',
                marginBottom: '50px'
              }}
            ></img>
            <div className="flex flex-col items-center w-full h-full ">
              <div >
                <h1
                  id="main-header"
                  className="text-[5rem] text-center opacity-1 font-bold text-white"
                >
                  Agrobot
                </h1>
                <p
                  id="main-body"
                  className="w-[40vpw] mt-5 mb-5 opacity-1 text-center mx-5 font-bold text-white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  placerat, dolor eget tincidunt interdum, sapien lacus egestas
                  libero, vitae tincidunt nisi dolor et purus. Sed ac velit sit
                  amet quam convallis vestibulum a nec nisl. Vestibulum non nisl
                  lectus. Proin nec scelerisque mauris. Quisque euismod orci ut
                  ipsum convallis, sed sodales erat dapibus. Integer eget orci
                  augue. Suspendisse eget mauris vel ex eleifend sagittis. Morbi
                  at nunc nulla. Vivamus vel suscipit nunc. Proin vel cursus nisi.
                  Phasellus bibendum efficitur justo, sed volutpat purus efficitur
                  in. Cras sit amet semper lacus, eget lacinia nunc. Suspendisse
                  vitae eros sollicitudin, dictum libero sit amet, ultricies elit.
                  Ut et tincidunt urna. Cras nec nibh sit amet tortor interdum
                  convallis. Donec id risus at lacus ultricies commodo. Nulla
                  facilisi. Nam vitae felis in magna sodales mollis in a elit. Ut
                  bibendum sagittis leo, a finibus magna tristique id. Aliquam
                  posuere lectus non fermentum viverra. Nulla facilisi. Morbi et
                  nulla sed leo ultrices pharetra nec at arcu. Duis vel hendrerit
                  risus, vel mollis est
                </p>
              </div>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default AgrobotMain;
