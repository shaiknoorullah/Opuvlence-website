import React from "react";
import CustomButton from "../section/customButton";
import localFont from "next/font/local";
import { gsap } from "gsap";
import { useEffect } from "react";
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
        duration: 1.2,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
      }
    );
    heading.childNodes.forEach((element, idx) => {
      // console.log(element, idx)
      // gsap.fromTo(
      //   element.children,
      //   {
      //     y: 70,
      //     opacity: 0,
      //   },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.8,
      //     stagger: 0.07,
      //     delay: 1.3,
      //     ease: "power2.out",
      //   }
      // );
      gsap.fromTo(
        description.children,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.02,
          delay: 1.9,
          ease: "power2.out",
        }
      );
      // gsap.fromTo(
      //   thestorybehind.children,
      //   {
      //     y: 30,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.5,
      //     stagger: 0.05,
      //     delay: 1.8,
      //     ease: "power2.out",
      //   }
      // );
      gsap.fromTo(
        "#RentalImage",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: `1`,
          ease: "power2.out",
        }
      );
    });
  }, []);
  return (
    <div
      className={`w-[95%] lg:w-[97.5%] flex flex-col max-w-[1920px] ${className2}`}
    >
      <div className="flex w-full justify-center">
        <div className="lg:flex hidden w-[15%]" />
        <div className="font-[700] base:text-[3.75vw] md:text-[2.815vw] lg:text-[min(1.5rem,10rem)] lg:w-[70%] base:w-[100%] text-[#A5787A] flex base:py-[6.5vw] md:py-[70px]   base:justify-center lg:justify-start uppercase">
          / OUR SERVICE / {title}
        </div>
      </div>

      {/* grid for desktop flex for mobile */}
      <div className="flex flex-col lg:grid grid-cols-12 mt-[20px]">
        <div className="flex row-span-full flex-col col-start-1 col-end-8 z-50">
          <div
            id="heading"
            className={`base:w-[31.177vw] base:text-[2.8rem] md:text-[5.85vw] md:w-[41.01vw] lg:w-[60.4vw] text-black lg:text-[min(5.9vw,7rem)] tracking-[0.7rem] lg:tracking-[min(1vw,1.9rem)] lg:leading-[min(10vw,170px)] ${className}`}
          >
            {`${title}`.split(" ").map((char, index) => {
              return (
                <span
                  key={index}
                  className={`inline-block ${
                    char == " "
                      ? "base:ml-3 md:ml-7"
                      : "base:ml-[0px] md:ml-[7px]"
                  }`}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>
        <div className="row-span-full flex-col col-start-7 col-end-13 z-0 base:my-5 lg:my-0">
          <img
            id="RentalImage"
            className="base:h-[22rem] md:w-[100%] md:h-[100%] lg:h-fit"
            src={imageUrl}
          />
        </div>
        <div
          id="description"
          className={`col-start-5 text-black lg:ml-[6rem] w-[90%] lg:leading-[min(3vw,2rem)] md:w-[50.65vw] lg:w-[100%] lg:mt-[-6rem] ml-5 col-end-9 italic base:text-[1.1rem] lg:text-[min(1.5vw,2rem)] z-[100]  ${className2} font-semibold`}
        >
          {`${quote}`.split(/\?\n/).map((char, index) => {
            return (
              <span key={index} className="inline-block">
                {char}
              </span>
            );
          })}
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
