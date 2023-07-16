import React from "react";

const LandingAboutus = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[1920px] w-[90%] py-[100px] text-[#270405]">
        {/* heading */}
        <div className="flex base:flex-col-reverse md:flex-row gap-[min(14vw,273px)] ">
          <div className="flex flex-col justify-between">
            <h1 className="capitalize text-[min(2.1vw,45px)] font-semibold ">
              about us{" "}
            </h1>
            <div className="text-[min(1.1vw,20px)] text-justify">
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
          <img src="../landingAbout.png" className="w-[min(44vw,847px)] " />
        </div>
      </div>
    </div>
  );
};

export default LandingAboutus;
