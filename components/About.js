/** @format */

import react from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Gettoknow from "../public/homepage/gettokow.webp";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
  variable: "--font-poppins",
});
const About = () => {
  return (
    <div className="w-[100%] md:hidden base:flex jus relative lg:flex flex-col max-w-[1920px] base:mt-[4rem] lg:mt-[-10rem]">
      <div
        className={`lg:w-[65%]  flex justify-center base:text-[3.75vw] base:leading-[5.62vw] base:tracking-[0.15vw] base:pt-[5vw] base:pb-[6.40vw] 3xl:text-[25px] 3xl:leading-[37.5px] 3xl:tracking-[0.5px] font-extrabold text-[#A5787A] 3xl:pt-[20px] 3xl:pb-[41px] lg:text-[1.2626vw] lg:leading-[1.89vw] lg:pt-[1.01vw] lg:pb-[2.07vw] uppercase ${poppins.className}`}
      >
        {/* lg:text-[] lg:leading-[] lg:tracking-[] lg:w-[]*/}/ About
      </div>
      <div className="base:pl-[6.25vw] base:pr-[6.25vw] 3xl:pl-[191px] 3xl:pr-[191px] lg:pl-[9.64vw] lg:pr-[9.64vw] lg:flex lg:flex-row relative lg:gap-[11.41vw] 3xl:gap-[226px] z-[100]">
        <div
          data-scroll
          data-scroll-speed="2"
          className={`base:w-[60.56vw] base:text-[8.88vw] base:leading-[14.88vw] base:tracking-[2.46vw] 3xl:w-[656px] 3xl:text-[115px] 3xl:leading-[157.32px] 3xl:tracking-[17.5px] font-normal ${golden.className} lg:text-[5.80vw] lg:leading-[7.94vw] lg:tracking-[0.88vw] lg:w-[33.1313vw] text-black`}
        >
          get to kno
          <span className="lg:text-[white] base:text-[black]">w</span>{" "}
          <span className="lg:text-black base:text-white">us</span>
        </div>
        <div
          className={`text-right base:mt-[20vw] base:w-[100] base:text-[8.88vw] base:leading-[14.88vw] base:tracking-[2.46vw] 3xl:mt-[320px] lg:mt-[17.161616vw]   3xl:w-[656px] 3xl:text-[115px] 3xl:leading-[157.32px] 3xl:tracking-[17.5px] font-normal ${golden.className} text-right lg:text-[5.80vw] lg:leading-[7.94vw] lg:tracking-[0.88vw] lg:w-[33.1313vw]`}
        >
          {/* <span className="ml-[600px]">A</span>
          <span className="text-[white]">lit</span>
          tle better */}
          <div data-scroll data-scroll-speed="1.5">
            <div className="text-right base:text-[white] lg:text-[black]">
              A
            </div>
            <div className="lg:text-[white] text-right base:text-[black]">
              lit
              <span className="text-[black] text-right ">tle</span>
            </div>
            <div className="text-right text-black">better</div>
          </div>
        </div>
      </div>
      {/* lg */}
      <div className="base:hidden lg:flex">
        <Image
          src={Gettoknow}
          data-scroll
          data-scroll-speed="1.2"
          className=" 3xl:w-[1044px] lg:w-[52.7272vw] absolute 3xl:top-[245px] lg:top-[12.15vw] 3xl:right-[400px] lg:right-[23vw] rounded-[50px] "
        />
        {/* <img
          data-scroll
          data-scroll-speed="1.2"
          src="/homeabout.png"
          className=" 3xl:w-[1044px] lg:w-[52.7272vw] absolute 3xl:top-[245px] lg:top-[12.15vw] 3xl:right-[400px] lg:right-[23vw] "
        ></img> */}
        <img
          src="rectangle 267.png"
          className="3xl:w-[394px] lg:w-[19.89vw] absolute 3xl:top-[490px] 3xl:right-[325px] lg:top-[24.74vw] lg:right-[19.41vw] "
        ></img>
      </div>
      {/* base */}
      <div className="md:hidden absolute">
        <img
          src="mobile266.png"
          className="w-[100vw] relative top-[38.123vw]"
        ></img>
        <img
          src="mobile267.png"
          className="relative w-[30.93vw] z-[100] left-[69.375vw] top-[5.625vw]"
        ></img>
      </div>
      {/* <div>kbd</div> */}
    </div>
  );
};
export default About;
