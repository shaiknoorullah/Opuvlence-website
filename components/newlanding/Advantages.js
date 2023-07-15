import React from "react";
import Image from "next/image";

// importing images
// import Right from "../public/embrace/right.png";
import Right from "../../public/embrace/landingright.png";
import Wrong from "../../public/embrace/landingwrong.png";

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
    <div className="flex flex-col">
      <div className="text-[min(1.8vw,35px)] pb-[min(8.1vw,170px)]"></div>
      <div className="flex flex-col gap-[min(4vw,80px)]">
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
    <div className="w-[min(20.8vw,400px)] flex flex-col justify-center items-center rounded-lg bg-[#270405] p-[20px]">
      {/* <Image src={Right} /> */}
      <div className="text-[min(1.8vw,35px)] pb-[min(4.5vw,86.4px)]">
        Opuvlence
      </div>
      <div className="flex flex-col gap-[min(4.5vw,86.4px)] ">
        {tableContent.map((item, index) => {
          return (
            <div className="ite">
              <Image key={index} src={item.img1} />
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
      <div className="flex flex-col  gap-[min(4.5vw,86.4px)] ">
        {tableContent.map((item, index) => {
          return (
            <div className="ite">
              <Image key={index} src={item.img1} />
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

        <div className="text-[#270405] font-bold text-[min(2.3vw,45px)]">
          Advantages
        </div>
        <div className="flex w-full  justify-between">
          {/* <div className="mt-[30px]"> */}
          <Benefits />
          {/* </div> */}

          <Righttick />
          <WrongTick />

          <div>{/* <Righttick /> */}</div>
        </div>
        {/* for mobile */}
        {/* <BaseEmbrace /> */}
      </div>
    </div>
  );
};

export default Advantages;
