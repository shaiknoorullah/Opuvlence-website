import React from "react";
import Image from "next/image";
import localFont from "@next/font/local";
// importing images
import Right from "../public/embrace/right.png";
import Wrong from "../public/embrace/wrong.png";
// images for base
import BaseRight from "../public/embrace/rightbase.png";
import BaseWrong from "../public/embrace/wrongbase.png";

import { wrap } from "gsap";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const poppinsExtrabold = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
});
const poppinsRegular = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
});
const poppinsMedium = localFont({
  src: "../styles/font/poppins/Poppins-Medium.woff2",
});
const poppinsSemibold = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
});

// for base
const BaseEmbrace = () => {
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
  const localBrokers = [
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
  const other = [
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
  return (
    <div className="md:hidden base:flex  gap-[3.5vw]  flex-col pt-[50px] ">
      <div
        className={`uppercase text-[#A5787A] text-[min(3.75vw,20px)] px-3  leading-[5.62vw] ${poppinsExtrabold.className}`}
      >
        / our service / unmatched perfection
      </div>
      <div
        className={`uppercase text-[min(10.88vw,45px)] leading-[min(14vw,60px)] px-3 tracking-[0.05em] w-[80vw] text-[black] ${golden.className} `}
      >
        unmatched property management
      </div>
      <div
        className={` pl text-black ${poppinsMedium.className}  italic text-[min(3.28vw,18px)] w-[vw] pl-[19.5vw]  `}
      >
        Efficiently connect landlords and tenants with our comprehensive rental
        and lease services, delivering seamless experiences and satisfying
        accommodations.
      </div>
      <div
        className="flex flex-row gap-[40px] w-[100vw]  px-3  overflow-x-scroll "
        // style={{ overflowX: "scroll" }}
      >
        {/* opuvlence */}
        <div className="flex flex-col items-center gap-[20px] min-w-[59.6vw] bg-[#270405] rounded-[15px] py-[40px] px-[20px]">
          <div
            className={`text-[5.62vw] leading-[8.43vw] text-[#A35D5F] ${poppinsExtrabold.className}`}
          >
            opuvlence
          </div>

          {opuvlence.map((item, idx) => {
            return (
              <div
                className="flex flex-col gap-[3.44vw] items-center"
                key={idx}
              >
                <div className="text-[3.7vw] leading-[5.74vw] text-justify tracking-[0.01em]">
                  {item.tittle}
                </div>
                <Image src={item.img} alt="pic" />
              </div>
            );
          })}
        </div>
        {/* local brockers */}
        <div className="flex flex-col items-center gap-[20px] min-w-[59.6vw] bg-[#FFF3E4] rounded-[15px] py-[40px] px-[20px]">
          <div
            className={`text-[5.62vw] leading-[7.43vw] text-[black] ${poppinsSemibold.className}`}
          >
            Local Brokers{" "}
          </div>
          {opuvlence.map((item, idx) => {
            return (
              <div
                className="flex flex-col gap-[3.44vw] items-center text-black"
                key={idx}
              >
                <div className="text-[3.7vw] leading-[5.74vw] text-justify tracking-[0.01em]">
                  {item.tittle}
                </div>
                <Image src={item.img} alt="pic" />
              </div>
            );
          })}
        </div>
        {/* others */}
        <div className="flex flex-col items-center gap-[20px] min-w-[59.6vw] bg-[#FFF3E4] rounded-[15px] py-[40px] px-[20px]">
          <div
            className={`text-[5.62vw] leading-[8.43vw] text-[black] ${poppinsSemibold.className}`}
          >
            other companies
          </div>
          {opuvlence.map((item, idx) => {
            return (
              <div
                className="flex flex-col gap-[3.44vw] items-center text-black"
                key={idx}
              >
                <div className="text-[3.7vw] leading-[5.74vw] text-justify tracking-[0.01em] ">
                  {item.tittle}
                </div>
                <Image src={item.img} alt="pic" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Embrace = () => {
  const tableContent = [
    {
      id: "1",
      tittle: "Rent Collection",
      img1: Right,
      img2: Right,
      img3: Wrong,
    },
    {
      id: "2",
      tittle: "Home Maintenance",
      img1: Right,
      img2: Wrong,
      img3: Wrong,
    },
    {
      id: "3",
      tittle: "Best Rent as per the Market",
      img1: Right,
      img2: Wrong,
      img3: Wrong,
    },
    {
      id: "4",
      tittle: "More Tenant Options",
      img1: Right,
      img2: Right,
      img3: Wrong,
    },
    {
      id: "5",
      tittle: "Tenants Background Check",
      img1: Right,
      img2: Wrong,
      img3: Wrong,
    },
    {
      id: "6",
      tittle: "Home Interiors",
      img1: Right,
      img2: Right,
      img3: Wrong,
    },
    {
      id: "7",
      tittle: "Rental Guarantee",
      img1: Right,
      img2: Wrong,
      img3: Wrong,
    },
    {
      id: "8",
      tittle: "Tenant Replacement",
      img1: Right,
      img2: Wrong,
      img3: Wrong,
    },
    {
      id: "9",
      tittle: "Personal Relationship Manager",
      img1: Right,
      img2: Right,
      img3: Wrong,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%]n max-w-[1920px]">
        {/* grid  md-lg*/}
        <div className="base:hidden  md:grid grid-cols-10 grid-rows-3 pt-[100px]">
          <div
            className={`uppercase  text-[#A5787A] row-span-full col-start-3 col-end-10 row-start-1 row-end-2  base:text-[3.55vw] md:text-[2.815vw] lg:text-[min(1.30vw,25px)]  ${poppinsExtrabold.className}`}
          >
            / OUR SERVICE / how does it work?
          </div>
          <div
            className={` uppercase row-span-full row-start-2 col-start-1 col-end-10 text-[min(3.46vw,70px)] ${golden.className} text-[black] tracking-[0.1em] leading-[min(5.8vw,112px)]`}
          >
            Embrace Opuvlence, the unrivaled choice in property management.
          </div>
          <div
            className={`row-span-full row-start-4 col-start-5 col-end-9 text-[min(1.19vw,23px)] leading-[mi(2.2vw,42.5px)] tracking-[0.1em] text-[black] ${poppinsMedium.className}`}
          >
            Efficiently connect landlords and tenants with our comprehensive
            rental and lease services, delivering seamless experiences and
            satisfying accommodations.
          </div>
        </div>
        {/* table headings md-lg */}
        <div
          className={`base:hidden md:flex justify-end w-[90%] gap-[min(4.64vw,75px)] md:pr-[30px] lg:pr-[0px]  text-black ${poppinsMedium.className} pt-[min(7.81vw,150px)] pb-[min(4.166vw,80px)]`}
        >
          <div className="row-span-full  text-[min(1.45vw,28px)] leading-[min(2.18vw,42px)] text-[#A5787A]  font-[800] uppercase">
            opuvlence
          </div>
          <div className="row-span-full  text-[min(1.30vw,25px)] leading-[min(2.08vw,40px)]">
            Other Companies
          </div>
          <div className="row-span-full text-[min(1.30vw,25px)] leading-[min(2.08vw,40px)]">
            Local Brokers
          </div>
        </div>
        {/* table content md to lg*/}
        <div className="base:hidden  md:flex flex-col gap-[min(2.86vw,55px)]">
          {tableContent.map((item, idx) => {
            return (
              <div
                className="flex flex-row items-center justify-between w-[90%]"
                key={idx}
              >
                <div
                  className={`text-[min(1.30vw,25px)] leading-[min(2.08vw,40px)] text-black ${poppinsRegular.className}`}
                >
                  {item.tittle}
                </div>
                <div className="flex gap-[min(13.75vw,264px)] ">
                  <div className="w-[min(1.14vw,30px)]  ">
                    <Image src={item.img1} alt="tick mark" />
                  </div>

                  <Image
                    src={item.img2}
                    alt="tick mark"
                    className="w-[min(1.14vw,22px)]"
                  />
                  <div className="pr-[40px]">
                    <Image
                      src={item.img3}
                      alt="tick mark"
                      className="w-[min(1.14vw,22px)]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* for mobile */}
        <BaseEmbrace />
      </div>
    </div>
  );
};

export default Embrace;
