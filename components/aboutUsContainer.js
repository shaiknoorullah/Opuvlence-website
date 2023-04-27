import React from "react";

const AboutUsContainer = ({ left }) => {
  return (
    <div className="w-full flex justify-center base:py-6 lg:py-12">
      <div className="w-[95%] flex">
        <div
          className={
            left
              ? `bg-[#270405] flex items-center lg:pl-[5rem] base:rounded-br-[9rem] base:rounded-tl-[9rem] lg:pr-[10rem] lg:self-start base:self-center px-5 base:justify-self-center lg:justify-self-start lg:rounded-r-full w-full lg:mr-[12rem] py-[8rem] text-white lg:text-[1.3rem]`
              : `bg-[#270405] flex items-center lg:pr-[5rem] base:rounded-bl-[9rem] base:rounded-tr-[9rem] lg:pl-[10rem] lg:self-start base:self-center px-5 base:justify-self-center lg:justify-self-end lg:rounded-l-full lg:ml-[12rem] py-[8rem] text-white lg:text-[1.3rem]`
          }
        >
          “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
          amet consectetur Lorem ipsum dolor sit amet consectetur adipiscing
          elit Ut et massa”
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
