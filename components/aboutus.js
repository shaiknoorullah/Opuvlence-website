/** @format */

import React, { useEffect } from "react";
import localFont from "next/font/local";
import { golden, poppins } from "../utils/fonts";
import Image from "next/image";
import AboutImage from "../public/homepage/living2.webp";
import AboutMobile from "../public/homepage/aboutmobile.webp";
import { gsap } from "gsap";

// Font files can be colocated inside of `pages`

const AboutusHero = () => {
  useEffect(() => {
    const heading = document.getElementById("heading");
    const description = document.getElementById("description");
    const thestorybehind=document.getElementById("thestorybehind")

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
    heading.childNodes.forEach((element, idx) => {
      // console.log(element, idx)
      gsap.fromTo(
        element.children,
        {
          y: 70,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.07,
          delay: 1.3,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        description.children,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: 1.9,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        thestorybehind.children,{
          y:30,
          opacity:0
        },{
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: 1.8,
          ease: "power2.out",
        }
      )
      gsap.fromTo(
        "#heroImage",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: `1.8`,
          ease: "power2.out",
        })
    });
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="flex base:w-[95%] max-w-[1920px] lg:w-[95%] flex-col ">
        {/* text and image section grid*/}
        <div className="lg:grid grid-cols-12 base:pt-7 lg:pt-[2rem] ">
          <div className="flex row-span-full flex-col text-black col-start-1 col-end-6  z-50">
            {/* <div
              className={`base:text-[min(9.5vw,5rem)] lg:text-[min(6.2vw,8rem)] tracking-[0.7rem] lg:leading-[min(7vw,130px)] ${golden}`}
            >
              GET TO KNOW US
            </div> */}
             <h1 className="m-0 base:text-[min(9.5vw,5rem)] tracking-[0.7rem] lg:leading-[min(7vw,130px)]  lg:text-[min(6.2vw,8rem)]  lg:tracking-[7px]  uppercase font-[300]  ">
            <div
              className={`w-full flex flex-col base:justify-start lg:justify-start base:items-start lg:items-start ${golden}`}
            >
              <div
                id="heading"
                className="tracking relative base:text-left lg:text-left"
              >
                <p
                  // ref={block}
                  className="tracking base:text-left lg:text-left overflow-clip"
                >
                  {"GET TO".split("").map((char, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`inline-block ${
                          char == " "
                            ? "base:ml-3 md:ml-7"
                            : "base:ml-[0px] md:ml-[-7px]"
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
                <p className="tracking base:text-cente lg:text-left overflow-clip">
                  {"KNOW US".split("").map((char, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`inline-block ${
                          char == " "
                            ? "base:ml-3 md:ml-7"
                            : "base:ml-[0px] md:ml-[-7px]"
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
                {/* <p className="tracking base:text-center lg:text-left overflow-clip">
                  {"to new heights".split("").map((char, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`inline-block ${
                          char == " "
                            ? "base:ml-3 md:ml-7"
                            : "base:ml-[0px] md:ml-[-7px]"
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p> */}
              </div>
            </div>
          </h1>
            {/* change this poppins to lamore */}
            <div
            id="thestorybehind"
              className={`base:text-[min(5vw,1.8rem)] lg:text-[2rem] ${poppins} `}
            >
              {`THE STORY BEHIND`.split(/\r?\n/).map((char, idx) => {
                return (
                  <span key={idx} className="inline-block">
                    {char}
                  </span>
                );
              }) }
            </div>

            {/* quotation for desktop */}
            <div
            id="description"
              className={`lg:inline-block base:hidden mt-[5rem] text-[1.3rem] w-[70%] font-medium italic ${poppins}`}
            >
              {`Experience the art of luxury interior design. Let us transform your space into a breathtaking work of art.`.split(/\r?\n/)
              .map((char, idx) => {
                return (
                  <span key={idx} className="inline-block">
                    {char}
                  </span>
                );
              })}
            </div>
          </div>

          {/* image section */}
          <div className="col-start-5 row-span-full base:py-4 col-end-13 z-0">
            {/* <img
              className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] "
              src="/aboutusheromobile.jpg"
            /> */}
            <Image
            id="heroImage"
              className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] object-cover h-[min(100vw,35rem)] "
              src={AboutMobile}
            />
            {/* <img
              className="base:hidden lg:inline-block lg:pl-10 lg:pr-4 "
              src="/AboutUsHero.jpg"
            /> */}
            <div id="heroImage" >
            <Image
              src={AboutImage}
              className="base:hidden lg:inline-block object-cover h-[40rem] w-[1120px] lg:pl-10 lg:pr-4 "
            /></div>
          </div>
        </div>
        <div
          className={`lg:hidden base:inline-block   lg:text-[1.3rem] w-[80%] font-extrabold italic ${poppins}`}
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
            className={`${poppins} lg:ml-[17rem lg:mr-[10rem] base:text-[1rem] lg:text-[1rem] base:text-right lg:text-left py-11 text-black lg:leading-8 font-normal`}
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
