import React from "react";
import Reusabletext from "./reusabletext";

const LandingAboutus = () => {
  return (
    <div className="w-full flex justify-center base:py-14 lg:py-40 ">
      <div className="max-w-[1920px] w-[90%] base:py-[50px] md:py-[100px] text-[#270405]">
        {/* heading */}
        <div className="flex base:flex-col-reverse md:flex-row gap-[min(14vw,273px)] ">
          <div className="flex flex-col justify-between">
           <Reusabletext text={"About Us"} />
            <div className="md:text-[min(1.1vw,20px)] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis
              nostrud enim ad nostrud Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim
              ad minim veniam, quis nostrud enim ad nostrud Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud enim ad
              nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam,
              quis nostrud enim ad nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              aliqua.
            </div>
          </div>
          <img src="../landingAbout.png" className="md:w-[min(44vw,847px)] " />
        </div>
      </div>
    </div>
  );
};

export default LandingAboutus;
