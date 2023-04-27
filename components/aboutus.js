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
const AboutusHero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex base:w-[95%] lg:w-[95%] flex-col">
        {/* text and image section grid*/}
        <div className="lg:grid grid-cols-12 base:pt-7 lg:pt-[8rem] ">
          <div className="flex row-span-full flex-col col-start-1 col-end-6  z-50">
            <div
              className={`base:text-[2.8rem] lg:text-[6.2vw] tracking-[0.7rem] lg:leading-[130px] ${golden.className}`}
            >
              GET TO KNOW US
            </div>
            <div className={`base:text-[1.8rem] lg:text-[2rem]`}>
              ThE StOrY BeHinD{" "}
            </div>

            {/* quotation for desktop */}
            <div
              className={`lg:inline-block base:hidden mt-[5rem] text-[1.3rem] w-[70%] font-extrabold italic ${poppins.className}`}
            >
              “Lorem Ipsum dolor sit amet consectetur adipscing lore lorem is
              lorem ipsum dolor sit amet adipscing Lorem Ipsum dolor sit amet”
            </div>
          </div>

          {/* image section */}
          <div className="col-start-5 row-span-full base:py-4 col-end-13 z-0">
            <img
              className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] "
              src="/aboutusheromobile.jpg"
            />
            <img
              className="base:hidden lg:inline-block lg:pl-10 lg:pr-4 "
              src="/AboutUsHero.jpg"
            />
          </div>
        </div>
        <div
          className={`lg:hidden base:inline-block   lg:text-[1.3rem] w-[80%] font-extrabold italic ${poppins.className}`}
        >
          “Lorem Ipsum dolor sit amet consectetur adipscing lore lorem is lorem
          ipsum dolor sit amet adipscing Lorem Ipsum dolor sit amet”
        </div>

        {/* description*/}
        <div
          className={`${poppins.className} lg:ml-[17rem] lg:mr-[10rem] base:text-[1rem] lg:text-[1rem] base:text-right lg:text-left py-11 text-black lg:leading-8 font-bold`}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
          et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum
          dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sitLorem ipsum dolor sit amet consectetur
        </div>
      </div>
    </div>
  );
};

export default AboutusHero;
