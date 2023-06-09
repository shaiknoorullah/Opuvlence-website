/** @format */

import react, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";
import Image from "next/image";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const MobileOurProject = () => {
  const [active, setactive] = useState("Residential");

  const [projects, setprojects] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects?.projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects?.projects.length - 1 : prevIndex - 1
    );
  };

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
  const currentItem = projects?.projects[currentIndex];
  // console.log(currentItem.image)
  

  // animation
    useEffect(() => {
      gsap.fromTo('.item-transition', {
        opacity: 0,
        x:-200,
        duration: 0.2,
      },{
        x:0,
        opacity:1
      });
    }, [currentIndex]);
    
  return (
    <div className="lg:hidden w-[100%] pt-[9.375vw]">
      <p className="relative items-center flex justify-center text-[3.75vw] md:text-[2rem] leading-[5.625vw] tracking-[0.05em] text-[#A5787A] font-extrabold uppercase mb-[6.25vw]">
        / our projects
      </p>
      <div className="flex flex-row justify-between pl-[5.93vw] pr-[7.18vw] pb-[8.43vw] ">
        <div className="flex text-black flex-col text-[4.68vw] leading-[7.03vw] tracking-[0.05em] font-[300] italic uppercase">
          <div
            onClick={() => {
              setactive("Residential");
            }}
            className={active === "Residential" ? `font-medium` : "font-normal"}
          >
            -residential
          </div>
          <div
            onClick={() => {
              setactive("Commercial");
            }}
            className={active === "Commercial" ? `font-medium` : "font-normal"}
          >
            commercial
          </div>
          <div
            onClick={() => {
              setactive("Restaurant");
            }}
            className={active === "Restaurant" ? `font-medium` : "font-normal"}
          >
            restaurant
          </div>
        </div>
        <div
          className={`${poppins.className} base:w-[11.25vw] md:w-[25vw] text-black base:text-[min(9px,2.20vw)] md:text-[1.8rem] uppercase base:leading-[2.743vw] md:leading-9 tracking-[10%] font-[700] text-right`}
        >
          wE&apos;vE bUiLt homes thAt brinG DrEAms COME trUE
        </div>
      </div>
      <div className="item-transition relative">
        <Image
          src={currentItem?.image}
          className="base:w-[100%] object-cover base:h-[21rem] md:h-[82vw]"
        ></Image>
        <div className="pl-[6.25vw]">
          {/* <img src="rectangle269.png" className="w-[100vw] z-[1]"></img> */}
          <div
            className={`${golden.className} text-black absolute text-[15.625vw] leading-[15.625vw] tracking-[3%] top-[15.374vw] z-[10]`}
          >
            {currentItem?.title}
          </div>
        </div>
      </div>
      <div className="relative left-[52vw] top-[-10vw]">
        {/* <img src="/group52.svg" className="absolute w-[45vw]"></img> */}
      </div>
      <div
        className={`${poppins.className} mt-[13vw] text-black base:text-[4vw] md:text-[1.5rem] px-[6.125vw] font-normal text-justify base:leading-[6.05vw] md:leading-10 md:font-semibold tracking-[0.05em]`}
      >
        {currentItem?.description}
      </div>
      <div
        className={`flex  gap-[3rem] w-full items-center justify-end mt-5 pr-7 text-black ${poppins}`}
      >
        <div onClick={handleNext} className="text-[2rem] italic underline ">
          PREV
        </div>
        <div onClick={handlePrevious} className="text-[2rem] italic underline ">
          NEXT
        </div>
      </div>
    </div>
  );
};
export default MobileOurProject;
