import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

// importing images statically
import Arrow from "../public/Vectorwhite.png";
import OurProject from "./ourProject";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const ProjectGrid = (props) => {
  return (
    <div className="grid  grid-rows-3">
      <div className="row-span-full col-start-1 col-end-11 row-start-1 row-end-4">
        <img src={props.image} className="w-[full] h-[100%]"></img>
      </div>
      <div className="base:mt-[-2.60vw] lg:mt-[-50px] flex flex-col row-span-full col-start-4 col-end-8 row-start-2 z-[100]">
        <div
          className={`${golden.className}  w-[min(707px,36.8vw)] font-normal italic text-[min(100px,5.2vw)] leading-[(136.8px,7.125vw)] tracking-[0.175em] text-center text-[#270405] `}
        >
          {props.heading}
        </div>
        <div
          className={`font-normal  ml-[min(120px,6.25vw)] w-[min(480px,25vw)] items-center italic text-[min(23px,1.197vw)] leading-[min(31.6px,1.645vw)] tracking-[0.1em] text-center text-[#270405] ${poppins.className}`}
        >
          {" "}
          {props.text}
        </div>
      </div>
    </div>
  );
};

const CasesLibrary = () => {
  return (
    <div className="w-[full] bg-[#1E1E1E]">
      <div className="px-[min(20px,1.041vw)] py-[min(70px,3.64vw)] max-w-[1920px] flex flex-col items-center justify-center">
        <div className="flex justify-center  ">
          <img src="image 8.png"></img>
        </div>
        {/* <div className="grid grid-cols-10 grid-rows-4"></div> */}
        <div className="flex w-[100%] lg:flex-row base:flex-col base:gap-[0.5rem] lg:gap-[0.5rem] base:mt-[40px] lg:mt-[0px]">
          <div className="base:w-[100%] lg:w-[5%] 3xl:mt-[291.4px] lg:mt-[15.2vw]">
            <div className="lg:h-[fit-content] 3xl:w-[90px] lg:w-[4.68vw]  relative  3xl:top-[520px] lg:top-[27.08vw] ">
              <div
                // className="flex flex-row items-center base:gap-[5.56vw] base:px-[3.125vw] 3xl:gap-[40px] lg:gap-[2.08vw]"
                className="flex flex-row items-center origin-top-left lg:-rotate-90 base:gap-[5.56vw] base:px-[3.125vw] md:px-[0px] 3xl:gap-[40px] lg:gap-[2.08vw]"
              >
                <div className="base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-[white]">
                  residential
                </div>
                {/* <Image
                  src={Arrow}
                  className="base:w-[2.3vw] 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-90  ml-1"
                ></Image> */}
                <img
                  src="Vectorwhite.png"
                  className=" base:w-[2.3vw] 3xl:w-[12.17px] rotate-90 3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw]  ml-1"
                ></img>
                {/* <div className="base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em]3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
                  commercial
                </div> */}
                <div className="base:text-[3.43vw] base:leading-[5.15vw]  base:tracking-[0.05em] 3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
                  commercial
                </div>
                <img
                  src="Vectorwhite.png"
                  className=" base:w-[2.3vw] 3xl:w-[12.17px] rotate-90 3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw]  ml-1"
                ></img>
                <div className="base:text-[3.43vw] base:leading-[5.15vw]  base:tracking-[0.05em] 3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
                  restaurant
                </div>
              </div>
            </div>
          </div>

          <div className=" base:w-[100%] lg:w-[95%] flex flex-col gap-[30px] text-white lg:pt-[80px]">
            <ProjectGrid
              image="unsplash1.png"
              heading="Batholic plutonic"
              text="wE’vE bUiLt homes thAt brinG DrEAms COME trUE"
            />
            <ProjectGrid
              image="unsplash2.png"
              heading="Batholic plutonic"
              text="wE’vE bUiLt homes thAt brinG DrEAms COME trUE"
            />
            <ProjectGrid
              image="unsplash3.png"
              heading="Batholic plutonic"
              text="wE’vE bUiLt homes thAt brinG DrEAms COME trUE"
            />
            <ProjectGrid
              image="unsplash4.png"
              heading="Batholic plutonic"
              text="wE’vE bUiLt homes thAt brinG DrEAms COME trUE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CasesLibrary;
