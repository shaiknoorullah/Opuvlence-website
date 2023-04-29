import React from "react";
import Navbar from "./Navbar";
import localFont from "next/font/local";
import CustomButton from "./section/customButton";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppinsItalic = localFont({
  src: "../styles/font/poppins/Poppins-Italic.woff2",
  variable: "--font-poppins",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Light.woff2",
  variable: "--font-poppins",
});

const OurServices = () => {
  return (
    <div className="w-full base:justify-center lg:justify-end flex">
      <div className="w-[95%] lg:w-[97.5%] flex flex-col">
        <div className="flex w-full justify-center">
          <div className="lg:flex hidden w-[15%]"></div>
          <div className="font-[700] text-[1.2rem] w-[80%] text-[#A5787A] flex">
            / OUR SERVICE / INTERIOR DESIGN
          </div>
        </div>

        {/* grid for desktop flex for mobile */}
        <div className="flex flex-col lg:grid grid-cols-12 ">
          <div className="flex row-span-full flex-col col-start-1 col-end-8  z-50">
            <div
              className={`base:text-[2.8rem] lg:text-[6.3vw] tracking-[0.7rem] lg:tracking-[1rem] lg:leading-[170px] ${golden.className}`}
            >
              Interior Design For Luxury
            </div>
          </div>
          <div className="row-span-full flex-col col-start-7 col-end-13 z-0 base:my-5 lg:my-0">
            <img className="base:h-[22rem] lg:h-fit" src="/serviceshero.jpg" />
          </div>
          <div className="col-start-5 lg:ml-[6rem] w-[90%] leading-8 font-semibold lg:mt-[-7rem] ml-5 col-end-9 italic base:text-[1.1rem] lg:text-[1.5rem] z-[100] ">
            “Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology.”
          </div>
           <div className="mt-10 col-start-1 col-end-4 row-start-2">
            {" "}
            <CustomButton text="Say Hello" href={"#contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
<div className="w-full">
  <div className="flex">
    <div className="w-[30%]"></div>
    {/* main title */}
    <div className="font-[800] uppercase text-[1.2rem] text-[#A5787A] flex">
      / OUR Sevices
    </div>
  </div>
  <div className="flex w-[90%] justify-between  mt-[46px] items-center  ">
    {/*subTitle  */}
    <div
      className={`w-[25%] text-[40px] ml-[26px] text-black leading-[40px] font-[700]  `}
    >
      Intrerior Design For Luxury
    </div>
    <div
      className={`text-[#A5787A] w-[32%] leading-[24px] text-[14px]  ${poppins.className}`}
    >
      Using edge cutting technology to provide extremely reliable service Using
      edge cutting technology to provide extremely reliable service Using edge
      cutting technology to provide extremely reliable serviceUsing edge cutting
      technology to provide extremely reliable service
    </div>
  </div>
  <div className="flex w-[90%] items-center justify-between ">
    <div className="flex flex-col ">
      <p
        className={`text-[#270405] text-[20px] leading-[34px] tracking-wide  italic font-[500] w-[450px] mx-[70px] my-[60px] ${poppinsItalic.className} `}
      >
        “Using edge cutting technology to provide extremely reliable service
        Using edge cutting technology to provide extremely reliable service
        Using edge cutting technology to provide extremely reliable service
        Using edge cutting technology.”
      </p>
      <button className="cursor-pointer  [border:none] p-0 bg-[transparent] w-[250px] h-[55px] shrink-0">
        <div className=" bg-[#000000] py-[10px] text-[22px] tracking-[0.1em] rounded-r-[50px]  uppercase font-[700] font-nunito-sans text-white text-center">
          say hello
        </div>
      </button>
    </div>
    <div className=" w-[550px] self-center mt-[70px] ">
      <img src="/ourservices.jpg" />
    </div>
  </div>
</div>;
