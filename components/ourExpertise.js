import React from "react";
import CustomButton from "./section/customButton";

// number component

const NumberText = ({ number, text, state }) => {
  return (
    <div className={`flex flex-${state} `}>
      <div className="font-semibold text-[3.5rem]">{number}+</div>
      <div className="w-[40%] text-[1.6rem] font-medium leading-[2.5rem] ">
        {text}
      </div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <div className="w-full flex  justify-center relative">
      <div className="font-poppins w-[95%] z-50 flex flex-col py-12">
        {/* our Expertise title */}
        <div className="flex">
          <div className="w-[30%]"></div>

          <div className="font-[700] text-[1.2rem] text-[#A5787A] flex">
            / OUR EXPERTISE
          </div>
        </div>

        {/*25 years experience  */}
        <div className="w-[30%] text-[1.8rem] leading-[2.4rem] font-[700] pt-8">
          25 YEARS OF EXPERIENCE IN INTERIOR DESIGN
        </div>

        {/* Using edge cutting */}
        <div className="flex w-full">
          <div className="w-[35%]"></div>
          <div className="text-[0.9rem] w-[30rem] text-[#A5787A] leading-[1.5rem]">
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable
            serviceUsing edge cutting technology to provide extremely reliable
            service
          </div>
        </div>

        {/* grid */}
        <div className="w-full grid grid-cols-11 pt-9">
          <div class="col-span-6  w-full grid grid-rows-3">
            <div class="row-span-2 grid grid-cols-2 gap-3">
              <div>
                <NumberText
                  number={"25"}
                  text={"Years Experience"}
                  state={"col"}
                />
              </div>
              <div>
                <NumberText
                  number={"32"}
                  text={"Professional Team"}
                  state={"col"}
                />
              </div>
              <div>
                <NumberText
                  number={"50"}
                  text={"Awards Gained"}
                  state={"row"}
                />
              </div>
              <div>
                <NumberText
                  number={"5,000"}
                  text={"Projects Completed"}
                  state={"row"}
                />
              </div>
            </div>
            <div class="row-span-1 flex  items-end ">
              <div className="ml-8 pb-4">
                {" "}
                <CustomButton text={"Discover"} color={"black"} href="/" />
              </div>
            </div>
          </div>
          <div class="col-span-5 items-end  pl-9 gap-9 grid grid-cols-3">
            <div className="bg-[#A5787A] rounded-tl-full  w-full h-[14rem]"></div>
            <div className="bg-[#443C3D] rounded-t-full w-full h-full"></div>
            <div className="bg-[#AB9D9E] rounded-tr-full w-full h-[18rem]"></div>
          </div>
        </div>
      </div>

      {/* background text */}
      <div className="absolute golden top-[-5rem] text-[25rem] opacity-70 text-[#DFCECF4D]">
        ACHIEVEMENTS
      </div>
      <div className="absolute golden bottom-[-5rem] text-[25rem] opacity-70 text-[#DFCECF4D]">
        ACHIEVEMENTS
      </div>
    </div>
  );
};

export default OurExpertise;
