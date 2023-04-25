import React from "react";

const ServicesComp = () => {
  return (
    <div className="flex w-full gap-[36px] h-screen pt-[120px] justify-center">
      <div className="flex justify-center text-black h-full  items-center  ">
        <div className="h-[600px] w-[2px] bg-black"></div>
        <div className="pl-[30px] ">
          <div className="relative z-0 w-[600px] ">
            <img src="/services1.png" />
            <div className="text-white absolute top-[260px] left-[65px]   z-100 w-[480px] text-center">
              <h1 className="text-[24px] font-[500]  ">Residential Design</h1>
              <p className="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-[16px]">
            <img
              className="mt-[20px] w-[80px] self-end  "
              src="/services12.png"
            />
            <p className="text-[24px] ">Residential Design</p>
          </div>
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[600px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[600px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[600px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px]  mb-[50px] self-end ">
          <h1 className="text-[24px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
