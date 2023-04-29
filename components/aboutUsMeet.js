import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

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
      <div className="font-semibold italic text-center w-[50%]">
        {designation}
      </div>
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
      <div className="w-[95%] max-w-[1920px] flex flex-col">
        <div className=" lg:grid grid-cols-12">
          <div className="col-start-1 col-end-11  flex flex-col z-50">
            <div
              className={`lg:hidden base:text-[2.8rem] lg:text-[4.8vw] tracking-[0.5rem] base:leading-[65px] lg:leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              meet the team behind the magic
            </div>
            <div
              className={`lg:inline-block base:hidden base:text-[2.8rem] lg:text-[4.8vw] tracking-[0.5rem] base:leading-[65px] lg:leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              Meet the creative minds behind our designs - our team
            </div>
          </div>
        </div>

        {/* desktop testimonial */}

        <div className="w-full px-[4rem] gap-[5.7rem] hidden lg:grid grid-cols-4 mt-[4rem]">
          {testimonial.map((data,index)=>{
            return(
              <div key={index} className="flex flex-col   ">
                <a href="/testimonialsingle">
                
                <img className="rounded-t-full self-center " src="/testimonialdemo.jpg" />
                <div className="font-medium text-[1.5rem] mt-2">{data.name}</div>
                <div className="font-normal italic text-[1.3rem]">{data.designation}</div></a>

              </div>
            )
          })}
        </div>

        {/* mobile testimonial */}
        <div className="flex w-full justify-center">
          <div className="base:grid gap-5 w-full lg:hidden grid-cols-2">
            {testimonial.map((data, index) => {
              return (
                <div key={index}>
                  <a>
                  <OurTeamSingle
                    name={data.name}
                    image={"/testimonialtesting.jpg"}
                    designation={data.designation}
                  /></a>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="hidden lg:flex">
          <img src="/dreamteam.svg" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsMeet;