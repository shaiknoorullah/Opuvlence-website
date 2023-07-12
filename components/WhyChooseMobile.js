import React, { useState } from "react";
import localFont from "next/font/local";
import Arrow from "../public/arrowlleft.svg";
import Image from "next/image";

const poppinsExtrabold = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
});
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const poppinsSemibold = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
});
const WhyChooseMobile = () => {
  const content = [
    {
      title: "Verified Tenants with Background Checks",
      content1: [
        "Peace of mind with thorough background checks.",
        "Trustworthy individuals for your property's long-term stability.",
        "A secure selection process that safeguards your investments.",
        "Our rigorous checks guarantee responsible occupants for you.",
      ],
    },
    {
      title: "Maintainance of Interiors",
      content1: [
        "Skilled maintenance for a flawlessly maintained property interior.",
        "Ensuring your property's interior remains pristine and inviting.",
        "Dedicated maintenance for a comfortable and well-maintained living space.",
        " Experts in preserving the interior beauty of your property.",
      ],
    },
    {
      title: "Dedicated Relationship Manager",
      content1: [
        " Your dedicated relationship manager ensures exceptional client service.",
        " A dedicated relationship manager for a customized real estate experience.",
        "Your dedicated manager for a seamless and personalized journey.",
        " A dedicated relationship manager to navigate your real estate goals.",
      ],
    },
    {
      title: "On demand Repair Service",
      content1: [
        " On-demand services for swift and efficient property repairs.",
        " Quick and convenient on-demand repair solutions for your property.",
        " On-demand repair services that prioritize your property's upkeep.",
        "Count on our on-demand repair services for timely property maintenance.",
      ],
    },
    {
      title: "On Time Rental Collections",
      content1: [
        "Our on-time rental collection ensures a hassle-free experience.",
        " Timely rental collection for consistent cash flow management.",
        "On-time payments that optimize your property's financial performance.",
        "Trust us for on-time rental collection and hassle-free transactions.",
      ],
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  const handleRight = () => {
    if (activeCard == content.length - 1) {
      return;
    }
    setActiveCard(activeCard + 1);
  };
  const handleLeft = () => {
    if (activeCard == 0) {
      return;
    }
    setActiveCard(activeCard - 1);
  };

  return (
    <div className="base:flex text-black lg:hidden my-28 w-full justify-center">
      <div className="w-[95%] flex flex-col">
        {/* toptitle */}
        <div className="flex lg:justify-start base:justify-center">
          <div className="lg:flex hidden w-[30%]"></div>

          <div
            className={`${poppinsExtrabold.className} uppercase font-extrabold text-[1rem] text-[#A5787A] flex`}
          >
            <span className="inline-block text-[1rem] mr-3">/</span>
            <span className="inline-block mr-3 mt-[-3px] uppercase">
              our service / why choose us?
            </span>
          </div>
        </div>

        {/* heading */}
        <div className={`${golden.className} text-[3.4rem] my-7`}>
          why choose us?
        </div>
        <div
          className={`${poppinsSemibold.className} text-[1rem] italic ml-12`}
        >
          &quot;Using edge cutting technology to provide extremely reliable
          service Using edge cutting technology to.&quot;
        </div>

        {/* card */}
        <div
          className={`${poppinsSemibold.className} w-full mt-12 bg-[#270405] flex flex-col gap-11 items-center  justify-center py-[8rem] rounded-t-full rounded-b-full`}
        >
          <div
            className={` text-[#A35D5F] text-[1.1rem] text-center px-[0.5rem]`}
          >
            {content[activeCard].title}
          </div>
          <ul className="text-[#E3CBC6] flex flex-col text-justify items-center justify-center gap-3 px-[3.5rem] w-full">
            {/* <li>Lorem ipsum dolor sit ame consectetur </li>
            <li>Lorem ipsum dolor sit ame consectetur </li>
            <li>Lorem ipsum dolor sit ame consectetur </li>
            <li>Lorem ipsum dolor sit ame consectetur </li>
            <li>Lorem ipsum dolor sit ame consectetur </li> */}
            {/* <li>{content[activeCard].content1}</li> */}
            <li>
              {content[activeCard].content1.map((data, index) => {
                return (
                  <li key={index} className="text-left">
                    {data}
                  </li>
                );
              })}
            </li>
          </ul>
        </div>

        {/* arrow */}

        <div className="w-full flex items-center justify-center gap-2 mt-9">
          <Image className="w-[3rem]" onClick={handleLeft} src={Arrow} />
          <Image
            onClick={handleRight}
            className="rotate-180 w-[3rem]"
            src={Arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMobile;
