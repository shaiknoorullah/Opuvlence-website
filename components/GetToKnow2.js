import React from "react";
import localFont from "next/font/local";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Medium.woff2",
  variable: "--font-poppins",
});

const GetToKnow2 = () => {
  return (
    <div className="relative  mt-[20px] px-[40px]">
      <h1
        className={`text-[90px] tracking-wider relative z-[1000] inline-block text-black ${golden.className}  `}
      >
        Behind every great company is a great founder - meet ours.
      </h1>
      <img
        src="/aboutus2.jpg"
        className="absolute top-0 h-[700px] right-0 z-0 "
      />
      <div className="flex flex-col">
        <p
          className={`${poppins.className} italic text-[20px] text-[#270405] ml-[200px] leading-[35px] tracking-wide mt-[70px] w-[500px]`}
        >
          “Using edge cutting technology to provide extremely reliable service
          Using edge cutting technology to provide extremely reliable service
          Using edge cutting technology to provide extremely reliable service
          Using edge cutting technology”
        </p>
        <p
          className={`${poppins.className}  text-[18px]  block text-black mr-[50px] mt-[100px] self-end w-[1100px] leading-[30px] tracking-wider`}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
          et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum
          dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sitLorem ipsum dolor sit amet consectetur
        </p>
        <div
          className={`mt-[100px] bg-[#270405] flex justify-end  rounded-l-[500px] items-center w-[80%] h-[350px] self-end  mr-[50px]  `}
        >
          <p
            className={`text-[#D9D9D9] w-[80%]  text-[18px] mr-[50px] text-right leading-[30px] tracking-wider first-letter: ${poppins.className} `}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur Lorem ipsum dolor sit amet consectetur adipiscing
            elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
            sitLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sitLorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow2;
