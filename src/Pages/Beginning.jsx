
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Beginning() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  const container2 = useRef();

  let timeline = gsap.timeline();

  useGSAP(
    () => {
      timeline.to(".box", {
        x: -360,
        duration: 2,
        borderRightWidth: "10px",
        borderRightColor: "red",
        rotate: 360,
        delay: 1,
        // stagger: 0.5,
        // repeat: -1,
        // yoyo: true,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      timeline.to(".box", {
        x: -360,
        duration: 2,
        borderRightWidth: "10px",
        borderRightColor: "red",
        rotate: 360,
        delay: 1,
        // stagger: 0.5,
        // repeat: -1,
        // yoyo: true,
      });
    },
    { scope: container2 }
  );

  return (
    <div>
      <h1 className="text-5xl font-bold text-center font-serif uppercase mt-5">
        GSAP Learning
      </h1>

      {/* gsap */}
      <div>
        {/* box -1 */}
        <div className="container" ref={container}>
          <div className="box bg-blue-500 w-32 h-32 m-auto mt-10"></div>
        </div>
        {/* box -2 */}
        <div className="container2" ref={container2}>
          <div className="box bg-blue-500 w-32 h-32 m-auto mt-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Beginning;
