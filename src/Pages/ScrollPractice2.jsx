import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ScrollPractice2 = () => {
  gsap.registerPlugin();
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".page2 h1", {
        transform: "translateX(-150%)",
        scrollTrigger: {
            trigger: ".page2",
            markers: true,
            start: "top 0%",
            end: "top -150%",
            scrub: 2,
            pin: true
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-cyan-950">
      <div className="bg-cyan-950 overflow-x-hidden page1">
        <h1 className="text-white text-[40vw] text-nowrap font-black">
          GO FOR IT
        </h1>
      </div>
      <div className="bg-cyan-950 overflow-x-hidden page2">
        <h1 className="text-white text-[20vw] text-nowrap font-black uppercase">
          I will See you
        </h1>
      </div>
      <div className="bg-cyan-950 overflow-x-hidden page3">
        <h1 className="text-white text-[20vw] text-nowrap font-black uppercase">
         SEEME
        </h1>
      </div>
    </div>
  );
};

export default ScrollPractice2;
