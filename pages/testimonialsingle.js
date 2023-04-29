import React from "react";
import Navbar from "../components/Navbar";

const Testimonialsingle = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Navbar />
      <div className="w-[95%] base:py-12 lg:py-9 flex lg:flex-row base:flex-col">
        {/* image section */}

        <div className="base:w-[65%] lg:w-[25%]">
          <img className="cover w-full" src="testimonial.jpg" />
        </div>
        <div className="flex flex-col base:py-3 lg:my-[9rem] lg:pl-[3rem] lg:w-[75%]">
          <div className="w-[16rem] text-[3.2rem] leading-[4rem]">
            Dennis Reijnders
          </div>
          <div className="flex text-[1.5rem] pt-7">
            Senior Interior Architect
          </div>
          <div className="border border-black w-full base:my-6 lg:my-11"></div>
          <div className="text-[1.3rem] leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur Lorem ipsum dolor sit amet consectetur adipiscing
            elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
            sitLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sitLorem ipsum dolor sit amet consectetur Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur Lorem ipsum dolor sit amet consectetur adipiscing
            elit Ut et massa mi. Aliquam in hendrerit urna.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsingle;
