import React from "react";
import Image from "next/image";
import DownloadImage from "../../public/landingimages/download.png";
import Reusabletext from "./reusabletext";
import { useState, useEffect } from "react";
import Closebutton from "../../public/newlandinghero/closebutton.png";

const Download = () => {
  // for modal
  const [open, setopen] = useState(false);
  const handleopen = () => {
    setopen(true);
  };
  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div id="download" className="w-full flex justify-center">
      <div className="w-[90%] max-w-[1920px] base:text-[#270405] lg:text-[#F6EBDD]">
        <div className="flex base:flex-col md:flex-row py-[min(5.2vw,100px)] px-[min(2.60vw,50px)] lg:bg-[#270405] gap-[min(16.14vw,310px)]">
          <div className="flex flex-col base:gap-[20px] justify-between lg:gap-[min(1.5vw,30px)]">
            <div className="base:hidden lg:flex mb-[-5rem]">
              {" "}
              <Reusabletext
                text={"Download your Free Opuvlence Design Guide Now!"}
                white
              />
            </div>
            <div className="base:flex lg:hidden">
              {" "}
              <Reusabletext
                text={"Download your Free Opuvlence Design Guide Now!"}
              />
            </div>
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
            {/* download button */}
            <div>
              <button
                onClick={handleopen}
                className="base:bg-[#270405] base:w-fit  px-8  lg:bg-[#F6EBDD] base:text-[#F6EBDD] lg:text-[#270405] lg::w-[min(13.7vw,261px)] rounded-sm base:py-3 lg:py-[min(0.9vw,18px)] lg:text-[min(1vw,18px)] font-[900] items-center"
              >
                Download PDF
                <span className=""> &#8595;</span>
              </button>
              {open && (
                <div
                  className={
                    open
                      ? `fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50  `
                      : `hidden`
                  }
                  style={{ overflowY: "hidden" }}
                >
                  <div className="bg-[#F6EBDD] flex flex-row gap-[2rem] justify-center p-10 w-[55rem]">
                    {/* close button */}
                    <div className="flex flex-col justify-between items-end">
                      <button
                        className="font-bold py-2 px-4 w-fit hover:scale-[1.2] "
                        onClick={() => setopen(false)}
                      >
                        <Image src={Closebutton} />
                      </button>
                      {/* importing input fields  */}
                      <div className="w-full flex flex-col gap-[3rem]">
                        <div>
                          <label className="text-[#270405] font-bold">
                            Full Name
                          </label>
                          <br />
                          <input
                            label="Full Name*"
                            className="text-[16px] font-normal leading-[32px] w-full rounded-sm  border pl-4 border-[#270405] placeholder:text-[#270405] text-[#270405] bg-[#F6EBDD]"
                            placeholder="Arun Kumar"
                          />
                        </div>
                        <div>
                          <label className="text-[#270405] font-bold">
                            Email
                          </label>
                          <br />
                          <input
                            label="Full Name"
                            className="text-[16px] font-normal leading-[32px] w-full rounded-sm  border pl-4 border-[#270405] placeholder:text-[#270405] text-[#270405] bg-[#F6EBDD]"
                            placeholder="arunkumar@gmail.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
