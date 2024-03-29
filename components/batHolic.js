/** @format */

import react from "react";
// import CustomButton from "./section/customButton";
import localFont from "next/font/local";
import CustomButton from "./section/customButton";
import Image from "next/image";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

import Arrow from "../public/Vectorwhite.png";

// for LG
const Pluto = () => {
  const elements = [
    {
      picture: "/rectangle229.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque siLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitt",
    },
    {
      picture: "/rectangle230.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque siLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitt",
    },
  ];
  return (
    <div className="flex flex-col 3xl:gap-[76px] lg:gap-[3.95vw]">
      {elements.map((item, index) => {
        return (
          <div key={index} className="">
            <div
              className={`flex 3xl:gap-[73px] lg:gap-[3.802vw]  ${
                index == 1 ? "lg:flex-row-reverse " : "lg:flex-row"
              }`}
            >
              <img
                src={item.picture}
                className="3xl:w-[526px] lg:w-[27.39vw] 3xl:h-[374px] lg:h-[19.47vw]"
              ></img>
              <div className="3xl:w-[1067px] lg:w-[55.57vw]  3xl:h-[360px]  lg:h-[18.75vw]  3xl:text-[22px] lg:text-[1.145vw] 3xl:leading-[40px] lg:leading-[2.0833vw] tracking-[10%]  text-[#A5787A] flex  items-center text-justify">
                {item.discription}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
// FOR Base
const BasePluto = () => {
  const baseelements = [
    {
      pic: "/casestudiesmobile.png",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit",
    },
    {
      pic: "/casestudiesmobilescnd.png",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit",
    },
  ];
  return (
    <div className="flex flex-col gap-[17px] md:gap-[34px]">
      {baseelements.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="flex flex-col gap-[17px] md:gap-[30px] ">
              <img src={item.pic} className="w-[86.45vw]"></img>
              <div className="text-[#A5787A] text-[2.43vw] md:text-[2.34vw] md:leading-[3.79vw] font-normal leading-[3vw]">
                {item.info}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Batholic = () => {
  const images = [
    "Rectangle24.png",
    "Rectangle25.png",
    "Rectangle26.png",
    "Rectangle27.png",
    "Rectangle28.png",
  ];
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[95%] max-w-[1920px] 3xl:pt-[105px] lg:pt-[5.46vw]">
        <div className=" flex base:flex-col lg:flex-row 3xl:gap-[33.97px] lg:gap-[1.7692vw]">
        

          <div className="flex  flex-col base:gap-[20px] 3xl:gap-[50px] lg:gap-[2.60vw] base:-[] base:pl-[3.125vw] base:pr-[3.125vw] lg:p-[0px]">
            <div className="large-image">
              <img
                src={images[0]}
                alt="Large Image"
                layout="responsive"
                // width={1084}
                // height={646}
                className="3xl:w-[1084px] 3xl:h-[646px] lg:w-[56.45vw] lg:h-[33.64vw]"
              />
            </div>
            <div className="flex flex-row base:gap-[4.5vw] 3xl:gap-[25.51px] lg:gap-[1.32vw] small-images">
              {images.slice(1).map((image, index) => (
                <div key={index} className="small-image">
                  <img
                    src={image}
                    alt={`Small Image ${index + 1}`}
                    layout="responsive"
                    // width={180.49}
                    // height={107.56}
                    className="3xl:w-[180.49px] 3xl:h-[107.56px] lg:w-[9.40vw] lg:h-[5.60vw]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="base:px-[6.25vw] base:pt-[6.25vw] md:px-[3vw]  lg:p-[0px] flex flex-col base:gap-[6px] 3xl:gap-[62px] lg:gap-[3.22vw]">
            <div
              className={`base:text-[7.81vw] base:leading-[10.68vw] base:tracking-[0.175em] md:text-[4.60vw] md:w-[32.5vw] md:leading-[6.35vw] 3xl:w-[509px] lg:w-[26.51vw] 3xl:text-[72px] lg:text-[3.75vw] 3xl:leading-[98.5px] lg:leading-[5.130vw] tracking-[17.5%] font-normal italic align-middle uppercase text-black ${golden.className}`}
            >
              Fluidic Designs
            </div>
            <div className="base:text-[3.43vw] base:leading-[5.625vw] md:text-[2.34vw] md:leading-[3.79vw] 3xl:w-[499px] lg:w-[25.989vw] 3xl:text-[22px] lg:text-[1.14vw] 3xl:leading-[40px] lg:leading-[2.083vw] tracking-[10%] font-normal lg:italic align-middle  text-[#A5787A] 3xl:pl-[100px] lg:pl-[3vw]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor
              sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit
            </div>
          </div>
        </div>
        {/* lg-component */}
        <div className="base:hidden lg:flex 3xl:pt-[85px]  3xl:pl-[102px] 3xl:pr-[152px] 3xl:pb-[79px] lg:pt-[4.42vw] lg:pl-[5.312vw] lg:pr-[7.91vw] lg:pb-[4.114vw]">
          <Pluto />
        </div>
        {/* {base-comp} */}
        <div className="lg:hidden p-[20px]">
          <BasePluto />
        </div>
        <div className="pl:[3vw] lg:pl-[128px] pb-14">
          <CustomButton
            text={"CONTACT US"}
            color={"black"}
            href={"/#contact"}
          />
        </div>
      </div>
    </div>
  );
};
export default Batholic;
