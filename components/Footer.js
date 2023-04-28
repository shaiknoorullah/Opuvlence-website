import React from "react";
import NavLinks from "next/link";

import { lamore, golden, poppins } from "../utils/fonts";

const Footer = () => {
  return (
    <div className="bg-[#270405] lg:flex flex-col lg:justify-center   mt-[100px] ">
      <div className="lg:max-w-[1920px] self-center w-[95%]">
        <img
          className=" base:pt-[20px] base:pl-[6.25vw] lg:pl-0  "
          src="/logoLight.png"
        />
        <div className="flex base:flex-col lg:flex-row justify-between mt-[30px] lg:px-[0px] base:pl-[6.25vw]  ">
          <h1
            className={`base:text-[6.25vw] lg:text-[min(80px,5vw)] base:w-full lg:w-[80%] text-white tracking-wider base:leading-[12vw] lg:leading-[min(130px,7vw)] ${golden} `}
          >
            Subscribe to our Newsletter.
          </h1>
          {/* desktop navlink */}
          <ul
            className={`${poppins} base:hidden lg:block mt-[20px] font-600  text-right text-[min(18px,0.99vw)]`}
          >
            <li>About</li>
            <li>Services</li>
            <li>Cases</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="lg:mt-[50px] lg:flex justify-between w-full base:px-[6.25vw] lg:px-[0px] base:mt-[12.5vw] ">
          <div>
            {" "}
            <div className="base:flex base:justify-between  lg:w-[min(600px,31vw)] ">
              <input
                id="newsletter-input"
                type="text"
                placeholder="ENTER YOU EMAIL"
                className={`${golden} tracking-widest bg-inherit outline-none text-[#765151] base:w-[50%] lg:w-[450px] base:text-[3.125vw] lg:text-[min(24px,1.25vw)] `}
              />

              <button
                className={`${poppins} font-[800] lg:leading-[min(34px,1.7vw)] base:leading-[5vw] base:text-[5vw] text-right lg:text-[min(42px,2.18vw)] text-white `}
              >
                SUBMIT
              </button>
            </div>
            <div className=" base:w-full   lg:w-[min(600px,31vw)] base:h-[1px] lg:h-[2px] mt-[5px] bg-white"></div>
            {/* mobile navlinks  */}
            <div>
              <ul
                className={`${poppins} lg:hidden base:flex flex-col gap-[4.25vw] mt-[12.5vw] font-600   text-[4vw]`}
              >
                <li className="font-[600] text-[5vw]">Quick Links</li>
                <li>About</li>
                <li>Services</li>
                <li>Cases</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* social links for desktop */}
            <div className="base:hidden lg:block">
              <p
                className={`${poppins} mt-[min(120px,6.25vw)] uppercase text-[min(24px,1.25vw)] italic font-[700]`}
              >
                Follow us on
              </p>
              <ul
                className={`${poppins} lg:flex  italic items-center font-[600] tracking-wider uppercase  w-full gap-[50px] text-[#F7EBDF] text-[min(24px,1.25vw)] `}
              >
                <li>Instagram</li>
                <li>Facebook</li>
                <li>youtube</li>
                <li>twitter</li>
              </ul>
            </div>
          </div>
          {/* contact details for both mobile and desktop */}
          <div>
            <div
              className={` flex flex-col lg:text-right base:h-fit lg:h-[min(300px,15.625vw)] base:mt-[36px] lg:mt-[0px]  text-white justify-between ${poppins} `}
            >
              <div>
                <p className="lg:text-[min(18px,0.93vw)] base:text-[4.375vw]  ">
                  Contact number
                </p>
                <p className="lg:text-[min(20px,1.02vw)] base:text-[4.375vw]  ">
                  (+091) 7892360181
                </p>
              </div>
              <div>
                <p className="lg:text-[min(18px,0.93vw)] base:text-[4.375vw]  ">
                  Email
                </p>
                <p className="lg:text-[min(20px,1.02vw)] base:text-[4.375vw] text">
                  care@opuvlence.com
                </p>
              </div>
              <div>
                <p className="lg:text-[min(18px,0.93vw)] base:text-[4.375vw] text">
                  Visit Us
                </p>
                <p className="lg:text-[min(20px,1.02vw)] base:text-[4.375vw]   lg:w-[230px] m-0 lg:text-right ">
                  Orangery plaza Bengaluru, Karnataka 560043
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden base:block">
            <p
              className={`${poppins} mt-[50px] uppercase text-[3.75vw]  font-[700]`}
            >
              Follow us on
            </p>
            <ul
              className={`${poppins} flex justify-between italic items-center font-[300] tracking-wider mt-[10px] uppercase   w-fit l gap-[50px] text-[#F7EBDF] text-[3.75vw] `}
            >
              <li>Instagram</li>
              <li>Facebook</li>
              <li>youtube</li>
              <li>twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-[100%] lg:h-[60px] base:h-fit mt-[20px] font-[500] bg-[#140101] text-[#F7EBDF] italic flex base:flex-col lg:flex-row justify-between items-center px-[20px] base:text-[3.75vw] lg:text-[min(18px,1.25vw)] base:py-[7px] ${poppins.className} `}
      >
        <p>© 2019-2022, All Rights Reserved opuvlence.</p>
        <p className="font-[700]">
          Brought by{" "}
          <span className="underline text-[#DAB38D] ">
            <NavLinks href="https://www.websleak.com" target="_blank">
              WEBSLEAK
            </NavLinks>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
