import React from "react";
import Benefit1 from "../../public/newlanding/benefit1.jpg";
import Benefit2 from "../../public/newlanding/benefits2.webp";
import Benefit3 from "../../public/newlanding/benefit3.webp";
import Benefit4 from "../../public/newlanding/benefit4.webp";
import BenefitImage from "../../public/newlanding/benefitimg.jpg";
import Tick from "../../public/newlanding/tick.svg";
import Image from "next/image";
import Reusabletext from "./reusabletext";

// bottom rating images
import GoogleRating from "../../public/newlandinghero/google.png";
import TrustPilot from "../../public/newlandinghero/trust.png";
import Link from "next/link";

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
      img: Benefit2,
      title: "Unlock 200% Value for Your Modular Kitchen",
      subtitle: [
        " Optimize Your Modular Kitchen",
        " Double Your Kitchen's Potential",
        "Unlock Twice the Kitchen Value",
      ],
    },
    {
      img: Benefit3,
      title: "Experience Waterproof Perfection in Modular Kitchen ",
      subtitle: [
        "Your Ideal Modular Kitchen",
        " Unique Kitchen Creations",
        "Unleash Your Style",
      ],
    },
    {
      img: Benefit4,
      title: "Personalize Every Element of Your Modular Kitchen",
      subtitle: [
        "Personalization for Perfection",
        " Limitless Customization",
        "Customization at Its Finest",
      ],
    },
  ];

  const review = [
    {
      title: "Google",
      rating: "4.5/5|1237 reviews",
    },
    {
      title: "Facebook",
      rating: "4.5/5|1237 reviews",
    },
    {
      title: "Trust Pilot",
      rating: "4.5/5|1237 reviews",
    },
  ];
  return (
    <div
      id="landingbenefits"
      className="w-full flex justify-center text-[#270405] "
    >
      <div className="w-[90%] max-w-[1920px] flex flex-col gap-[8rem] py-20">
        {/* <div className="base:flex lg:hidden flex-col gap-8">
          {review.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-3  p-4">
                <div className="font-semibold text-[1.3rem]">{data.title}</div>
                <div className="font-semibold text-[1rem]">{data.rating}</div>
              </div>
            );
          })}
          
        </div> */}
        {/* rating images  */}
        <div className="lg:hidden base:visible gap-9 z-[99999]  ">
          <Image src={GoogleRating} className="w-[min(62vw,250px)] " />
          <Image src={TrustPilot} className="w-[min(62vw,250px)] " />
        </div>
        {/* section */}
        <div className="flex flex-col gap-3">
          <Reusabletext text={"Benefits"} />
          <div className="flex justify-between lg:grid grid-cols-4 gap-[4vw] base:overflow-x-scroll lg:overflow-hidden">
            {benefitContent.map((data, index) => {
              return (
                <div key={index} className="flex min-w-[18rem] flex-col gap-7">
                  <Image
                    className="w-full object-cover lg:h-[min(25rem,25vw)]"
                    src={data.img}
                  />
                  <div className="font-semibold base:text-[1.5rem] lg:text-[min(1.5vw,1.5rem)]">
                    {data.title}
                  </div>
                  <div className="flex flex-col gap-3">
                    {data.subtitle.map((data, idx) => {
                      return (
                        <div key={idx} className="flex gap-4">
                          <Image src={Tick} />
                          <p className="base:text-[1rem] lg:text-[min(1vw,1rem)]">
                            {data}
                          </p>
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
          <Image
            className="rounded-md base:w-full lg:w-[33%] w-full"
            src={BenefitImage}
          />
          <div className="h-full flex flex-col gap-8 lg:gap-0 lg:w-[55%] justify-between">
            <div className="text-right lg:text-[min(1.5vw,1.5rem)] font-medium">
              Step into the realm of kitchen opulence with Opuvlence. Our
              passion lies in creating extraordinary modular kitchens that
              embody sophistication and style. From personalized designs to
              meticulous craftsmanship, we strive to exceed your expectations.
              Elevate your culinary space and unlock the true essence of luxury.
              Discover the extraordinary world of Opuvlence and embrace a
              kitchen that is truly one-of-a-kind.
            </div>
            <div className="flex w-[100%] lg:gap-20 justify-between lg:justify-end">
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">
                  10+
                </div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Years
                  <br /> Experience
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">
                  427
                </div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Homes
                  <br /> Designed
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="base:text-[3rem] lg:text-[3vw] font-medium text-[#270405]">
                  16
                </div>
                <div className="text-right base:text-[1.3rem] leading-5">
                  Awards
                  <br /> Gained
                </div>
              </div>
            </div>

            <Link href={"#form"} className="w-full justify-end flex pt-9">
              <button className="bg-[#270405] text-[#F6EBDD] px-12 py-3 w-fit base:text-[1.3rem] lg:text-[min(1.1vw,1.1rem)] rounded-[4px]">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
