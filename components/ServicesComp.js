import React from "react";

const ServicesComp = () => {
  return (
    <div className="flex w-full gap-[36px] h-fit pt-[80px] justify-center">
      <div className="flex justify-center text-black  h-fit  items-center  ">
        <div className="h-[min(600px,31.25vw)] w-[2px] bg-black"></div>

        <div className="relative z-0 pl-[20px] w-[min(800px,41.666vw)] ">
          <img src="/services1.png" />
          <div className="text-white absolute top-[min(360px,18.75vw)] left-[min(115px,5.18vw)]   z-100 w-[min(580px,30.2vw)] text-center">
            <h1 className="text-[min(24px,1.25vw)] font-[500]  ">
              Residential Design
            </h1>
            <p className="text-[min(14px,0.74vw)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          <div className=" flex items-center gap-[min(16px,0.9vw)]">
            <img
              className="mt-[20px] w-[80px] self-end  "
              src="/services12.png"
            />
            <p className="text-[24px] ">Residential Design</p>
          </div>
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[min(600px,31.25vw)] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[min(250px,13vw)] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[min(600px,31.25vw)] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[min(250px,13vw)] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[min(600px,31.25vw)] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px]  mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[min(250px,13vw)] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
