/** @format */

import localFont from "next/font/local";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import ProjectCard from "./projectCard";

import Bathroom from "../public/projectopuvlence/bathroom.webp";
import Bedroom from "../public/projectopuvlence/bedroom.webp";
import LivingRoom from "../public/projectopuvlence/livingroom.webp";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});
// const residential = [
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bathroom,
//   },
//   {
//     name: "Tranquil Haven",
//     description:
//       "Tranquil Haven is a residential bedroom design concept that prioritizes serenity and relaxation. With soft colors, natural elements, and minimalistic decor, it creates a peaceful atmosphere. Cozy furnishings and soothing lighting enhance the tranquil ambiance, providing a haven for rest, rejuvenation, and a peaceful escape from the outside world.",
//     image: Bedroom,
//   },
//   {
//     name: "Timeless Elegance",
//     description:
//       "Timeless Elegance is a residential living room design concept that embraces classic aesthetics with a touch of sophistication. Neutral color palettes, luxurious materials, and harmonious furniture create a refined and enduring atmosphere. With attention to detail and balance, it achieves a timeless beauty and an understated sense of luxury.",
//     image: LivingRoom,
//   },
// ];

// const commercial = [
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
// ];

// const restaurant = [
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
//   {
//     name: "Serene Haven",
//     description:
//       "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
//     image: Bedroom,
//   },
// ];

const OurProject = () => {
  const [active, setactive] = useState("Residential");

  const [projects, setprojects] = useState(null);

  console.log(projects);

  useEffect(() => {
    // Function to fetch data from the JSON file or API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data?name=${active}`);
        const jsonData = await response.json();
        setprojects(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [active]);

  useEffect(() => {
    const viewMoreButtonRef = document.getElementById("viewMoreButton");

    const onMouseOver = () => {
      gsap.to("#buttonArrow", {
        y: -20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to("#buttonArrow", {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    viewMoreButtonRef.addEventListener("mouseover", onMouseOver);
    viewMoreButtonRef.addEventListener("mouseleave", onMouseLeave);

    return () => {
      viewMoreButtonRef.removeEventListener("mouseover", onMouseOver);
      viewMoreButtonRef.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      data-scroll
      className="w-full base:hidden md:hidden lg:flex items-center justify-center "
    >
      <div className="font-poppins w-[98%] z-50 ">
        <div className="grid grid-cols-[1.3fr_0.4fr_1.2fr_1.2fr] grid-rows-[0.4fr_0.6fr_0.7fr_0.5fr_0.4fr]">
          <div
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 3,
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
            className="w-[100%] justify-center font-extrabold text-[1.3rem] text-[#A5787A] flex pt-[20px]"
          >
            / OUR PROJECTS
          </div>
          <text
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 2,
              gridRowStart: 3,
              gridRowEnd: 4,
            }}
            className=" 3xl:w-[583px] text-black lg:w-[30.36vw]  3xl:text-[33px] lg:text-[1.71vw]  3xl:leading-[45.34px] lg:leading-[2.361vw] tracking-[10%] font-bold 3xl:pl-[50px] 3xl:pt-[41px] lg:pl-[2.60vw] lg:pt-[2.13vw] snap-center"
          >
            WE&apos;VE BUILT HOMES THAT BRING DREAMS COME TRUE
          </text>
          <div
            style={{
              gridColumnStart: 3,
              gridColumnEnd: 4,
              gridRowStart: 3,
              gridRowEnd: 5,
            }}
            className="3xl:w-[442px] text-[#270405] lg:w-[23.02vw] 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] lg:leading-[1.294vw] tracking-[7%] font-normal  3xl:pt-[86px] lg:pt-[4.47vw]  snap-center"
          >
            We take pride in our ability to transform spaces into beautiful,
            functional environments that meet our client&apos;s needs and exceed
            their expectations. Whether it&apos;s a cozy living room, a modern
            kitchen, or a luxurious hotel lobby, we have the expertise and
            experience to deliver exceptional results.
          </div>
          {/* reuse */}
          <div
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 2,
              gridRowStart: 5,
              gridRowEnd: 6,
            }}
            className="3xl:w-[587px] lg:w-[30.57vw] 3xl:pl-[50px] lg:pl-[2.60vw]  relative"
          >
            <div className="flex text-black flex-row items-center 3xl:gap-[15px] lg:gap-[0.78vw] absolute 3xl:top-[-13.59px] lg:top-[-0.708vw]">
              <div
                onClick={() => {
                  setactive("Residential");
                }}
                className={
                  active === "Residential"
                    ? `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase`
                    : `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-normal italic uppercase`
                }
              >
                residential
              </div>
              <img
                src="OurprojectVector.png"
                className=" 3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]"
              ></img>
              <div
                onClick={() => {
                  setactive("Commercial");
                }}
                className={
                  active === "Commercial"
                    ? `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase`
                    : `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-normal italic uppercase`
                }
              >
                commercial
              </div>
              <img
                src="OurprojectVector.png"
                className="3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]  ml-1"
              ></img>
              <div
                onClick={() => {
                  setactive("Restaurant");
                }}
                className={
                  active === "Restaurant"
                    ? `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase`
                    : `3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-normal italic uppercase`
                }
              >
                restaurant
              </div>
            </div>
          </div>
        </div>

        <ScrollContainer
          style={{
            display: "flex",
            gap: "100px",
            overflow: "scroll",
            width: "full",
          }}
        >
          {projects?.projects.map((data, index) => {
            console.log(data);
            return (
              <div key={index}>
                <ProjectCard
                  src={data.image}
                  title={data.title}
                  description={data.description}
                  year="2022"
                  type={active}
                />
              </div>
            );
          })}

          <Link
            href="/caseslibrary"
            passHref
            id="viewMoreButton"
            className="relative flex flex-col"
          >
            <svg
              id="buttonArrow"
              className="scale-[0.7] -translate-y-[30px] translate-x-[-3px] origin-bottom-right"
              width="46"
              height="140"
              viewBox="0 0 46 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0001 228.497L23.0001 0.229981M23.0001 0.229981C21.8532 19.5573 20.0816 32.7193 17.6852 39.7159C15.2888 46.7147 9.92678 54.3681 1.60351 62.6805M23.0001 0.229981C24.1469 19.5573 25.9186 32.7193 28.315 39.7159C30.7114 46.7147 36.0734 54.3681 44.3967 62.6805"
                stroke="black"
                stroke-width="2.19697"
              />
            </svg>
            <div
              className={`${golden.className} uppercase absolute w-max bottom-0 left-0 origin-top-left -rotate-90 translate-y-[50px] translate-x-[-3px]  text-[min(54px,2.81vw)]`}
            >
              view more
            </div>
          </Link>
        </ScrollContainer>
      </div>
    </div>
  );
};
export default OurProject;
