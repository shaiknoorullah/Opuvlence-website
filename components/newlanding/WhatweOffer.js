import React from "react";
import Image from "next/image";
// import Whatimg from "../../public/landingimages/landingsecurity.png";
import Whatimg from "../../public/landingimages/landingsecurity.png";

const WhatweOffer = () => {
  const What = [
    {
      id: "1",
      image: Whatimg,
      title: "10 Years of Security",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud ",
    },
    {
      id: "2",
      image: Whatimg,
      title: "Complimentary  Chimney",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud  ",
    },
    {
      id: "3",
      image: Whatimg,
      title: "Water proof",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud  ",
    },
    {
      id: "4",
      image: Whatimg,
      title: "3 months maintanance ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud  ",
    },
    {
      id: "5",
      image: Whatimg,
      title: "customization",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud  ",
    },
    {
      id: "6",
      image: Whatimg,
      title: "german hardware(hettich)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis nostrud  enim ad nostrud  ",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-[#270405] my-[100px]">
      <div className="w-[90%] bg-[#270405] mt-[min(2.60vw,50px)]  flex flex-col justify-center items-center py-[30px]">
        <div className="text-[#F6EBDD] font-[Gilroy] text-[min(2.3vw,45px)] font-[600] flex justify-center pb-[min(10.4vw,200px)]">
          What We Offer
        </div>

        <div className=" grid grid-cols-3 gap-[min(7.8vw,150px)]  ">
          {What.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col  items-center py-[min(4.3vw,84px)] px-[min(2.8vw,54px)] gap-[1.5rem] w-[min(22.03vw,423px)] border rounded-sm "
              >
                <Image
                  src={item.image}
                  className="w-[min(5.4vw,104px)] -mt-[min(7.2vw,120px)]"
                />
                <div className="text-[#F6EBDD] font-[Gilroy] text-[min(1.4vw,27px)] font-[600]">
                  {item.title}
                </div>
                <div className="text-[#F6EBDD] font-[Gilroy] text-[min(1.04,20px)] text-center leading-[min(1.49vw,28px)]">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhatweOffer;
