/** @format */

import React, { useEffect, useRef } from "react";
import localFont from "@next/font/local";
import { gsap } from "gsap";

const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
  variable: "--font-poppins",
});

const AboutUsContainer = ({ left }) => {
  const containercontent = useRef(null);
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#containercontent",
  //     {
  //       y: 20,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       stagger: 0.05,
  //       delay: 2.2,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: containercontent.current,
  //       },
  //     }
  //   );

  // }, [])

  return (
    <div className="w-full flex justify-center base:py-6 lg:py-[150px]">
      <div className="w-[95%] max-w-[1920px] flex">
        <div
          className={
            left
              ? `${poppins.className} max-w-[90rem] font-normal leading-[40px] bg-[#270405] flex items-center lg:pl-[5rem] base:rounded-br-[9rem] base:rounded-tl-[9rem] lg:pr-[8rem] lg:self-start base:self-center px-3 base:justify-self-center lg:justify-self-start lg:rounded-r-full w-full lg:mr-[10rem] py-[100px] text-white lg:text-[20px]`
              : `${poppins.className} max-w-[90rem] font-normal leading-[40px] bg-[#270405] flex items-center lg:pr-[5rem] base:rounded-bl-[9rem] base:rounded-tr-[9rem] lg:pl-[8rem] lg:self-start base:self-center px-3 base:justify-self-center lg:justify-self-end lg:rounded-l-full lg:ml-[10rem] py-[100px] text-white lg:text-[20px]`
          }
        >
          <div
            ref={containercontent}
            id="containercontent"
            className="base:hidden lg:inline-block "
          >
            {`Each member of our team brings unique strengths and experiences to the table, and we work collaboratively to achieve our objectives. We prioritize communication, trust, and accountability in all our interactions to ensure that we are working efficiently and effectively towards our common goals. Our team is proud of delivering 90+ happy Projects and we are always looking for ways to improve and innovate. We value feedback and welcome new ideas, and we are committed to supporting one another as we pursue our individual and collective goals.`
              .split(/\r?\n/)
              .map((char, idx) => {
                return (
                  <span
                    key={idx}
                    className={`inline-block ${poppins.className}`}
                  >
                    {char}
                  </span>
                );
              })}
          </div>{" "}
          <div className="leading-5 lg:hidden">
            {/* Each member of our team brings unique strengths and experiences to
            the table, and we work collaboratively to achieve our objectives. We
            prioritize communication, trust, and accountability in all our
            interactions to ensure that we are working efficiently and
            effectively towards our common goals. */}
            Our team thrives on diverse strengths and experiences, collaborating
            seamlessly to achieve our goals. Communication, trust, and
            accountability drive our efficient and effective workflow. Together,
            we prioritize success through unity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
