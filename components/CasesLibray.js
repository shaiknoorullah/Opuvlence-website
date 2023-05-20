/** @format */

import React, { useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";

// importing images statically
import Arrow from "../public/Vectorwhite.png";
import OurProject from "./ourProject";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

// import images statically
import arch1 from "../public/architecture1.webp";
import arch2 from "../public/architecture2.webp";
import arch3 from "../public/architecture3.webp";
import arch4 from "../public/architecture4.webp";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const ProjectGrid = (props) => {

// getting query





  return (
    <Link href={props.href} passHref>
      <div className="block cursor-pointer h-[820px]">
        <div className="w-[100%] h-[100%] relative flex flex-col justify-center items-center overflow-clip ">
          <div
            className={`${golden.className} z-[99] relative mix-blend-multiply w-[min(707px,36.8vw)] font-normal italic text-[min(100px,5.2vw)] leading-[(136.8px,7.125vw)] tracking-[0.175em] text-center text-black`}
          >
            {props.heading}
          </div>
          <div
            className={`font-normal z-[99] relative  w-[min(480px,25vw)] items-center italic text-[min(23px,1.197vw)] leading-[min(31.6px,1.645vw)] tracking-[0.1em] text-center text-black lowercase ${poppins.className}`}
          >
            {props.text}
          </div>
          <Image
            // data-scroll
            // data-scroll-speed="1.2"
            src={props.image}
            alt="project image"
            className="absolute top-[-50%] w-full object-cover"
          ></Image>
        </div>
      </div>
    </Link>
  );
};

const CasesLibrary = ({ setName, projects, name }) => {
  return (
    <div
      // data-scroll-section
      className="w-[full]"
    >
      <Head>
        <title>Opuvlence - Our Design Cases</title>
        <meta
          name="description"
          content="Explore our portfolio of design cases to see how we have transformed spaces into beautiful and functional environments. Contact us to start your own design project."
        />
        <meta
          name="keywords"
          content="opuvlence, design cases, portfolio, interior design, architecture, transformation, beautiful spaces, functional environments"
        />
        <meta property="og:title" content="Opuvlence - Our Design Cases" />
        <meta
          property="og:description"
          content="Explore our portfolio of design cases to see how we have transformed spaces into beautiful and functional environments. Contact us to start your own design project."
        />
        <meta property="og:url" content="https://www.opuvlence.com/cases" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.opuvlence.com/images/cases-thumbnail.jpg"
        />
        <meta property="og:image:alt" content="Opuvlence Design Cases" />
        <meta property="twitter:title" content="Opuvlence - Our Design Cases" />
        <meta
          property="twitter:description"
          content="Explore our portfolio of design cases to see how we have transformed spaces into beautiful and functional environments. Contact us to start your own design project."
        />
        <meta
          property="twitter:url"
          content="https://www.opuvlence.com/cases"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://www.opuvlence.com/images/cases-thumbnail.jpg"
        />
      </Head>
      <div className="px-[min(20px,1.041vw)] max-w-[1920px] flex flex-col items-center justify-center">
        <div className="flex w-[100%] lg:flex-row base:flex-col base:gap-[0.5rem] lg:gap-[0.5rem] base:mt-[40px] lg:mt-[0px]">
          <div className="base:w-[100%] lg:w-[5%] 3xl:mt-[291.4px] lg:mt-[15.2vw]">
            <div className=" 3xl:w-[90px] lg:w-[4.68vw]  relative  3xl:top-[520px] lg:top-[27.08vw] ">
              <div
                // className="flex flex-row items-center base:gap-[5.56vw] base:px-[3.125vw] 3xl:gap-[40px] lg:gap-[2.08vw]"
                className="flex flex-row items-center origin-top-left lg:-rotate-90 base:gap-[5.56vw] base:px-[3.125vw] md:px-[0px] 3xl:gap-[40px] lg:gap-[2.08vw]"
              >
                <div
                  onClick={() => {
                    setName("Residential");
                  }}
                  className={
                    name==="Residential"
                      ? `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-black `
                      : `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-normal italic uppercase text-black`
                  }
                >
                  residential
                </div>
                <Image
                  alt="arrow"
                  src={Arrow}
                  className="base:w-[2.3vw] invert 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-90  ml-1"
                ></Image>
                <div
                  onClick={() => {
                    setName("Commercial");
                  }}
				  className={
                    name==="Commercial"
                      ? `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-black `
                      : `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-normal italic uppercase text-black`
                  }                >
                  commercial
                </div>
                <Image
                  alt="arrow"
                  src={Arrow}
                  className="base:w-[2.3vw] invert 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-90  ml-1"
                ></Image>

                <div
                  onClick={() => {
                    setName("Restaurant");
                  }}
				  className={
                    name==="Restaurant"
                      ? `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-black `
                      : `base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-normal italic uppercase text-black`
                  }                >
                  restaurant
                </div>
              </div>
            </div>
          </div>

          <div className=" base:w-[100%] lg:w-[95%] flex flex-col gap-[30px] text-black lg:pt-[80px]">
            {projects.map((data, index) => {
              return (
                <div key={index}>
                  <ProjectGrid
                    href="/casestudies"
                    image={data.image}
                    heading={data.title}
                    text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
                  />
                </div>
              );
            })}

            {/* <ProjectGrid
							href="/casestudies"
							image={arch2}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
						<ProjectGrid
							href="/casestudies"
							image={arch3}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
						<ProjectGrid
							href="/casestudies"
							image={arch4}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CasesLibrary;
