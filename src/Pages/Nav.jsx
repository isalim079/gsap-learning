import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Nav = () => {
  gsap.registerPlugin();
  const navContainer = useRef();

  let timeline = gsap.timeline();

  useGSAP(
    () => {
      timeline.from(".logo", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      }),
        timeline.from("ul > li", {
          y: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.5,
        });
      timeline.from("button", {
        scale: 0.8,
        opacity: 0,
      });
    },
    { scope: navContainer }
  );

  return (
    <nav
      ref={navContainer}
      className="px-8 py-4 flex items-center justify-between"
    >
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-gray-800 logo">LOGO</div>

      {/* Middle - Navigation */}
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <a
            href="/"
            className="text-gray-700 no-underline text-base hover:text-gray-900 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-gray-700 no-underline text-base hover:text-gray-900 transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="text-gray-700 no-underline text-base hover:text-gray-900 transition-colors"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-gray-700 no-underline text-base hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right - CTA Button */}
      <button className="bg-blue-600 text-white border-none px-6 py-3 rounded-md text-base cursor-pointer font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </nav>
  );
};

export default Nav;
