import React from "react";
import Image from "next/image";
import DownloadImage from "../../public/landingimages/download.png";

const Download = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        <div className="flex base:flex-col md:flex-row py-[min(5.2vw,100px)] px-[min(2.60vw,50px)] bg-[#270405] gap-[min(16.14vw,310px)]">
          <div className="flex flex-col gap-[min(1.5vw,30px)]">
            <div className="text-[#F6EBDD] font-[Gilroy] text-[min(2.3vw,45px)]">
              Download your Free Opuvlence Design Guide Now!
            </div>
            <div className="text-[#F6EBDD] font-[Gilroy] text-[min(1.09vw,21px)]">
              Discover the secrets to extraordinary design with our free Design
              Guide. Packed with expert tips, this guide will empower you to
              transform your space into a stunning masterpiece. Don&quot;t miss out
              on this invaluable resource – download your free guide today and
              embark on a journey of design excellence.
            </div>
            <button className="bg-[#F6EBDD] text-[#270405] w-[min(12.5vw,241px)] rounded-sm py-[min(0.9vw,18px)] text-[min(0.9vw,18px)] font-[900] items-center">
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
