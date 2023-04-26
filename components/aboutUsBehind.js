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
    <div className="w-full flex  justify-end py-14 ">
      <div className="w-[97.5%]">
        <div className=" grid grid-cols-12">
          <div className="row-span-full col-start-1 col-end-11 flex flex-col z-50">
            <div
              className={`text-[4.8vw] tracking-[0.7rem] leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              Behind every great company is a great founder - meet ours.
            </div>
            <div className=" w-[30rem] text-[1.4rem] font-bold italic ml-[17vw] pt-[11rem]">
              “Using edge cutting technology to provide extremely reliable
              service Using edge cutting technology to provide extremely
              reliable service Using edge cutting technology to provide
              extremely reliable service Using edge cutting technology”
            </div>
          </div>
          <div className="row-span-full pl-[5rem] col-start-7 col-end-13 z-0">
            <img src="/aboutus.jpg" />
          </div>
        </div>
        <div
          className={`${poppins.className} ml-[25rem] mr-[5rem] text-[1.1rem] py-11 text-black leading-8 font-bold`}
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
