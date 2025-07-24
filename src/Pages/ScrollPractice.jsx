import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const ScrollPractice = () => {
  gsap.registerPlugin();
  gsap.registerPlugin(ScrollTrigger);
  const pageContainer = useRef();

  useGSAP(
    () => {
      gsap.from(".page1 .box", {
        scale: 0,
        duration: 1,
        rotate: 360,
        borderRadius: "50%",
      });

      gsap.from(".page2 .box", {
        scale: 0,
        duration: 1,
        rotate: 360,
        borderRadius: "50%",
        scrollTrigger: {
          trigger: ".page2 .box", // which one will be trigger on scroll
        //   scroller: "body",
          markers: true, // markers of start end point, from where animation triggering, shows that for development purpose
          start: "top 70%", // from where animation will start. it will start the animation from the top 70% from the visible part
          end: "top 50%", // from where animation will end. it will end the animation from the top 20% from the visible part
          scrub: 2, // this will make the animation with the scrollbar. when scrollbar go down, it runs the animation till the end point. like its full animation will be depends on scrollbar. you can show live on localhost
          //* you can use number like 1, 2 and boolean both in scrub
          pin: true // this will pin the element. and element will be there where animation stops. so when we scroll down, it will go with us and after animation it stops on that position
        },
      });
    },
    { scope: pageContainer }
  );

  return (
    <div ref={pageContainer}>
      {/* page -1 */}
      <div className="h-screen bg-fuchsia-900 flex justify-center items-center page1">
        <div className="w-32 h-32 bg-amber-50 box"></div>
      </div>
      {/* page -2 */}
      <div className="h-screen bg-cyan-950 flex justify-center items-center page2">
        <div className="w-32 h-32 bg-amber-50 box"></div>
      </div>
      {/* page -3 */}
      <div className="h-screen bg-emerald-950 flex justify-center items-center page3">
        <div className="w-32 h-32 bg-amber-50 box"></div>
        <h1>Heading One</h1>
      </div>
    </div>
  );
};

export default ScrollPractice;
