import React from "react";
import CustomButton from "../section/customButton";
import localFont from "next/font/local";
// const golden = localFont({
//   src: "../styles/font/golden/golden.woff2",
//   variable: "--font-golden",
// });
// const poppins = localFont({
//   src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
//   variable: "--font-poppins",
// });

const ServicesReusable = ({
  imageUrl,
  title,
  quote,
  className,
  className2,
}) => {
  return (
    <div
      className={`w-[95%] lg:w-[97.5%] flex flex-col max-w-[1920px] ${className2}`}
    >
      <div className="flex w-full justify-center">
        <div className="lg:flex hidden w-[15%]" />
        <div className="font-[700] text-[min(1.5rem,10rem)] w-[80%] text-[#A5787A] flex uppercase">
          / OUR SERVICE / {title}
        </div>
      </div>

      {/* grid for desktop flex for mobile */}
      <div className="flex flex-col lg:grid grid-cols-12 mt-[20px]">
        <div className="flex row-span-full flex-col col-start-1 col-end-8 z-50">
          <div
            className={`base:text-[2.8rem] text-black lg:text-[min(5.9vw,7rem)] tracking-[0.7rem] lg:tracking-[min(1vw,1.9rem)] lg:leading-[min(10vw,170px)] ${className}`}
          >
            {title}
          </div>
        </div>
        <div className="row-span-full flex-col col-start-7 col-end-13 z-0 base:my-5 lg:my-0">
          <img className="base:h-[22rem] lg:h-fit" src={imageUrl} />
        </div>
        <div
          className={`col-start-5 text-black lg:ml-[6rem] w-[90%] lg:leading-[min(3vw,2rem)]  lg:mt-[-6rem] ml-5 col-end-9 italic base:text-[1.1rem] lg:text-[min(1.5vw,2rem)] z-[100] ${className2} font-semibold`}
        >
          {quote}
        </div>
        <div className="mt-10 col-start-1  col-end-4 row-start-2 text-black">
          {" "}
          <CustomButton text="Say Hello" href={"#contact"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesReusable;
