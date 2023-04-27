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
    <div className="w-full flex lg:mt-14  justify-center relative">
      <div className="font-poppins base:w-[95%] lg:w-[95%] z-50 flex flex-col py-12">
        {/* testimonials title */}
        <div className="flex w-full base:justify-center lg:justify-start">
          <div className="lg:inline-block hidden w-[30%]"></div>

          <div className="font-[700] text-[1.2rem] text-[#A5787A] flex">
            / TESTIMONIALS
          </div>
        </div>
        {/* Lets see what our */}
        <div className="lg:w-[30%] base:text-[1.5rem] lg:text-[1.8rem] leading-[2.4rem] font-[700] pt-8">
          LETS SEE WHat OUR CUSTOMERS HAVE TO SAY
        </div>

        {/* cards desktop*/}
        <div className="pl-[9rem] hidden lg:flex gap-[4rem]">
          {cards.map((data, index) => {
            return (
              <div key={index} className="flex flex-col min-w-[68rem]">
                <div className="text-[6rem] w-full pl-[25rem] tracking-[1rem]">
                  {data.title}
                </div>
                <div className="flex gap-[4rem]">
                  <img className="min-w-[33rem] h-[10rem]" src={data.img} />
                  <div className="min-w-[18rem] text-[0.8rem] leading-[30px] self-end">
                    "{data.description}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* cards mobile */}
        <div className=" flex lg:hidden flex-col justify-center">
          <div className="text-[2.5rem] self-end justify-self-end tracking-[0.7rem] italic capitalize">
            CAROLYN
          </div>
          <div className="flex flex-col mx-6 gap-[1rem]">
            <img className="object-cover h-[10rem]" src="/testimonial.png" />
            <div className=" text-[1.3rem] self-center justify-self-center leading-[30px] ">
              Using edge cutting technology to provide extremely reliable
              service Using edge cutting technology to provide extremely
              reliable service Using edge cutting technology.
            </div>
            
          </div>
          <div className="flex self-end mt-8 gap-[3rem]">
            <div className="text-[1.4rem] italic underline ">PREV</div>
            <div className="text-[1.4rem] italic underline ">NEXT</div>
          </div>
          

          <div>

          </div>
        </div>

        <div className="w-full mt-[10rem] hidden lg:flex justify-between">
          <div className=" pl-8">
            <CustomButton text={"DISCOVER"} color={"black"} />
          </div>
          <div className="flex  gap-[3rem]">
            <div className="text-[1.4rem] italic underline ">PREV</div>
            <div className="text-[1.4rem] italic underline ">NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
