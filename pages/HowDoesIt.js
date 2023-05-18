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

const HowDoesIt = () => {
  return (
    <div className="w-full flex justify-center pt-36">
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
              Our service / how does it work?
            </span>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-12 grid-rows-2 pt-12">
          <h1
            className={`${golden.className} text-[min(2.9vw,3.4rem)] col-start-1 col-end-6 row-start-1 row-end-2`}
          >
            how does it work?
          </h1>
          <div
            className={`${poppinsSemibold.className} row-start-2 italic row-end-3 col-start-3 col-end-7 pt-4`}
          >
            “Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to.
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-between h-[32rem] items-center ">
          <div className="py-[5rem] w-[55vw] text-[min(20px,1.4vw)] leading-[min(3vw,2rem)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur Lorem ipsum dolor sit amet consectetur adipiscing
            elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
            sitLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sitLorem ipsum dolor sit amet consectetur
          </div>
          <div className={`${poppinsRegular.className} h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}>
          Sign Management <br/> Agreement
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesIt;
