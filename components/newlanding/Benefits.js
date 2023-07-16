import React from "react";
import Benefit1 from "../../public/newlanding/benefit1.jpg";
import BenefitImage from "../../public/newlanding/benefitimg.jpg";
import Tick from "../../public/newlanding/tick.svg";
import Image from "next/image";

const Benefits = () => {
  const benefitContent = [
    {
      img: Benefit1,
      title: "Tailored Modular Kitchens for Indian Homes",
      subtitle: [
        "Personalization for Perfection",
        " Limitless Customization",
        "Customization at Its Finest",
      ],
    },
    {
      img: Benefit1,
      title: "Tailored Modular Kitchens for Indian Homes",
      subtitle: [
        "Personalization for Perfection",
        " Limitless Customization",
        "Customization at Its Finest",
      ],
    },
    {
      img: Benefit1,
      title: "Tailored Modular Kitchens for Indian Homes",
      subtitle: [
        "Personalization for Perfection",
        " Limitless Customization",
        "Customization at Its Finest",
      ],
    },
    {
      img: Benefit1,
      title: "Tailored Modular Kitchens for Indian Homes",
      subtitle: [
        "Personalization for Perfection",
        " Limitless Customization",
        "Customization at Its Finest",
      ],
    },
  ];
  return (
    <div className="w-full flex justify-center text-[#270405] ">
      <div className="w-[90%] flex flex-col gap-[8rem] py-20">
        <div className="flex flex-col gap-8">
          <h1>Benefits</h1>
          <div className="flex justify-between gap-[4vw] base:overflow-x-scroll lg:overflow-hidden">
            {benefitContent.map((data, index) => {
              return (
                <div key={index} className="flex min-w-[18rem] flex-col gap-7">
                  <Image className="w-full" src={data.img} />
                  <div className="font-semibold base:text-[1.5rem] lg:text-[min(1.5vw,1.5rem)]">
                    {data.title}
                  </div>
                  <div className="flex flex-col gap-3">
                    {data.subtitle.map((data, idx) => {
                      return (
                        <div key={idx} className="flex gap-4">
                          <Image src={Tick} />
                          <p className="base:text-[1rem] lg:text-[min(1.1vw,1.2rem)]">{data}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* second section */}
        <div className="flex lg:flex-row base:flex-col w-full lg:gap-0 base:gap-12  justify-between">
          <Image className="rounded-md base:w-full lg:w-[33%] w-full" src={BenefitImage} />
          <div className="h-full flex flex-col gap-8 lg:gap-0 lg:w-[40%] justify-between">
            <div className="text-right lg:text-[min(1.5vw,1.5rem)] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis
              nostrud enim ad nostrud enim ad minim veniam exercitation
            </div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">10+</div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Years
                  <br /> Experience
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">427</div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Homes
                  <br /> Designed
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">16</div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Awards
                  <br /> Gained
                </div>
              </div>
            </div>

            <div className="w-full justify-end flex pt-9">
              <button className="bg-[#270405] text-[#F6EBDD] px-10 py-2 w-fit base:text-[1.3rem] lg:text-[min(1vw,1rem)] rounded-[4px]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
