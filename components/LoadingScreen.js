/** @format */

import react, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const LoadingScreen = () => {
  const loadingLogo = useRef(null);
  const paragraph = useRef(null);

  useEffect(() => {
    const loadingLogoVar = loadingLogo.current.children;
    const paragraphVar = paragraph.current.children;
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    gsap
      .timeline()
      .fromTo(
        "#loadingScreen1",
        { opacity: 1 },
        {
          opacity: 0,

          transformOrigin: "bottom center",
          duration: 0.2,
          delay: 3.1,
        }
      )
      .fromTo(
        "#loadingScreen1",
        {
          display: "block",
        },
        {
          display: "none",
        }
      );

    tl.fromTo(
      loadingLogoVar,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.1024,
      }
    ).fromTo(
      paragraphVar,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        ease: "power4.out",
        duration: 0.7,
        stagger: 0.05,
      }
    );
    gsap.fromTo(
      "#progress",
      { opacity: 1, width: 0 },
      { duration: 3, width: "100%", ease: "power3.Out" }
    );

    gsap.fromTo(
      "#img1",
      { y: -350 },
      { y: 0, duration: 1, delay: 0.7, ease: "power3.out" }
    );
    gsap.fromTo(
      "#img2",
      { x: 1000 },
      { x: 0, duration: 1, delay: 0.75, ease: "power3.out" }
    );
    gsap.fromTo(
      "#img3",
      { x: -800 },
      { x: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      "#img4",
      { y: 500 },
      { y: 0, duration: 1, delay: 0.85, ease: "power3.out" }
    );

    return () => {};

    // tl.fromTo(
    //   "#loadingScreen1",
    //   { opacity: 1, display: "block" },
    //   { opacity: 0, display: "none", delay: 2.2, overflow: "hidden" }
    // );
    // tl.
    // tl.
    // tl.
    // tl.
    // .fromTo(
    //   "#loadingScreen2",
    //   { height: 0, transformOrigin: "bottom center", display: "block" },
    //   {
    //     height: 100,
    //     ease: "power2.Out",
    //     duration: 0.5,
    //     delay: 4.2,
    //   }
    // )
    // .to("#loadingScreen2", {
    //   height: 0,
    //   ease: "power2.Out",
    //   duration: 0.5,
    //   delay: 1,
    // })
    // .fromTo(
    //   "#text2",
    //   { opacity: 0 },
    //   { opacity: 1, delay: 2.5, duration: 1.2, ease: "power3.Out" }
    // )
    //
  }, []);

  return (
    <>
      <div
        id="loadingScreen1"
        className="absolute top-0 left-0 scrollbar-hide z-[9999] bg-[#f6ebdd] w-[100%]  overflow-hidden text-left text-[186px] text-black "
      >
        <img
          className="base:hidden md:block absolute top-[0px] left-[0px] lg:h-[230px] md:h-[200px]  object-contain"
          alt=""
          id="img1"
          src="/loadingbed.svg"
        />

        <div
          className={`relative flex flex-col z-[999] justify-center items-center ${golden.className} text-[#270405] w-full h-screen`}
          id="text"
        >
          <h1 ref={loadingLogo} className="md:text-[9.3vw] lg:text-[12vw]">
            {"Opuvlence".split("").map((char, idx) => {
              return (
                <span key={idx} className="inline-block">
                  {char}
                </span>
              );
            })}
          </h1>
          <div
            ref={paragraph}
            className={`${poppins.className} md:w-[436px] base:w-[90vw] text-center overflow-hidden base:text-[16px] md:text-[] lg:text-[28px] z-[100]`}
          >
            {"Elevating the status of luxury for the deserving"
              .split(" ")
              .map((char, idx) => {
                return (
                  <span key={idx} className="inline-block ml-2">
                    {char}
                  </span>
                );
              })}
          </div>
        </div>
        <img
          className="base:hidden md:block absolute md:-bottom-14 lg:bottom-0 right-[100px] md:h-[200px] lg:h-[274px] object-contain"
          alt=""
          id="img4"
          src="/loadingrightbottom.svg"
        />

        <img
          className="base:hidden md:block absolute lg:top-[321px] md:top-[350px] left-0 lg:w-[650px] lg:h-[414px] md:w-[400px] md:h-[180px] object-contain"
          alt=""
          id="img3"
          src="/loading3.png"
        />

        <img
          className="base:hidden md:block absolute top-[0px] right-0 lg:w-[783px] md:w-[400px] object-contain"
          alt=""
          id="img2"
          src="/loadingright.svg"
        />
        <div
          id="progress"
          className="base:hidden md:block absolute bottom-0 left-[0px] bg-[#270405] w-[1920px] h-2"
        />
      </div>
    </>
  );
};

export default LoadingScreen;
