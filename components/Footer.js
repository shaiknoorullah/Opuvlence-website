import React from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});

const Footer = () => {
  return (
    <div className="bg-[#270405] h-[600px] mt-[100px] w-full ">
      <img className=" pt-[20px] ml-[50px]" src="/logoLight.png" />
      <div className="flex justify-between mt-[30px] px-[40px]">
        <h1
          className={`text-[80px] w-[80%] text-white tracking-wider leading-[130px] ${golden.className} `}
        >
          Subscribe to our Newsletter.
        </h1>
        <ul
          className={`${poppins.className} mt-[20px] font-600 text-right text-[18px]`}
        >
          <li>About</li>
          <li>Services</li>
          <li>Cases</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="m-[50px]">
        <input
          type="text"
          placeholder="ENTER YOU EMAIL"
          className={`${golden.className} tracking-widest bg-inherit outline-none w-[450px] text-[24px] `}
        />
        <button
          className={`${golden.className} font-[800] text-[34px] text-[#765151] `}
        >
          SUBMIT
        </button>
        <div className="w-[600px] h-[2px] mt-[5px] bg-white"></div>
        <ul
          className={`${poppins.className} flex justify-center items-center font-[600] tracking-wider uppercase mt-[80px] w-full gap-[100px] text-white text-[28px] `}
        >
          <li>Instagram</li>
          <li>Facebook</li>
          <li>youtube</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
