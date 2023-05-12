/** @format */

import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

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

const OurTeamSingle = ({ name, image, designation }) => {
  return (
    <div className="flexgap-1 rounded-tl-[10rem] justify-center items-center flex-col">
      <img className="w-full rounded-tl-[10vw] " src={image} />
      <div className={`${poppinsSemibold.className} text-black `}>{name}</div>
      <div
        className={`${poppinsRegular.className}text-black italic text-center w-[50%]`}
      >
        {designation}
      </div>
    </div>
  );
};

const AboutUsMeet = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setname] = useState();
  const [designation, setdesignation] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();

  const testimonial = [
    {
      name: "HIBA ISHTIAQ",
      designation: "OPERATIONS MANAGER",
    },
    {
      name: "SONALI SINGH",
      designation: "DESIGN MANAGER",
    },
    {
      name: " SUPRIYA SATYAM",
      designation: "BUSINESS MANAGER",
    },
    {
      name: " ARAVINDH G",
      designation: " J.DESIGNER",
    },
    {
      name: " ASHRITH V",
      designation: "S. DESIGNER",
    },
    {
      name: "SUHAIL SHAIK",
      designation: "DESIGNER",
    },
    {
      name: "SALEEM MAJEED",
      designation: "S. DESIGNER",
    },
    {
      name: "S JYOTI KONDADA ",
      designation: "DESIGNER",
    },
    {
      name: "AYMAN FARUQ",
      designation: "S.DESIGNER",
    },
    {
      name: "SHAIK FAROUK",
      designation: "S.DESIGNER",
    },
    {
      name: "SHABAB BASHEER",
      designation: "S.DESIGNER",
    },
  ];

  return (
    <div className="w-full flex justify-center py-[8rem] relative">
      <div className="w-[95%] text-black max-w-[1920px] flex flex-col">
        <div className=" lg:grid grid-cols-12">
          <div className="col-start-1 col-end-11 flex flex-col z-50">
            <div
              className={`lg:hidden base:text-[2.8rem] lg:text-[min(4.8vw)] tracking-[0.5rem] base:leading-[65px] lg:leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              meet the team behind the magic
            </div>
            <div
              className={`lg:inline-block base:hidden base:text-[2.8rem] lg:text-[min(4.8vw,6rem)] tracking-[0.5rem] base:leading-[65px] lg:leading-[min(6vw,130px)] ${golden.className} capitalize leading-[7rem] `}
            >
              Meet the creative minds behind our designs - our team
            </div>
          </div>
        </div>

        {/* desktop testimonial */}

        <div className="w-full px-[4rem] gap-[5.7rem] hidden lg:grid grid-cols-4 mt-[4rem]">
          {testimonial.map((data, index) => {
            return (
              <div key={index} className="flex flex-col  cursor-pointer  ">
                <div
                  onClick={() => {
                    setname(data.name);
                    setdesignation(data.designation);

                    setShowModal(true);
                  }}
                >
                  <img
                    className="rounded-t-full self-center "
                    src="/testimonialdemo.jpg"
                  />
                  <div className="font-medium text-[1.5rem] mt-2">
                    {data.name}
                  </div>
                  <div className="font-normal italic text-[1.3rem]">
                    {data.designation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* mobile testimonial */}
        <div className="flex w-full mt-16 justify-center">
          <div className="base:grid gap-5 w-full lg:hidden grid-cols-2">
            {testimonial.map((data, index) => {
              return (
                <div key={index}>
                  <Link passHref href="/testimonialsingle">
                    <OurTeamSingle
                      name={data.name}
                      image={"/testimonialtesting.jpg"}
                      designation={data.designation}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className={
            showModal
              ? ` absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-10 z-[1000] flex justify-center items-center `
              : `hidden`
          }
          style={{ overflowY: "hidden" }}
        >
          <div className="base:w-[95%] lg:w-[80%] px-16 pt-8 flex flex-col justify-center bg-white rounded text-black relative">
            <div className=" base:py-12 lg:py-4 flex lg:flex-row base:flex-col">
              {/* image section */}

              <div className="base:w-[65%] lg:w-[25%]">
                <img className="cover w-full" src="testimonial.jpg" />
              </div>
              <div className="flex  text-black flex-col base:py-3 lg:my-[4rem] lg:pl-[3rem] lg:w-[75%]">
                <div className="w-[16rem] text-[3.2rem] leading-[4rem]">
                  {name}
                </div>
                <div className="flex text-[1.5rem] pt-3">
                 {designation}
                </div>
                <div className="border border-black w-full base:my-6 lg:my-6"></div>
                <div className="text-[1.3rem] leading-[2rem]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem
                  ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                  consectetur adipiscing elit Ut et massa mi. Aliquam in
                  hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
                  consectetur Lorem ipsum dolor sit amet consectetur adipiscing
                  elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                  sitLorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                  sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
                  in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
                  consectetur Lorem ipsum dolor sit amet consectetur adipiscing
                  elit Ut et massa mi. Aliquam in hendrerit urna.
                </div>
              </div>
              <button
                className="absolute top-4 right-4 bg-[#270405] hover:bg-black text-white font-bold py-2 px-4 w-fit rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsMeet;
