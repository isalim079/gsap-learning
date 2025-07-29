import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const SvgAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const pathRef = useRef();

  const initialPath = `M 10 100 Q 550 100 990 100`;

  useGSAP(() => {
    // Animation will be triggered by mouse events
  }, { scope: container });

  const handleMouseMove = (dets) => {
    const rect = dets.currentTarget.getBoundingClientRect();
    const y = dets.clientY - rect.top;
    const x = dets.clientX - rect.top;
    const finalPath = `M 10 100 Q ${x} ${y} 990 100`;
    
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 0.3,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: initialPath },
      duration: 1,
      ease: "elastic.out(1, 0.1)"
    });
  };

  return (
    <div ref={container} className="bg-white h-screen flex justify-center items-center">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id="stringSvg" 
        className="bg-cyan-300 w-fit cursor-pointer"
      >
        <svg width="1000" height="200">
          <path 
            ref={pathRef}
            d={initialPath} 
            stroke="black" 
            strokeWidth="3"
            fill="transparent" 
          />
        </svg>
      </div>
    </div>
  );
};

export default SvgAnimation;
