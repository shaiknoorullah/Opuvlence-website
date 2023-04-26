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
      <div className="flex w-[95%] flex-col">
        {/* text and image section grid*/}
        <div className="grid grid-cols-12 pt-[8rem] ">
          <div className="flex row-span-full flex-col col-start-1 col-end-6  z-50">
            <div
              className={`text-[6.2vw] tracking-[0.7rem] leading-[130px] ${golden.className}`}
            >
              GET TO KNOW US
            </div>
            <div className={`text-[2rem]`}>ThE StOrY BeHinD </div>
            <div className={`mt-[5rem] text-[1.3rem] w-[70%] font-extrabold italic ${poppins.className}`}>
              “Lorem Ipsum dolor sit amet consectetur adipscing lore lorem is
              lorem ipsum dolor sit amet adipscing Lorem Ipsum dolor sit amet”
            </div>
          </div>
          <div className="col-start-5 row-span-full col-end-13 z-0">
            <img className="pl-10 pr-4" src="/AboutUsHero.jpg" />
          </div>
        </div>
        {/* description down */}
        <div className={`${poppins.className} ml-[17rem] mr-[10rem] text-[1rem] py-11 text-black leading-8 font-bold`}>
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
