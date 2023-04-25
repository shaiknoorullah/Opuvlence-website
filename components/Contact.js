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

const Contact = () => {
  return (
    <div className="w-full h-screen  px-[40px] flex flex-col ">
      <div className="flex w-full justify-between ">
        <h1
          className={`w-[40%] text-[#270405] uppercase text-[100px] leading-[130px]  ${golden.className} `}
        >
          get in contact with us
        </h1>
        <div className="text-[#270405] flex flex-col text-right h-[400px]  justify-between  ">
          <div>
            <p className="text-[20px] ">Contact number</p>
            <p className="text-[22px] ">(+091) 7892360181</p>
          </div>
          <div>
            <p className="text-[20px] ">Email</p>
            <p className="text-[22px] ">care@opuvlence.com</p>
          </div>
          <div>
            <p className="text-[20px] ">Visit Us</p>
            <p className="text-[22px] w-[230px] m-0 text-right ">
              Orangery plaza Bengaluru, Karnataka 560043
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[64px] text-[22px] justify-between text-[#B25F62] ">
        <div className="w-[40%]">
          <div>
            <label className="block">Name</label>
            <input
              className="w-full outline-none bg-inherit border-b-2 border-b-[#B25F62] border-solid"
              type="text"
            />
          </div>
          <div>
            <label className="block mt-[78px] ">Email</label>
            <input
              className="w-full outline-none bg-inherit border-b-2 border-b-[#B25F62] border-solid "
              type="text"
            />
          </div>
        </div>
        <div className="w-[40%] text-right ">
          <div>
            <label className="block ">Contact number</label>
            <input
              className="w-full  outline-none bg-inherit border-b-2 border-b-[#B25F62] border-solid"
              type="text"
            />
          </div>
          <div>
            <label className="block  mt-[78px]">Email</label>
            <input
              className="w-full bg-inherit border-b-2 border-b-[#B25F62] border-solid outline-none "
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
