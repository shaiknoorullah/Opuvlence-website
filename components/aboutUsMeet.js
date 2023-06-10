/** @format */

import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
// importing images
import Ceo from "../public/team/ceo.webp";
import CenterHead from "../public/team/centerHead.webp";
import CustomerHead from "../public/team/customerHead.webp";
import CustomerRelation from "../public/team/customerRelation.webp";
import Design from "../public/team/designsupervisor.webp";
import Manager from "../public/team/manager.webp";
import Marketing from "../public/team/marketing.webp";
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

const OurTeamSingle = ({ name, picture, designation }) => {
  return (
    <div className="flexgap-1 rounded-tl-[10rem] justify-center items-center flex-col">
      <Image
        alt="pic"
        className="w-full rounded-tl-[10vw] base:h-[70vw]  object-cover"
        src={picture}
      />
      <div className={`${poppinsSemibold.className} text-black `}>{name}</div>
      <div className={`${poppinsRegular.className}text-black italic  w-[80%]`}>
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
      name: "Mr. Shaik Fauwaz",
      picture: Ceo,
      designation: "CEO(OPUVLENCE)",
    },
    {
      name: "Ms. Supriya Satyam",
      picture: CustomerHead,
      designation: "CUSTOMER EXCELLENCE HEAD",
    },
    {
      name: "Mr. Faizan ",
      picture: Manager,
      designation: "R&L MANAGER",
    },
    {
      name: "Ms. Ayman Faruq",
      picture: Marketing,
      designation: "MARKETING HEAD",
    },
    {
      name: "Mr. Shaik Suhail",
      picture: Design,
      designation: "DESIGN SUPERVISOR",
    },
    {
      name: "Mr. Shaik Farouq",
      picture: CustomerRelation,
      designation: "CUSTOMER RELATION",
    },
    {
      name: "Mr. Pranav Raykar",
      picture: CenterHead,
      designation: "CENTER HEAD",
    },
    // {
    //   name: "S JYOTI KONDADA ",
    //   designation: "DESIGNER",
    // },
    // {
    //   name: "AYMAN FARUQ",
    //   designation: "S.DESIGNER",
    // },
    // {
    //   name: "SHAIK FAROUK",
    //   designation: "S.DESIGNER",
    // },
    // {
    //   name: "SHABAB BASHEER",
    //   designation: "S.DESIGNER",
    // },
  ];

  return (
    <div className="w-full flex justify-center py-[8rem] relative">
      <div className="w-[95%] text-black max-w-[1920px] flex flex-col">
        <div className=" lg:grid grid-cols-12">
          <div className="col-start-1 col-end-11 flex flex-col z-50">
            <div
              className={`lg:hidden base:text-[2.2rem] md:text-[6vw] md:w-[60vw] lg:text-[min(4.8vw)] tracking-[0.5rem] base:leading-[65px] lg:leading-[130px] ${golden.className} capitalize leading-[7rem] `}
            >
              Meet the team behind the magic
            </div>
            <div
              className={`lg:inline-block base:hidden base:text-[2.8rem] lg:text-[min(4.8vw,6rem)]  tracking-[0.5rem] base:leading-[65px] lg:leading-[min(6vw,130px)] ${golden.className} capitalize leading-[7rem] `}
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
                <div>
                  <Image
                    className="rounded-t-full h-[30rem]  object-fill scale-10"
                    alt="profession"
                    src={data.picture}
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
          <div className="base:grid base:gap-5 md:gap-15 lg:gap-5 w-full lg:hidden grid-cols-2">
            {testimonial.map((data, index) => {
              return (
                <div key={index}>
                  <div>
                    <OurTeamSingle
                      name={data.name}
                      picture={data.picture}
                      designation={data.designation}
                    />
                  </div>
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
                <Image className="object-cover h-full w-full" src={image} />
              </div>
              <div className="flex  text-black flex-col base:py-3 lg:my-[4rem] lg:pl-[3rem] lg:w-[75%]">
                <div className="w-[16rem] text-[3.2rem] leading-[4rem]">
                  {name}
                </div>
                <div className="flex text-[1.5rem] pt-3">{designation}</div>
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
