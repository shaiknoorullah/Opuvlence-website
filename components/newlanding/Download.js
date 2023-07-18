import React from "react";
import Image from "next/image";
import DownloadImage from "../../public/landingimages/download.png";
import Reusabletext from "./reusabletext";

const Download = () => {
  return (
    <div id="download" className="w-full flex justify-center">
      <div className="w-[90%] max-w-[1920px] base:text-[#270405] lg:text-[#F6EBDD]">
        <div className="flex base:flex-col md:flex-row py-[min(5.2vw,100px)] px-[min(2.60vw,50px)] lg:bg-[#270405] gap-[min(16.14vw,310px)]">
          <div className="flex flex-col base:gap-[20px] justify-between lg:gap-[min(1.5vw,30px)]">
     <div className="base:hidden lg:flex mb-[-5rem]">   <Reusabletext text={"Download your Free Opuvlence Design Guide Now!"} white /></div> 
     <div className="base:flex lg:hidden">   <Reusabletext text={"Download your Free Opuvlence Design Guide Now!"}  /></div> 
            <div className=" font-[Gilroy] text-[min(4vw,25px)] md:text-[min(1.09vw,21px)]">
              Discover the secrets to extraordinary design with our free Design
              Guide. Packed with expert tips, this guide will empower you to
              transform your space into a stunning masterpiece. Don&quot;t miss
              out on this invaluable resource – download your free guide today
              and embark on a journey of design excellence.
            </div>
            <Image
            src={DownloadImage}
            alt="image"
            className="lg:hidden base:flex w-full"
          />
            <button className="base:bg-[#270405] base:w-fit  px-8  lg:bg-[#F6EBDD] base:text-[#F6EBDD] lg:text-[#270405] lg::w-[min(12.5vw,241px)] rounded-sm base:py-3 lg:py-[min(0.9vw,18px)] lg:text-[min(0.9vw,18px)] font-[900] items-center">
              Download PDF
              <span className=""> &#8595;</span>
            </button>
          </div>
          {/* <img
            src="landingdownload.jpg"
            alt=""
            className="w-[min(21.9vw,421px)] object-cover"
          ></img> */}
          <Image
            src={DownloadImage}
            alt="image"
            className="lg:w-[min(21.9vw,421px)] base:hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};
export default Download;
