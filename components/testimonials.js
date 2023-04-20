import React from "react";
import CustomButton from "./section/customButton";

const TestimonialCard = ({ text, description, image }) => {};

const Testimonials = () => {
  const cards = [
    {
      title: "CAROLYN",
      img: "/testimonial.png",
      description:
        "Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
    },
    {
      title: "CAROLYN",
      img: "/testimonial.png",
      description:
        "Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
    },
    {
      title: "CAROLYN",
      img: "/testimonial.png",
      description:
        "Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
    },
  ];

  return (
    <div className="w-full flex mt-14  justify-center relative">
      <div className="font-poppins w-[95%] z-50 flex flex-col py-12">
        {/* testimonials title */}
        <div className="flex">
          <div className="w-[30%]"></div>

          <div className="font-[700] text-[1.2rem] text-[#A5787A] flex">
            / TESTIMONIALS
          </div>
        </div>
        {/* Lets see what our */}
        <div className="w-[30%] text-[1.8rem] leading-[2.4rem] font-[700] pt-8">
          LETS SEE WHat OUR CUSTOMERS HAVE TO SAY
        </div>

        {/* cards */}
        <div className="pl-[9rem] flex gap-[4rem]">
          {cards.map((data, index) => {
            return (
              <div key={index} className="flex flex-col min-w-[68rem]">
                <div className="text-[6rem] w-full pl-[25rem] tracking-[1rem]">
                  {data.title}
                </div>
                <div className="flex gap-[4rem]">
                  <img className="min-w-[33rem] h-[10rem]" src={data.img} />
                  <div className="min-w-[18rem] text-[0.8rem] leading-[30px] self-end">
                    {data.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full mt-[10rem] flex justify-between">
          <div className=" pl-8">
            <CustomButton text={"DISCOVER"} color={"black"} />
          </div>
          <div className="flex gap-[3rem]">
            <div>
                PREV

            </div>
            <div>NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
