import Image from "next/image";
import React, { useEffect, useState } from "react";
import BgImage from "../../public/newlanding/herobg.webp";
import Logo from "../../public/logoLight.png";

// import Logo from "../../public/newlanding/logo.png"

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextRefresh = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 3
      );
      const timeLeft = nextRefresh.getTime() - now.getTime();

      setCountdown({
        days: String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(
          2,
          "0"
        ),
        minutes: String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex base:text-[1.9rem] base:mt-2 md:mt-0 lg:text-[min(3vw,42px)]">
      <div className="lg:text-[#FF3333] base:text-[#ffffff]">
        <span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mr-1 font-[250]  rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
          {countdown.days}
        </span>
        :
      </div>
      <div className="lg:text-[#FF3333] base:text-[#ffffff]">
        <span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mx-1 font-[250] rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
          {countdown.hours}
        </span>
        :
      </div>
      <div className="lg:text-[#FF3333] base:text-[#ffffff]">
        <span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mx-1 font-[250] rounded-md lg:border-[#FF3333] base:border-[#ffffff]  p-3  lg:p-[min(1vw,1rem)]">
          {countdown.minutes}
        </span>
        :
      </div>
      <div>
        <span className="border lg:text-[#FF3333] base:text-[#ffffff] font-[250] mx-1 rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
          {countdown.seconds}
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
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
    <div className="  min-h-screen w-full relative flex justify-center">
      <Image
        className="w-full h-full object-cover absolute brightness-50"
        src={BgImage}
      />
      <Image className="absolute top-9 left-9" src={Logo} alt="company_logo" />

      {/* <Image className="absolute left-5 top-2" src={Logo} /> */}
      <div className="bgmobile my-11 p-6 lg:mt-0 base:mt-24 lg:w-[80%] base:w-[90%] max-w-[1920px] py-[7vw] flex flex-col text-[#F6EBDD]  justify-between">
        <div className="w-full flex lg:flex-row base:flex-col justify-between h-full z-50">
          <div className="gap-[7vw] lg:w-[50%] h-full  flex flex-col">
            <div className="flex flex-col base:gap-3 lg:gap-[min(1vw,1rem)]">
              <div className="lg:text-[min(2.6vw,2.6rem)] base:text-[2rem] lg:leading-[min(3vw,3rem)] font-bold">
                Get Your Dream Kitchen for a Fraction of the Cost + ₹40,000
                Worth of Free Appliances!
              </div>
              <div className="lg:text-[min(1.2vw,1.2rem)] lg:w-[80%]">
                Act Now and create your happily ever after in the kitchen of
                your dreams
              </div>
              <div className="lg:text-[min(1.2vw,1.2rem)] lg:w-[80%] pt-11">
                Don't Miss Out on the Ultimate Offer! Get Your Dream Kitchen
                without the High Price Tag. Enjoy a Free Modular Makeover +
                40,000 INR Worth of Appliances. Transform Your Kitchen into a
                Five-Star Oasis. Act Now, Offer Ends Soon!{" "}
              </div>
            </div>
            <div className="gap-[3vw] flex flex-col">
              <div className="timerbg py-8 base:w-[100%] lg:w-[min(65%,25rem)] lg:justify-center lg:items-center flex flex-col gap-9 lg:gap-[min(1.8vw,1.8rem)]">
                {" "}
                <CountdownTimer />
                <div className="lg:text-[min(1vw,1rem)] lg:px-5">
                  {" "}
                  Don't let your dream kitchen slip away. Get started today and claim your free appliances
                </div>
              </div>

              {/* <div className="flex flex-col gap-2">
                {" "}
                <button className="text-[#F6EBDD] bg-[#28CA6D]  base:text-[0.9rem] lg:text-[min(1vw,1rem)] w-fit base:px-12 lg:px-24 py-3 lg:flex base:hidden rounded-[4px]">
                  GET 35% DISCOUNT NOW!
                </button>
                <div className="base:text-[0.7rem] lg:text-[0.8vw]">
                  Trusted by more than 5,000 homes already.
                </div>
              </div> */}
            </div>
          </div>
          <div className=" h-full  lg:w-[min(38%,38rem)] py-[2vw]">
            {/* form */}
            <div className="formbg lg:min-h-[29rem] lg:max-h-[38rem] w-full lg:p-[2vw] h-full flex flex-col gap-2 justify-between lg:pt-14 base:pt-14">
              <div className="lg:text-[min(1.7vw,1.7rem)] lg:leading-[min(2vw,2rem)] lg:flex base:hidden font-bold">
                Limited Time Offer: Get 20% Off + Free Kitchen Design!
              </div>
              <form className="h-full flex flex-col gap-3 justify-between">
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Name</div>
                  <input className="heroinput" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Contact</div>
                  <input className="heroinput" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Locality</div>
                  <input className="heroinput" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Area (in Sqft)</div>
                  <input className="heroinput" />
                </div>
                <button className="text-[#F6EBDD] font-black bg-[#CA2828] w-full base:px-3 lg:px-6 h-[max(2.5rem,min(2.5vw,3rem))] rounded-[4px] mt-[min(1.5rem,1.5vw)] base:text-[0.7rem] lg:text-[min(1vw,1rem)] uppercase">
                claim ₹40,000 worth of free appliances
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex base:flex-col lg:flex-row gap-9 lg:justify-between pt-14">
          {review.map((data, index) => {
            return (
              <div
                key={index}
                className="heroreview text-[#270405] p-[1.2vw] flex flex-col justify-between"
              >
                <div className="base:text-[2rem] lg:text-[min(1.7vw,1.7rem)] font-medium">
                  {data.title}
                </div>
                <div className="text-[min(1vw,1rem)]">
                  Rating:<span className="font-semibold">{data.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
