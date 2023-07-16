import React from "react";
// import Provide from "../../public/landingImages/weprovide.png";

const Experience = () => {
  const Numbers = [
    {
      number: "01",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed don eiusmod tempor incididunt ut labore et dolore magna aliqua. Utn enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quisn nostrud enim ad nostrud enim ad minim veniam exercitation",
    },
    {
      number: "02",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed don eiusmod tempor incididunt ut labore et dolore magna aliqua. Utn enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quisn nostrud enim ad nostrud enim ad minim veniam exercitation",
    },
    {
      number: "03",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed don eiusmod tempor incididunt ut labore et dolore magna aliqua. Utn enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quisn nostrud enim ad nostrud enim ad minim veniam exercitation",
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
            <div className="bg-[#270405] text-[white] base:h-fit md:h-[min(2.08vw,40px)] md:w-[min(7.2vw,140px)] rounded-full flex items-center  place-content-center md:text-[min(1.1vw,20px)]">
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
      <div className="max-w-[1920px] w-[90%] py-[100px]">
        <div className="text-[min(2rem,45px)] font-[600] text-[#270405] lg:w-[40%]  pb-[70px]">
          We provide the best process experience
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
