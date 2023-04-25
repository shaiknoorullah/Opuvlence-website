import React from "react";

const ServicesComp = () => {
  return (
    <div className="flex w-full gap-[50px] pt-[120px] justify-center">
      <div className="flex justify-center text-black h-full w-[900px] items-center  ">
        <div className="h-[800px] w-[2px] bg-black"></div>
        <div className="pl-[30px] ">
          <div className="relative z-0">
            <img src="/services1.png" />
          </div>
          <div className="text-white absolute top-[550px] left-[230px]   z-100 w-[620px] text-center">
            <h1 className="text-[30px] font-[500]  ">Residential Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          <div className=" flex items-center gap-[16px]">
            <img className="mt-[20px] self-end  " src="/services12.png" />
            <p className="text-[30px] ">Residential Design</p>
          </div>
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[800px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] self-end ">
          <h1 className="text-[30px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[800px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] self-end ">
          <h1 className="text-[30px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
      <div className="flex text-black  ">
        <div className="h-[800px] w-[2px] bg-black"></div>
        <div className="items-center w-[100px] mx-[26px] flex flex-col justify-between h-[280px] self-end ">
          <h1 className="text-[30px] inline-block w-[250px] rotate-[270deg]">
            Corporate Design
          </h1>
          <img src="/services2.png" />
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
