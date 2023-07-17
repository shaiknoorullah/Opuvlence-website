import React from "react";
import Image from "next/image";
import DownloadImage from "../../public/landingimages/download.png";

const Download = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] base:text-[#270405] lg:text-[#F6EBDD]">
        <div className="flex base:flex-col md:flex-row py-[min(5.2vw,100px)] px-[min(2.60vw,50px)] lg:bg-[#270405] gap-[min(16.14vw,310px)]">
          <div className="flex flex-col base:gap-[20px] md:gap-[min(1.5vw,30px)]">
            <div className=" font-[Gilroy] base:text-[1.5rem] lg::text-[min(2.3vw,45px)] font-bold">
              Download your Free Opuvlence Design Guide Now!
            </div>
            <div className=" font-[Gilroy] text-[min(4vw,25px)] md:text-[min(1.09vw,21px)]">
              Discover the secrets to extraordinary design with our free Design
              Guide. Packed with expert tips, this guide will empower you to
              transform your space into a stunning masterpiece. Don&quot;t miss
              out on this invaluable resource – download your free guide today
              and embark on a journey of design excellence.
            </div>
            <button className="base:bg-[#270405] lg:bg-[#F6EBDD] base:text-[#F6EBDD] lg:text-[#270405] md:w-[min(12.5vw,241px)] rounded-sm py-[min(0.9vw,18px)] md:text-[min(0.9vw,18px)] font-[900] items-center">
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
            className="md:w-[min(21.9vw,421px)]"
          />
        </div>
      </div>
    </div>
  );
};
export default Download;
