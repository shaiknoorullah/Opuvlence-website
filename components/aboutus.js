/** @format */

import React from "react";
import localFont from "next/font/local";
import { golden, poppins } from "../utils/fonts";
import Image from "next/image";
import AboutImage from "../public/homepage/living2.webp";
import AboutMobile from "../public/homepage/aboutmobile.webp";

// Font files can be colocated inside of `pages`

const AboutusHero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex base:w-[95%] max-w-[1920px] lg:w-[95%] flex-col ">
        {/* text and image section grid*/}
        <div className="lg:grid grid-cols-12 base:pt-7 lg:pt-[2rem] ">
          <div className="flex row-span-full flex-col text-black col-start-1 col-end-6  z-50">
            <div
              className={`base:text-[min(9.5vw,5rem)] lg:text-[min(6.2vw,8rem)] tracking-[0.7rem] md:text-[6vw] md:w-[46vw] lg:leading-[min(7vw,130px)] ${golden}`}
            >
              GET TO KNOW US
            </div>
            {/* change this poppins to lamore */}
            <div
              className={`base:text-[min(5vw,1.8rem)] lg:text-[2rem] md:text-[2.92vw] ${poppins}`}
            >
              THE STORY BEHIND
            </div>

            {/* quotation for desktop */}
            <div
              className={`lg:inline-block base:hidden mt-[5rem] text-[1.3rem] w-[70%] font-medium italic ${poppins}`}
            >
              Experience the art of luxury interior design. Let us transform
              your space into a breathtaking work of art.
            </div>
          </div>

          {/* image section */}
          <div className="col-start-5 row-span-full base:py-4 col-end-13 z-0">
            {/* <img
              className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] "
              src="/aboutusheromobile.jpg"
            /> */}
            <Image
              className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] object-cover h-[min(100vw,35rem)] "
              src={AboutMobile}
            />
            {/* <img
              className="base:hidden lg:inline-block lg:pl-10 lg:pr-4 "
              src="/AboutUsHero.jpg"
            /> */}
            <Image
              src={AboutImage}
              className="base:hidden lg:inline-block object-cover h-[40rem] w-[1120px] lg:pl-10 lg:pr-4 "
            />
          </div>
        </div>
        <div
          className={`lg:hidden base:inline-block   base:text-[1.1rem] md:text-[2.8vw] base:w-[70.315vw] md:w-[46vw] font-extrabold italic ${poppins}`}
        >
          “Experience the art of luxury interior design. Let us transform your
          space into a breathtaking work of art.”
        </div>

        {/* description*/}
        <div className="lg:grid py-[3rem] grid-cols-[1fr_3fr_1fr]">
          <div
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 3,
            }}
            className={`${poppins}  base:text-[1rem] lg:text-[1rem] base:text-right lg:text-left py-11 text-black lg:leading-8 font-normal md:text-[2.5vw]`}
          >
            At Opuvlence, we are committed to sustainability and
            eco-friendliness. We use environmentally- friendly materials
            whenever possible and strive to reduce waste and minimize our carbon
            footprint. Our portfolio includes a diverse range of projects, from
            single-room makeovers to large-scale commercial renovations. We have
            worked with clients in a variety of industries, including
            hospitality, healthcare, and retail.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusHero;
