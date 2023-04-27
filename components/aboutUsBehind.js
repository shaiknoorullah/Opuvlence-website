import React from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const AboutUsBehind = () => {
  return (
    <div className="w-full flex base:justify-center lg:justify-end py-14 ">
      <div className="base:w-[95%] lg:w-[97.5%]">
        {/* grid  */}
        <div className="base:flex base:flex-col lg:grid grid-cols-12">
          <div className="row-span-full col-start-1 col-end-11 flex w-full flex-col z-50">
            <div
              className={`hidden lg:inline-block text-[4.8vw] tracking-[0.7rem] leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              Behind every great company is a great founder - meet ours.
            </div>
            <div
              className={`lg:hidden base:text-[2.8rem] lg:text-[4.8vw]  self-center justify-self-center tracking-[0.7rem] leading-[65px] ${golden.className} capitalize leading-[7rem] `}
            >
              meet our visionary founder
            </div>

            {/* For desktop quotation */}
            <div className="lg:inline-block base:hidden w-[30rem] text-[1.4rem] font-bold italic ml-[17vw] pt-[11rem]">
              “Using edge cutting technology to provide extremely reliable
              service Using edge cutting technology to provide extremely
              reliable service Using edge cutting technology to provide
              extremely reliable service Using edge cutting technology”
            </div>
          </div>
          <div className="row-span-full lg:pl-[5rem] col-start-7 col-end-13 z-0">
            <img src="/aboutus.jpg" />
          </div>
          
          {/*for mobile  */}
          <div
          className={`lg:hidden base:inline-block  mt-4 lg:text-[1.3rem] w-[80%] font-extrabold italic ${poppins.className}`}
        >
          “Lorem Ipsum dolor sit amet consectetur adipscing lore lorem is lorem
          ipsum dolor sit amet adipscing Lorem Ipsum dolor sit amet”
        </div>
        </div>
        <div
          className={`${poppins.className} base:text-right lg:text-left lg:ml-[25rem] lg:mr-[5rem] text-[1.1rem] py-11 text-black leading-8 font-bold`}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
          et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum
          dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sitLorem ipsum dolor sit amet consectetur
        </div>
      </div>
    </div>
  );
};

export default AboutUsBehind;