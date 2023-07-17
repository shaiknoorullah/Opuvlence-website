import React from "react";
import Reusabletext from "./reusabletext";
// import Provide from "../../public/landingImages/weprovide.png";

const Experience = () => {
  const Numbers = [
    {
      number: "01",
      title: "Expert Consultation & Design",
      description:
        "At Opuvlence, we go beyond ordinary design to create breathtaking culinary spaces that defy expectations. Our team of skilled experts meticulously crafts every detail, blending exquisite materials with innovative concepts. From personalized consultations to visionary designs, we bring your kitchen dreams to life with unparalleled elegance.",
    },
    {
      number: "02",
      title: "Tailored perfection by your modification",
      description:
        "Experience the art of customization with Opuvlence. Design your modular kitchen to perfection, tailored to your unique preferences. From premium materials to bespoke designs, create a culinary space that reflects your individuality. Discover the limitless possibilities and elevate your kitchen with Opuvlence's dedication to personalized excellence.",
    },
    {
      number: "03",
      title: "Creative Fabrication. Flawless Assembly",
      description:
        "Unleash the magic of impeccable craftsmanship and seamless integration with Opuvlence. Our artisans skillfully craft each component, meticulously assembling them into a symphony of perfection. Witness the transformative power of artful construction as your dream kitchen takes shape, creating a harmonious space that radiates beauty and functionality.",
    },
  ];

  return (
    <div className="flex flex-col base:gap-[2rem] md:justify-between ">
      {Numbers.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row base:gap-[1rem] md:gap-[2rem] "
          >
            <div className="bg-[#270405] text-[white] base:h-fit md:h-[min(3vw,40px)] md:w-[min(7.2vw,140px)] rounded-full flex items-center base:p-1 lg:p-0  place-content-center md:text-[min(1.1vw,20px)]">
              {item.number}
            </div>
            <div className="text-[#270405] flex flex-col base:gap-[0.8rem] md:gap-[min(1.041vw,20px)]">
              <h1 className="md:text-[min(2vw,27px)] font-[600] leading-[0.8rem]">
                {item.title}
              </h1>
              <p className="md:text-[min(1.1vw,20px)] font-medium capitalize text-justify">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WeProvide = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[1920px] w-[90%] base:py-[7rem] lg:py-[100px]">
        <div className="lg:w-[40%]  lg:pb-[70px]">
 <Reusabletext text={"We provide the best process experience"} />
        </div>
        <div className="w-full flex base:flex-col-reverse base:gap-[40px] md:flex-row md:gap-[min(12vw,236px)]">
          {/* left items */}

          <Experience />
          {/* image */}
          <img src="../weprovide.png" className="md:w-[min(38vw,733px)]" />
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
