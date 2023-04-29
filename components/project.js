import React from "react";
import localFont from "next/font/local";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});
const Project = () => {
  return (
    <div className="w-[full] bg-[#1E1E1E]">
      <div className="px-[min(20px,1.041vw)] py-[40px]">
        <div className="flex justify-center">
          <img src="image 8.png"></img>
        </div>
        {/* <div className="grid grid-cols-10 grid-rows-4"></div> */}
        <div className="flex w-[100%] lg:flex-row base:flex-col  gap-6">
          <div className="w-[5%] 3xl:mt-[200px] lg:mt-[10.41vw]">
            <div className="lg:h-[fit-content] 3xl:w-[90px] lg:w-[4.68vw]  relative lg:rotate-[270deg] 3xl:top-[520px] lg:top-[27.08vw] ">
              <div className="flex flex-row items-center base:gap-[5.56vw] base:px-[3.125vw] 3xl:gap-[40px] lg:gap-[2.08vw]">
                <div className="base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-[white]">
                  residential
                </div>
                <img
                  src="Vectorwhite.png"
                  className="base:w-[2.3vw]  3xl:w-[12.17px] 3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-[90deg]"
                ></img>
                <div className="base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em]3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
                  commercial
                </div>
                <img
                  src="Vectorwhite.png"
                  className=" base:w-[2.3vw] 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-[90deg] ml-1"
                ></img>
                <div className="base:text-[3.43vw] base:leading-[5.15vw]  base:tracking-[0.05em] 3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
                  restaurant
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%] flex flex-col gap-[30px] text-white pt-[80px]">
            <div className="grid  grid-rows-3">
              <div className="row-span-full col-start-1 col-end-11 row-start-1 row-end-4">
                <img src="unsplash1.png" className="w-[full] h-[100%]"></img>
              </div>
              <div className=" flex flex-col row-span-full col-start-4 col-end-8 row-start-2 z-[100]">
                <div
                  className={`${golden.className}  w-[min(707px,36.8vw)] font-normal italic text-[min(100px,5.2vw)] leading-[(136.8px,7.125vw)] tracking-[0.175em] text-center text-[#270405] `}
                >
                  Batholic plutonic
                </div>
                <div className="font-normal  ml-[min(120px,6.25vw)] w-[min(480px,25vw)] items-center italic text-[min(23px,1.197vw)] leading-[min(31.6px,1.645vw)] tracking-[0.1em] text-center text-[#270405]">
                  {" "}
                  wE’vE bUiLt homes thAt brinG DrEAms COME trUE
                </div>
              </div>
            </div>
            {/* <div className="grid  grid-rows-3">
              <div className="row-span-full col-start-1 col-end-11 row-start-1 row-end-4">
                <img src="unsplash2.png" className="w-[full] h-[100%]"></img>
              </div>
              <div className=" flex flex-col row-span-full col-start-4 col-end-8 row-start-2 z-[100]">
                <div
                  className={`${golden.className}  w-[707px] font-normal italic text-[100px] leading-[136.8px] tracking-[0.175em text-center text-[#270405]`}
                >
                  Batholic plutonic
                </div>
                <div className="font-normal col-start-5 col-end-6 ml-[120px] w-[480px] items-center italic text-[23px] leading-[31.6px] tracking-[0.1em] text-center text-[#270405]">
                  {" "}
                  wE’vE bUiLt homes thAt brinG DrEAms COME trUE
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
