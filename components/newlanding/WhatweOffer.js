import React from "react";
import Image from "next/image";
// import Whatimg from "../../public/landingimages/landingsecurity.png";
import Whatimg from "../../public/landingimages/whatweoffer/landingsecurity.png";
import Chimney from "../../public/landingimages/whatweoffer/chimney.png";
import Water from "../../public/landingimages/whatweoffer/water.png";
import Months from "../../public/landingimages/whatweoffer/months.png";
import Customization from "../../public/landingimages/whatweoffer/customization.png";
import German from "../../public/landingimages/whatweoffer/german.png";
import Reusabletext from "./reusabletext";

const WhatweOffer = () => {
  const What = [
    {
      id: "1",
      image: Whatimg,
      title: "10 Years of Security",
      text: "Enjoy a 10-Year Warranty on Our Modular Kitchens. With quality craftsmanship and top-notch materials, we stand behind our products, ensuring lasting satisfaction for a decade and beyond.",
    },
    {
      id: "2",
      image: Chimney,
      title: "Complimentary  Chimney",
      text: "Enjoy the Perk of a Complimentary Chimney! Upgrade your kitchen experience with our exclusive offer. Get a FREE chimney installation when you design your dream modular kitchen with us. Don't miss out",
    },
    {
      id: "3",
      image: Water,
      title: "Water proof",
      text: " Our Modular Kitchens are crafted with top-notch waterproof materials, ensuring durability and protection against moisture. Experience peace of mind knowing your kitchen is resilient and built to withstand ",
    },
    {
      id: "4",
      image: Months,
      title: "3 months maintanance ",
      text: "We offer 3 months of complimentary maintenance to ensure your modular kitchen remains in pristine condition. Experience hassle-free living and let our team take care of your kitchen's upkeep.",
    },
    {
      id: "5",
      image: Customization,
      title: "customization",
      text: " Design a modular kitchen that reflects your unique taste. From materials and finishes to layouts, we empower you to personalize every element, ensuring a kitchen that truly embodies your vision.",
    },
    {
      id: "6",
      image: German,
      title: "german hardware(hettich)",
      text: "German Hardware Excellence. Our modular kitchens boast precision engineering and superior functionality with Hettich's renowned products. Elevate your kitchen experience with the best in the industry",
    },
  ];

  return (
    <div id="whatweoffer" className="w-full flex justify-center bg-[#270405] pb-20 lg:my-[100px]">
      <div className="w-[90%] bg-[#270405] mt-[min(2.60vw,50px)]  flex flex-col justify-center items-center py-[30px]">
     <div className="text-center pb-5">
      <Reusabletext text={"What We Offer"} white />

     </div>

        <div className=" grid  md:grid-cols-3 gap-[min(7.8vw,150px)]  ">
          {What.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col  items-center py-[min(4.3vw,84px)] px-[min(2.8vw,54px)] gap-[1.5rem] md:w-[min(22.03vw,423px)] border rounded-sm "
              >
                <Image
                  src={item.image}
                  className="base:w-[min(15vw,70px)] md:w-[min(5.4vw,104px)] -mt-[min(7.2vw,120px)]"
                />
                <div className="text-[#F6EBDD] font-[Gilroy] base:text-[1.5rem] lg:text-[min(1.2vw,25px)] font-[600]">
                  {item.title}
                </div>
                <div className="text-[#F6EBDD] font-[Gilroy] lg:text-[min(1.04,20px)] text-center ">
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
