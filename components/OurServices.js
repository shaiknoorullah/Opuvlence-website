/** @format */

import React from "react";
// import Navbar from "./Navbar"
import localFont from "next/font/local";
import CustomButton from "./section/customButton";
import { useEffect } from "react";
import { gsap } from "gsap";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const poppinsItalic = localFont({
  src: "../styles/font/poppins/Poppins-Italic.woff2",
  variable: "--font-poppins",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Light.woff2",
  variable: "--font-poppins",
});

const OurServices = () => {
  useEffect(() => {
    const heading = document.getElementById("heading");
    const description = document.getElementById("description");
    const thestorybehind = document.getElementById("thestorybehind");

    gsap.fromTo(
      heading.children,
      {
        y: 70,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.3,
        ease: "power2.out",
      }
    );
    // heading.childNodes.forEach((element, idx) => {
    //   // console.log(element, idx)

    //   gsap.fromTo(
    //     description.children,
    //     {
    //       y: 20,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 0.2,
    //       stagger: 0.02,
    //       delay: 1.9,
    //       ease: "power2.out",
    //     }
    //   );

    //   // gsap.fromTo(
    //   //   thestorybehind.children,
    //   //   {
    //   //     y: 30,
    //   //     opacity: 0,
    //   //   },
    //   //   {
    //   //     y: 0,
    //   //     opacity: 1,
    //   //     duration: 0.5,
    //   //     stagger: 0.05,
    //   //     delay: 1.8,
    //   //     ease: "power2.out",
    //   //   }
    //   // );
    //   gsap.fromTo(
    //     "#ourserviceimage",
    //     {
    //       y: 50,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 0.5,
    //       delay: `1.8`,
    //       ease: "power2.out",
    //     }
    //   );
    // });
  }, []);
  return (
    <div className="w-full base:justify-center lg:justify-center flex">
      <div className="w-[95%] lg:w-[97.5%] flex flex-col max-w-[1920px] ">
        <div className="flex w-full justify-center">
          <div className="lg:flex hidden w-[15%]"></div>
          <div className="font-[700] base:text-[3.75vw] md:text-[2.815vw] lg:text-[min(1.5rem,10rem)] lg:w-[70%] base:w-[100%] text-[#A5787A] flex base:py-[6.5vw] md:py-[70px]   base:justify-center lg:justify-start">
            / OUR SERVICE / INTERIOR DESIGN
          </div>
        </div>

        {/* grid for desktop flex for mobile */}
        <div className="flex flex-col lg:grid grid-cols-12 mt-[20px]">
          <div className="flex row-span-full flex-col col-start-1 col-end-8  z-50">
            <div
              className={`base:text-[2.7rem] md:text-[5.85vw] md:w-[41.01vw] lg:w-[60.4vw] base:w-[31.177vw] text-black lg:text-[min(5.9vw,7rem)] tracking-[0.7rem] lg:tracking-[min(1vw,1.9rem)] lg:leading-[min(10vw,170px)] ${golden.className}`}
              id="heading"
            >
              <p>
                {`Interior`.split(" ").map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`inline-block ${
                        item == " "
                          ? "base:ml-3 md:ml-7"
                          : "base:ml-[0px] md:ml-[7px]"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
              <p>
                {`Design For`.split(" ").map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`inline-block  ${
                        item == " "
                          ? "base:ml-3 md:ml-7"
                          : "base:ml-[0px] md:ml-[7px]"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
              <p>
                {`Luxury`.split(" ").map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`inline-block ${
                        item == " "
                          ? "base:ml-3 md:ml-7"
                          : "base:ml-[0px] md:ml-[7px]"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="row-span-full flex-col col-start-7 col-end-13 z-0 base:my-5 lg:my-0">
            <img
              id="ourserviceimage"
              className="base:h-[22rem] md:w-[100%] md:h-[100%] lg:h-fit"
              src="/serviceshero.jpg"
            />
          </div>
          <div className="col-start-5 text-black lg:ml-[6rem] w-[90%] lg:leading-[min(3vw,2rem)] md:w-[50.65vw] lg:w-[100%] lg:mt-[-6rem] ml-5 col-end-9 italic base:text-[1.1rem] lg:text-[min(1.5vw,2rem)] z-[100]  ">
            “In rooms where lovely harmonies prevail, Where all is simple,
            gracious, and serene, Where natural beauty needs no art to veil,
            Where order, light, & comfort reign supreme ”
          </div>
          <div className="mt-10 col-start-1 col-end-4 row-start-2">
            {" "}
            <CustomButton text="Say Hello" href={"#contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

// {
//   <div className="w-full">
// 	<div className="flex">
// 		<div className="w-[30%]"></div>
// 		{/* main title */}
// 		<div className="font-[800] uppercase text-[1.2rem] text-[#A5787A] flex">
// 			/ OUR Sevices
// 		</div>
// 	</div>
// 	<div className="flex w-[90%] justify-between  mt-[46px] items-center  ">
// 		{/*subTitle  */}
// 		<div
// 			className={`w-[25%] text-[40px] ml-[26px] text-black leading-[40px] font-[700]  `}
// 		>
// 			Intrerior Design For Luxury
// 		</div>
// 		<div
// 			className={`text-[#A5787A] w-[32%] leading-[24px] text-[14px]  ${poppins.className}`}
// 		>
// 			We offer stunning residential interiors and optimized
// 			rental spaces. Custom designs and renovations
// 			available. Let us transform your space.
// 		</div>
// 	</div>
// 	<div className="flex w-[90%] items-center justify-between ">
// 		<div className="flex flex-col ">
// 			<p
// 				className={`text-[#270405] text-[20px] leading-[34px] tracking-wide  italic font-[500] w-[450px] mx-[70px] my-[60px] ${poppinsItalic.className} `}
// 			>
// 				“We offer stunning residential interiors and
// 				optimized rental spaces. Custom designs and
// 				renovations available. Let us transform your space.”
// 			</p>
// 			<button className="cursor-pointer  [border:none] p-0 bg-[transparent] w-[250px] h-[55px] shrink-0">
// 				<div className=" bg-[#000000] py-[10px] text-[22px] tracking-[0.1em] rounded-r-[50px]  uppercase font-[700] font-nunito-sans text-white text-center">
// 					say hello
// 				</div>
// 			</button>
// 		</div>
// 		<div className=" w-[550px] self-center mt-[70px] ">
// 			<img src="/ourservices.jpg" />
// 		</div>
// 	</div>
// </div>
// }
