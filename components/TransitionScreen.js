import React, { useEffect } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";

// Font files can be colocated inside of `pages`
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const TransitionScreen = ({ defaultPaused }) => {
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo(
      "#loadingScreen2",
      {
        height: 0,
        zIndex: "10",
        bottom: 0,
      },
      {
        height: "100vh",
        bottom: 0,
        transformOrigin: "bottom center",
        duration: 1.5,
        ease: "power4.out",
        zIndex: "1000",
        delay: 3.1,
      }
    );
    tl.fromTo(
      "#loadingScreen2",
      {
        height: "100vh ",
        top: 0,
      },
      {
        height: "0px",
        delay: 0.8,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <div
      id="loadingScreen2"
      className="bg-[#340506]  overflow-clip   flex flex-col justify-center w-[100%]"
    >
      <div
        // className={`absolute ${golden.className} top-[299px] left-[88px] w-[1745px] h-[361px]`}
        className={`relative flex flex-col z-[999] text-[#A5787A] justify-center items-center ${golden.className} fixed top-[]  w-full`}
        id="text"
      >
        <h1 className="text-[12vw]">Opuvlence</h1>
        <div
          className={`${poppins.className} w-[436px] text-center overflow-hidden text-[28px] z-[100]`}
        >
          Elevating the status of luxury for the deserving"
        </div>
      </div>
    </div>
  );
};

export default TransitionScreen;
