/** @format */

import React from "react";
import localFont from "next/font/local";
import { golden, poppins } from "../utils/fonts";
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

// Font files can be colocated inside of `pages`

const AboutUsBehind = () => {
  return (
    <div className="w-full flex base:justify-center lg:justify-center py-14 ">
      <div className="base:w-[95%] max-w-[1920px] lg:w-[97.5%]">
        {/* grid  */}
        <div className="base:flex base:flex-col lg:grid grid-cols-12">
          <div className="row-span-full col-start-1 col-end-11 flex w-full flex-col z-50">
            <div
              className={`hidden lg:inline-block text-[min(4.8vw,6rem)] text-black tracking-[0.7rem] leading-[min(7vw,130px)] ${golden} capitalize  `}
            >
              Behind every great company is a great founder - meet ours.
            </div>
            <div
              className={`lg:hidden base:text-[min(7.9vw,5rem)] md:text-[min(6vw,45px)] md:w-[70vw] base:px-[5px] lg:text-[4.8vw]   tracking-[0.5rem]  ${golden} capitalize  `}
            >
              meet our visionary founder
            </div>

            {/* For desktop quotation */}
            <div
              className={`lg:inline-block base:hidden w-[32rem] text-black text-[min(1.5vw,1.4rem)]  italic  pt-[11rem] ${poppinsSemibold.className}`}
            >
              &dbquo; We understand that the details matter in interior design.
              We pay close attention to every aspect of the project to ensure
              that the end result is exactly what our clients are looking
              for&dbquo;
            </div>
          </div>
          <div className="row-span-full lg:pl-[5rem] col-start-7 col-end-13 z-0">
            <img className="rounded-br-[5rem]" src="/aboutus.jpg" />
          </div>

          {/*for mobile  */}
          <div
            className={`lg:hidden base:inline-block tracking-[0.03em]  base:text-[1.1rem] md:text-[2.6vw] base:w-[70.315vw] md:w-[48vw] font-extrabold italic ${poppins}`}
          >
            &apos; Lorem Ipsum dolor sit amet consectetur adipscing lore lorem
            is lorem ipsum dolor sit amet adipscing Lorem Ipsum dolor sit
            amet&apos;
          </div>
        </div>
        <div
          className={`${poppinsRegular.className}  base:text-[1rem] lg:text-[1rem] base:text-right lg:text-left py-11 text-black lg:leading-8 font-normal md:text-[2.4vw] lg:ml-[25rem] lg:mr-[5rem]`}
        >
          Quality materials: We believe that quality materials are essential for
          creating beautiful and long-lasting interior designs. That&apos;s why
          we only use the best materials in all of our projects.
          <br />
          Customer satisfaction: Our top priority is our customer&apos;s
          satisfaction. We work hard to ensure that every project is completed
          to our client&apos;s satisfaction and that they are happy with the end
          result.
          <br /> Overall, if you&apos;re looking for an interior company that
          can provide you with personalized and high-quality service, then
          we&apos;re the right choice for you.
        </div>
      </div>
    </div>
  );
};

export default AboutUsBehind;
