import localFont from "@next/font/local";
import React from "react";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const poppinsExtrabold = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
});
const poppinsRegular = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
});
const poppinsMedium = localFont({
  src: "../styles/font/poppins/Poppins-Medium.woff2",
});
const poppinsSemibold = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
});

const WhyChooseUs = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-[1920px] ">
        {/* ourservice/why choose us */}
        <div
          id="section-name"
          className="flex lg:justify-start base:justify-center"
        >
          <div className="md:flex hidden w-[20%]"></div>

          <div
            className={`${poppinsExtrabold.className} uppercase font-extrabold base:text-[1.2rem] md:text-[2rem] lg:text-[1.2rem] text-[#A5787A] flex`}
          >
            <span className="inline-block text-[1rem] md:text-[2rem] lg:text-[1.2rem] mr-3">
              /
            </span>
            <span className="inline-block mr-3 mt-[-3px] lg:text-[1.2rem]">
              Our service / why choose us?
            </span>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-12 grid-rows-3 pt-12">
          <h1
            className={`${golden.className} text-[min(2.9vw,3.4rem)] col-start-1 col-end-6 row-start-1 row-end-2`}
          >
            WHy choose us?
          </h1>
          <div
            className={`${poppinsSemibold.className} row-start-2 italic row-end-3 col-start-3 col-end-7`}
          >
            “Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to.
          </div>
          <div
            className={`${poppinsRegular.className} row-start-3 italic row-end-4 col-start-7 col-end-12`}
          >
            “Lorem ipsum dolor sit amet consectetur{" "}
          </div>
        </div>

        {/* cards */}

        <div className="mx-[min(3vw,3rem)] my-8 bg-black py-[min(7vw,7.2rem)] px-[min(7vw,7.2rem)] rounded-[14rem] flex justify-between">
          <div className="py-[5rem] w-[30%] text-[#F6EBDD] text-[min(2vw,2.5rem)]">
            Verified Tenants with Background Checks
          </div>

          <div className="w-[50%] flex justify-between gap-6 text-[min(1.2vw,1.7rem)]  text-[#E3CBC6]">
            <ul className="justify-between flex flex-col">
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
              
            </ul>
            <ul className="justify-between flex flex-col">
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
              <li>Lorem ipsum dolor sit ame consectetur </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;