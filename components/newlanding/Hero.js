import Image from "next/image";
import React, { useEffect, useState } from "react";
import BgImage from "../../public/newlanding/herobg.jpg";

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
    <div className=" flex base:text-[1.9rem] base:mt-2 md:mt-0 lg:text-[min(1.8vw,35px)]">
      <div>
        <span className="border-[0.65px] text-[#ffffff] mr-1 font-[250]  rounded-md border-[#F6EBDD] p-3  lg:p-[min(0.4vw,13px)]">
          {countdown.days}
        </span>
        :
      </div>
      <div>
        <span className="border-[0.65px] text-[#F6EBDD] mx-1 font-[250] rounded-md border-[#F6EBDD] p-3  lg:p-[min(0.4vw,13px)]">
          {countdown.hours}
        </span>
        :
      </div>
      <div>
        <span className="border-[0.65px] text-[#F6EBDD] mx-1 font-[250] rounded-md border-[#F6EBDD]  p-3  lg:p-[min(0.4vw,13px)]">
          {countdown.minutes}
        </span>
        :
      </div>
      <div>
        <span className="border text-[#F6EBDD] font-[250] mx-1 rounded-md border-[#F6EBDD] p-3  lg:p-[min(0.4vw,13px)]">
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
    <div className=" min-h-screen w-full relative flex justify-center">
      <Image
        className="w-full h-full object-cover absolute brightness-50"
        src={BgImage}
      />
      <div className="bgmobile p-6 lg:mt-0 base:mt-24 lg:w-[80%] base:w-[90%] max-[1920px]: py-[7vw] flex flex-col text-[#F6EBDD]  justify-between">
        <div className="w-full flex lg:flex-row base:flex-col justify-between h-full z-50">
          <div className="gap-[7vw] lg:w-[40%] h-full  flex flex-col">
            <div className="flex flex-col base:gap-3 lg:gap-[min(1vw,1rem)]">
              <div className="lg:text-[min(2.6vw,2.6rem)] base:text-[2rem] lg:leading-[min(3vw,3rem)] font-bold">
                Transform Your Space into a Work of Art:
              </div>
              <div className="lg:text-[min(1vw,1rem)]">
                Turn Your Design Dreams into Reality. Experience Personalized
                Spaces Reflecting Your Style. Meticulous Attention to Detail.
                Discover the Transformative Power of opuvlence Hyderabad.
              </div>
            </div>
            <div className="gap-[3vw] flex flex-col">
              <div className="flex flex-col gap-9 lg:gap-[min(1vw,1rem)]">
                {" "}
                <CountdownTimer />
                <div className="lg:text-[min(1vw,1rem)]">
                  {" "}
                  Don&quot;t miss the Limited Period Offer-Hurry Up!
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {" "}
                <button className="text-[#F6EBDD] bg-[#28CA6D]  base:text-[0.9rem] lg:text-[min(1vw,1rem)] w-fit base:px-12 lg:px-24 py-3 rounded-[4px]">
                  GET 35% DISCOUNT NOW!
                </button>
                <div className="base:text-[0.7rem] lg:text-[0.8vw]">
                  Trusted by more than 5,000 homes already.
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full  lg:w-[min(33%,33rem)] py-[2vw]">
            {/* form */}
            <div className="formbg lg:min-h-[35rem] w-full lg:p-[2vw] h-full flex flex-col gap-2 justify-between">
              <div className="lg:text-[min(1.7vw,1.7rem)] lg:leading-[min(2vw,2rem)] font-bold">
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
                  <div className="herolabel">Name</div>
                  <input className="heroinput" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Name</div>
                  <input className="heroinput" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <div className="herolabel">Name</div>
                  <input className="heroinput" />
                </div>
                <button className="text-[#F6EBDD] bg-[#28CA6D] w-full px-10 h-[max(2.5rem,min(2.5vw,3rem))] rounded-[4px] uppercase">
                  let&quot;s do this!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex base:flex-col lg:flex-row gap-9 lg:justify-between">
          {review.map((data, index) => {
            return (
              <div key={index} className="heroreview text-[#270405] p-[1.2vw] flex flex-col justify-between">
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
