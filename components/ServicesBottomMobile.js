import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ServicesBottomMobile = () => {
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);

  const tl1 = useRef();
  const tl2 = useRef();
  const tl3 = useRef();
  const tl4 = useRef();

  useEffect(() => {
    tl1.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl2.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl3.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl4.current = gsap.timeline({
      paused: true,
      delay: 0,
    });

    tl1.current.fromTo(
      "#img1",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",

        duration: 1,
        ease: "power3.out",
      }
    );
    tl2.current.fromTo(
      "#img2",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",
        duration: 1,
        ease: "power3.out",
      }
    );
    tl3.current.fromTo(
      "#img3",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",

        duration: 1,
        ease: "power3.out",
      }
    );
    tl4.current.fromTo(
      "#img4",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",

        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    service1 ? tl1.current.play() : tl1.current.reverse();
    service2 ? tl2.current.play() : tl2.current.reverse();
    service3 ? tl3.current.play() : tl3.current.reverse();
    service4 ? tl4.current.play() : tl4.current.reverse();
  }, [service1, service2, service3, service4]);

  return (
    <div className="  base:flex lg:hidden  justify-center w-full ">
      <div className="w-[95%] flex flex-col gap-[16px] mt-[50px] ">
        {/* first service */}
        <div
         className="min-w-full"
          id="first"
          onClick={() => {
            setService1(true);
            setService2(false);
            setService3(false);
            setService4(false);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Corporate Design</h1>
          </div>
          <div id="img1" className="relative mt-[12px] hidden  justify-center ">
            <img src="/services3.png" className="relative" />
            <div className="absolute z-10 top-[50%] w-[90%] ">
              <h1 className="text-[5vw]">Corporate Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
        </div>
        {/* second service */}
        <div
          id="second"
          className="min-w-full"
          onClick={() => {
            setService1(false);
            setService2(true);
            setService3(false);
            setService4(false);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Corporate Design</h1>
          </div>
          <div id="img2" className="relative mt-[12px] hidden  justify-center ">
            <img src="/services3.png" className="relative" />
            <div className="absolute z-10 top-[50%] w-[90%] ">
              <h1 className="text-[5vw]">Corporate Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
        </div>
        {/* third service */}
        <div
          id="third"
          className="min-w-full"
          onClick={() => {
            setService1(false);
            setService2(false);
            setService3(true);
            setService4(false);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Corporate Design</h1>
          </div>
          <div id="img3" className="relative mt-[12px] hidden  justify-center ">
            <img src="/services3.png" className="relative" />
            <div className="absolute z-10 top-[50%] w-[90%] ">
              <h1 className="text-[5vw]">Corporate Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
        </div>
        {/* fourth service */}
        <div
          id="fourth"
          className="min-w-full"
          onClick={() => {
            setService1(false);
            setService2(false);
            setService3(false);
            setService4(true);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Corporate Design</h1>
          </div>
          <div id="img4" className="relative mt-[12px] hidden  justify-center ">
            <img src="/services3.png" className="relative" />
            <div className="absolute z-10 top-[50%] w-[90%] ">
              <h1 className="text-[5vw]">Corporate Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBottomMobile;
