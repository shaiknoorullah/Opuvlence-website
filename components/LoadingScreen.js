import react, { useEffect } from "react";
import { gsap } from "gsap";

const LoadingScreen = () => {
  useEffect(() => {
    gsap.fromTo(
      "#loadingScreen1",
      { opacity: 1, display: "block" },
      { opacity: 0, display: "none", delay: 2.2 }
    );
    gsap.fromTo(
      "#loadingScreen2",
      { y: 0, display: "flex" },
      {
        y: -2000,
        display: "none",
        ease: "power2.Out",
        duration: 0.5,
        delay: 4.2,
      }
    );
    gsap.fromTo(
      "#text2",
      { opacity: 0 },
      { opacity: 1, delay: 2.5, duration: 1.2, ease: "power3.Out" }
    );
    gsap.fromTo(
      "#progress",
      { opacity: 1, width: 0 },
      { duration: 2, width: "100%", ease: "power3.Out" }
    );
    gsap.fromTo(
      "#img1",
      { y: -350 },
      { delay: 1.2, y: 0, duration: 1, ease: "power3.Out" }
    );
    gsap.fromTo(
      "#img2",
      { x: 1000 },
      { delay: 1.2, x: 0, duration: 1, ease: "power3.Out" }
    );
    gsap.fromTo(
      "#img3",
      { x: -800 },
      { delay: 1.2, x: 0, duration: 1, ease: "power3.Out" }
    );
    gsap.fromTo(
      "#img4",
      { y: 500 },
      { delay: 1.2, y: 0, duration: 1, ease: "power3.Out" }
    );
  }, []);

  return (
    <>
      <div
        id="loadingScreen1"
        className="relative
         z-[1000] bg-[#F5E1E2] w-[100%] h-[100vh] overflow-hidden text-left text-[186px] text-black font-golden"
      >
        <img
          className="absolute top-[0px] left-[0px] h-[260px]  object-contain"
          alt=""
          id="img1"
          src="/loadingbed.svg"
        />
        <div
          className="absolute top-[299px] left-[88px] w-[1745px] h-[361px]"
          id="text"
        >
          <img
            src="/loadingText.svg"
            className="absolute top-[45px] z-[100] left-[0px] tracking-[0.28em]"
          />

          <p className="m-0 absolute top-[297px] z-[100] left-[654px] text-[28px] tracking-[0.07em] font-light font-gilroy text-center flex items-end justify-center w-[436px]">
            Elevating the status of luxury for the desrving
          </p>
        </div>
        <img
          className="absolute top-[628px] left-[1426px] w-[395px] h-[414px] object-cover"
          alt=""
          id="img4"
          src="/loadingrightbottom.svg"
        />

        <img
          className="absolute top-[421px] left-[-50px] w-[920px] h-[414px] object-cover"
          alt=""
          id="img3"
          src="/loading3.png"
        />

        <img
          className="absolute top-[0px] right-0 w-[903px]  object-cover"
          alt=""
          id="img2"
          src="/loadingright.svg"
        />
        <div
          id="progress"
          className="absolute bottom-0 left-[0px] bg-[#340506] w-[1920px] h-2 "
        />
      </div>
      <div
        id="loadingScreen2"
        className="bg-[#340506] fixed top-0 flex flex-col justify-center m-auto w-[100%] h-[100vh]"
      >
        <img id="text2" src="loadingText2.png " />
      </div>
    </>
  );
};

export default LoadingScreen;
