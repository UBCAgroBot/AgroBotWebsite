import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const TextChild = ({ id, header, body }) => {
  const divId = "#" + id;

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divId,
        markers: false,
        start: "top bottom",
        end: "center center",
      },
    });

    timeline.fromTo(divId, {
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

  return (
    <div
      id={id}
      className="h-full w-full"
    >
      <div className="rounded-3xl p-5 opacity-100 bg-glass">
        <h2 className="text-center font-bold" style={{ fontSize: 'clamp(24px, 6vw, 48px)' }}>
          {header}
        </h2>

        <p className="text-center text-[18px] lg:text-[22px]">
          {body}
        </p>
      </div>


    </div>
  );
}

export default TextChild; 
