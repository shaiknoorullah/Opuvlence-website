import React from "react";
import localFont from "next/font/local";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const AboutUsMeet = () => {
  const testimonial = [
    {
      name: "Abdul Ahad",
      designation: "Senior Developer",
    },
    {
      name: "Shaikh Noorullah",
      designation: "Senior Developer",
    },
    {
      name: "Abdul Ahad",
      designation: "Senior Developer",
    },
    {
      name: "Abdul Ahad",
      designation: "Senior Developer",
    },
  ];

  return (
    <div className="w-full flex justify-center py-[8rem]">
      <div className="w-[95%] flex flex-col">
        <div className=" grid grid-cols-12">
          <div className="col-start-1 col-end-11  flex flex-col z-50">
            <div
              className={`text-[4.8vw] tracking-[0.7rem] leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              Meet the creative minds behind our designs - our team
            </div>
          </div>
        </div>
        <div className={` flex flex-row py-[3rem] self-end`}>
          <div className="rounded-full ml-[-5rem] w-[20rem] h-[20rem] z-50">
            <img className="rounded-full " src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z-40">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z-30">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
        </div>


        <div>
          <img src="/dreamteam.svg" />
        </div>

        <div className={` flex flex-row py-[3rem] self-start`}>
          <div className="rounded-full  w-[20rem] h-[20rem] z-50">
            <img className="rounded-full " src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z-40">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z-30">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
          <div className=" ml-[-5rem] rounded-full w-[20rem] h-[20rem] z">
            <img className="rounded-full" src="/testimonial1.jpg" />
          </div>
        </div>
        
     
      </div>
    </div>
  );
};

export default AboutUsMeet;
