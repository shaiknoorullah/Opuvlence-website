import React from "react";
import Image from "next/image";

// importing images
// desktop ticks images
import Right from "../../public/embrace/landingright.png";
import Wrong from "../../public/embrace/landingwrong.png";
// mobile ticks images
import BaseRight from "../../public/landingimages/baseright.png";
import BaseWrong from "../../public/landingimages/basewrong.png";
import Reusabletext from "./reusabletext";

const BaseAdvantage = () => {
  const opuvlence = [
    {
      id: "1",
      tittle: "Rent Collection",
      img: BaseRight,
    },
    {
      id: "2",
      tittle: "Home Maintenance",
      img: BaseRight,
    },
    {
      id: "3",
      tittle: "Best Rent as per the Market",
      img: BaseRight,
    },
    {
      id: "4",
      tittle: "More Tenant Options",
      img: BaseRight,
    },
    {
      id: "5",
      tittle: "Tenants Background Check",
      img: BaseRight,
    },
    {
      id: "6",
      tittle: "Home Interiors",
      img: BaseRight,
    },
    {
      id: "7",
      tittle: "Rental Guarantee",
      img: BaseRight,
    },
    {
      id: "8",
      tittle: "Tenant Replacement",
      img: BaseRight,
    },
    {
      id: "9",
      tittle: "Personal Relationship Manager",
      img: BaseRight,
    },
  ];
  // others array
  const other = [
    {
      id: "1",
      tittle: "Rent Collection",
      img: BaseWrong,
    },
    {
      id: "2",
      tittle: "Home Maintenance",
      img: BaseWrong,
    },
    {
      id: "3",
      tittle: "Best Rent as per the Market",
      img: BaseWrong,
    },
    {
      id: "4",
      tittle: "More Tenant Options",
      img: BaseWrong,
    },
    {
      id: "5",
      tittle: "Tenants Background Check",
      img: BaseWrong,
    },
    {
      id: "6",
      tittle: "Home Interiors",
      img: BaseWrong,
    },
    {
      id: "7",
      tittle: "Rental Guarantee",
      img: BaseWrong,
    },
    {
      id: "8",
      tittle: "Tenant Replacement",
      img: BaseWrong,
    },
    {
      id: "9",
      tittle: "Personal Relationship Manager",
      img: BaseWrong,
    },
  ];
  return (
    <div className="md:hidden base:flex  gap-[3.5vw]  flex-col lg:pt-[50px] ">
      {/* <div className="flex flex-row gap-[40px] w-[100vw]  px-3  overflow-x-scroll "> */}
      <div
        className="grid grid-cols-2 gap-[min(19vw,82px)]
      "
      >
        {/* opuvlence */}
        <div className="flex flex-col items-center gap-[20px]  text-[#270405] font-semibold rounded-[15px] py-[40px] px-[20px]">
          <div className={`text-[5.62vw] leading-[8.43vw]  `}>opuvlence</div>

          {opuvlence.map((item, idx) => {
            return (
              <div
                className="flex flex-col-reverse gap-[3.44vw] text-center  items-center"
                key={idx}
              >
                <div className="text-[3.7vw] leading-[5.74vw]  tracking-[0.01em] font-medium">
                  {item.tittle}
                </div>
                <Image src={item.img} alt="pic" />
              </div>
            );
          })}
        </div>

        {/* others */}
        <div className="flex flex-col items-center gap-[20px]   rounded-[15px] py-[40px] px-[20px]">
          <div className={`text-[5.62vw] leading-[8.43vw] text-[black] `}>
            other
          </div>
          {other.map((item, idx) => {
            return (
              <div
                className="flex flex-col-reverse justify-center gap-[3.44vw] items-center text-black"
                key={idx}
              >
                <div className="text-[3.7vw] leading-[5.74vw] text-center tracking-[0.01em] ">
                  {item.tittle}
                </div>
                <Image src={item.img} alt="pic" />
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

const Benefits = () => {
  const Advantage = [
    {
      id: "1",

      title: "30% More Space",
      text: "Redefining Access to Every Corner of Your Kitchen",
    },
    {
      id: "2",
      title: "Simplify & Elevate",
      text: "Redefining Access to Every Corner of Your Kitchen",
    },
    {
      id: "3",
      title: "Beyond Boundaries",
      text: "Redefining Access to Every Corner of Your Kitchen",
    },
    {
      id: "4",
      title: "Elevate Your Space",
      text: "Beyond Ordinary Kitchen Creations",
    },
    {
      id: "5",
      title: "Deluxe Kitchens",
      text: "200% Value in Every Corner of Your Modular Kitchen",
    },
    {
      id: "6",
      title: "Waterproof Wonders",
      text: "Elevate Your Modular Kitchen",
    },
    {
      id: "7",
      title: "The Future of Kitchen Storage",
      text: "Introducing Our Innovative Multi-purpose Cabinets",
    },
    {
      id: "8",
      title: "Optimizing Small Spaces",
      text: "Transforming Your Kitchen with Compact Solutions",
    },
    {
      id: "9",
      title: "Superior Quality Guaranteed",
      text: "Smooth and Rust-Free Channels and Drawers",
    },
    {
      id: "10",
      title: "Customize Your Dream Kitchen",
      text: "Empowering Choice from Brand to Finish",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="text-[min(1.8vw,35px)] pb-[min(8.1vw,170px)]">
        lkfnwdf/lADN
      </div>
      <div className="flex flex-col  gap-[min(4.2vw,80px)]">
        {Advantage.map((item, index) => {
          return (
            <div key={index} className="flex flex-col   text-[#270405] ">
              <div className=" text-[min(1.3vw,25px)] font-[600] font-[gilroy]">
                {item.title}
              </div>
              <div className="text-[min(1.041vw,20px)]">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Righttick = () => {
  const tableContent = [
    {
      id: "1",

      img1: Right,
    },
    {
      id: "2",

      img1: Right,
    },
    {
      id: "3",

      img1: Right,
    },
    {
      id: "4",

      img1: Right,
    },
    {
      id: "5",

      img1: Right,
    },
    {
      id: "6",

      img1: Right,
    },
    {
      id: "7",

      img1: Right,
    },
    {
      id: "8",

      img1: Right,
    },
    {
      id: "9",

      img1: Right,
    },

    {
      id: "10",

      img1: Right,
    },
  ];
  return (
    <div className="w-[min(20.8vw,400px)] flex flex-col justify-center  items-center rounded-lg bg-[#270405] ">
      {/* <Image src={Right} /> */}
      <div className="text-[min(1.8vw,35px)] text-white pb-[min(4.1vw,80px)]">
        Opuvlence
      </div>
      <div className="flex flex-col gap-[min(4.1vw,80px)] ">
        {tableContent.map((item, index) => {
          return (
            <div key={index} className="ite">
              <Image
                className="w-[min(1.9vw,38px)]"
                key={index}
                src={item.img1}
                alt="Righttick"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// wrong

const WrongTick = () => {
  const tableContent = [
    {
      id: "1",

      img1: Wrong,
    },
    {
      id: "2",

      img1: Wrong,
    },
    {
      id: "3",

      img1: Wrong,
    },
    {
      id: "4",

      img1: Wrong,
    },
    {
      id: "5",

      img1: Wrong,
    },
    {
      id: "6",

      img1: Wrong,
    },
    {
      id: "7",

      img1: Wrong,
    },
    {
      id: "8",

      img1: Wrong,
    },
    {
      id: "9",

      img1: Wrong,
    },

    {
      id: "10",

      img1: Wrong,
    },
  ];
  return (
    <div className="w-[min(20.8vw,400px)] flex flex-col justify-center items-center rounded-lg ">
      {/* <Image src={Right} /> */}
      <div className="text-[min(1.8vw,35px)] text-[#270405] pb-[min(4.1vw,80px)]">
        Other Companies
      </div>
      <div className="flex flex-col  gap-[min(4.2vw,80px)] ">
        {tableContent.map((item, index) => {
          return (
            <div key={index} className="ite">
              <Image
                className="w-[min(1.9vw,38px)]"
                key={index}
                src={item.img1}
                alt="Lefttick"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Advantages = () => {
  const tableContent = [
    {
      id: "1",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "2",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "3",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "4",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "5",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "6",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "7",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "8",

      img1: Right,
      img2: Wrong,
    },
    {
      id: "9",

      img1: Right,
      img2: Wrong,
    },

    {
      id: "10",

      img1: Right,
      img2: Wrong,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-[1920px]">
        {/* table content md to lg*/}

       <Reusabletext text={"Advantages"} />
        <div className="base:hidden md:grid grid-cols-3 place-content-center">
          {/* <div className="mt-[30px]"> */}
          <Benefits />
          {/* </div> */}

          <Righttick />
          <WrongTick />

          <div>{/* <Righttick /> */}</div>
        </div>
        <div>
          <BaseAdvantage />
        </div>
        {/* for mobile */}
        {/* <BaseEmbrace /> */}
      </div>
    </div>
  );
};

export default Advantages;
