import React from "react";

const AboutUsContainer = ({ left }) => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[95%] flex">
        <div
          className={
            left
              ? `bg-[#270405] flex items-center pl-[5rem] pr-[10rem] self-start justify-self-start rounded-r-full w-full mr-[12rem] py-[8rem] text-white text-[1.3rem]`
              : `bg-[#270405] flex items-center pr-[5rem] pl-[10rem] self-start justify-self-end rounded-l-full ml-[12rem] py-[8rem] text-white text-[1.3rem]`
          }
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
          et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum
          dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sitLorem ipsum dolor sit amet consectetur
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
