import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AgroponicView from "./AgroponicView";
import { useMediaQuery } from "react-responsive";
import { AgroponicModel2D } from "../../../assets";

gsap.registerPlugin(ScrollTrigger);

const AgroponicsMain = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })
  const height = window.innerHeight / 4;

  useGSAP(() => {
    const model = "#view";

    gsap.to("#sunrise-overlay2", {
      delay: 1,
      duration: 1,
      opacity: 0,
      zIndex: -1,
      onComplete: () => {
        gsap.set("#sunrise-overlay2", { zIndex: -1 })
      }
    });

    gsap.to("#agroponicmain-section", {
      delay: 1,
      duration: 1,
    });

    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: model,
          start: "top top+=30.5%",
          markers: false,
          end: height,
          scrub: 2,
          pinType: "transform",
          pin: true,
        },
      })

      .set(model, {
        translate: "10% 1%",
        scale: 1.2,
      })

      .to(model, {
        delay: 1,
        ease: "power1.out",
      })

      .to(model, {
        translate: "-28% 9%",
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
    <section id="agroponicmain-section" className="h-[150vh] bg-black">
      {isMobile && <img
        src={AgroponicModel2D}
        alt="image of agrobot"
        style={{ display: "flex", paddingTop: "500px" }}>
      </img>}
      {!isMobile && <AgroponicView gsapType={"view"} />}
      <div
        id="sunrise-overlay2"
        className="bg-black z-10 opacity-[100%] w-full h-full absolute"
      ></div>

      {!isMobile &&
        <><div
          className=" absolute h-full w-full flex-center flex-col"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        ></div><div className="flex flex-col items-center w-full h-full ">
            <div style={{ position: "absolute", top: "500px", right: "50px" }}>
              <h1
                id="main-header"
                className="text-[7rem] opacity-1 font-bold text-white"
              >
                Agroponics
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
                bibendum efficitur justo, sed volutpat purus efficitur in. Cras sit
                amet semper lacus, eget lacinia nunc. Suspendisse vitae eros
                sollicitudin, dictum libero sit amet, ultricies elit. Ut et
                tincidunt urna. Cras nec nibh sit amet tortor interdum convallis.
                Donec id risus at lacus ultricies commodo. Nulla facilisi. Nam vitae
                felis in magna sodales mollis in a elit. Ut bibendum sagittis leo, a
                finibus magna tristique id. Aliquam posuere lectus non fermentum
                viverra. Nulla facilisi. Morbi et nulla sed leo ultrices pharetra
                nec at arcu. Duis vel hendrerit risus, vel mollis est
              </p>
            </div>
          </div></>
      }

      {isMobile &&
        <>
          <div
            className=" absolute h-full w-full flex-center flex-col"
          ></div><div className="flex flex-col items-center w-full h-full ">
            <div style={{ position: "flex", top: "700px" }}>
              <h1
                id="main-header"
                className="text-[3.5rem] text-center opacity-1 m-[10px] font-bold text-white"
              >
                Agroponics
              </h1>
              <p
                id="main-body"
                className="w-[40vpw] mx-7 mt-5  text-center opacity-1 font-bold text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat, dolor eget tincidunt interdum, sapien lacus egestas
                libero, vitae tincidunt nisi dolor et purus. Sed ac velit sit amet
                quam convallis vestibulum a nec nisl. Vestibulum non nisl lectus.
                Proin nec scelerisque mauris. Quisque euismod orci ut ipsum
                convallis, sed sodales erat dapibus. Integer eget orci augue.
                Suspendisse eget mauris vel ex eleifend sagittis. Morbi at nunc
                nulla. Vivamus vel suscipit nunc. Proin vel cursus nisi. Phasellus
                bibendum efficitur justo, sed volutpat purus efficitur in. Cras sit
                amet semper lacus, eget lacinia nunc. Suspendisse vitae eros
                sollicitudin, dictum libero sit amet, ultricies elit. Ut et
                tincidunt urna. Cras nec nibh sit amet tortor interdum convallis.
                Donec id risus at lacus ultricies commodo. Nulla facilisi. Nam vitae
                felis in magna sodales mollis in a elit. Ut bibendum sagittis leo, a
                finibus magna tristique id. Aliquam posuere lectus non fermentum
                viverra. Nulla facilisi. Morbi et nulla sed leo ultrices pharetra
                nec at arcu. Duis vel hendrerit risus, vel mollis est
              </p>
            </div>
          </div>
        </>}

    </section>
  );
};

export default AgroponicsMain;
