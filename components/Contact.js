import React from "react";
import localFont from "next/font/local";
import CustomButton from "./section/customButton";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
  variable: "--font-poppins",
});

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit base:mt-[25px] lg:py-[8rem] base:px-[6.25vw] max-w-[1920px] lg:px-[40px] flex flex-col  justify-center mx-auto ">
      <div className="flex w-full justify-between ">
        <h1
          className={`lg:w-[40%] base:w-[70%] text-[#270405] uppercase base:text-[10vw] lg:text-[min(4.68vw,90px)] base:[12.5vw] lg:leading-[min(120px,6.25vw)]  ${golden.className} `}
        >
          get in contact with us
        </h1>
      </div>
      <div
        className={`w-full flex lg:flex-row base:flex-col mt-[34px] base:text-[4.375vw] lg:text-[18px] justify-between text-[#B25F62] font-[400] ${poppins.className} `}
      >
        <div className="base:w-full lg:w-[40%]">
          <div>
            <label className="block">Name</label>
            <input
              className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
              type="text"
            />
          </div>
          <div>
            <label className="block base:mt-[14vw] lg:mt-[78px] ">Email</label>
            <input
              className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
              type="text"
            />
          </div>
        </div>
        <div className="base:w-full lg:w-[40%] base:mt-[14vw] lg:mt-0 lg:text-right ">
          <div>
            <label className="block ">Contact number</label>
            <input
              className="w-full  outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
              type="text"
            />
          </div>
          <div>
            <label className="block base:mt-[14vw]  lg:mt-[78px]">
              Your Message
            </label>
            <input
              className="w-full bg-inherit border-b-[1px] border-b-[#B25F62] border-solid outline-none "
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="mt-[70px] cursor-pointer ">
        <CustomButton text={"Submit"} color={"black"}  />
      </div>
    </div>
  );
};

export default Contact;
