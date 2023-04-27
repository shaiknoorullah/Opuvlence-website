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

const OurTeamSingle = ({ name, image, designation }) => {
  return (
    <div className="flex gap-1 rounded-tl-[10rem] justify-center items-center flex-col">
      <img className="w-full rounded-tl-[2rem] " src={image} />
      <div className="font-bold">{name}</div>
      <div className="font-semibold italic text-center w-[50%]">{designation}</div>
    </div>
  );
};

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
        <div className=" lg:grid grid-cols-12">
          <div className="col-start-1 col-end-11  flex flex-col z-50">
            <div
              className={`base:text-[2.8rem] lg:text-[4.8vw] tracking-[0.5rem] base:leading-[65px] lg:leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              meet the team behind the magic
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="base:grid gap-5 w-full lg:hidden grid-cols-2">
            {testimonial.map((data,index)=>{
              return(
                <div key={index}>
                  <OurTeamSingle
              name={data.name}
              image={"/testimonialtesting.jpg"}
              designation={data.designation}
            />

                </div>
              )
            })}
          
          </div>
        </div>

        <div className={`hidden lg:flex flex-row py-[3rem] self-end`}>
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

        <div className="hidden lg:flex">
          <img src="/dreamteam.svg" />
        </div>

        <div className={` hidden lg:flex flex-row py-[3rem] self-start`}>
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
