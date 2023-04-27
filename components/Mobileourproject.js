import react from "react";
import localFont from "next/font/local";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
  variable: "--font-poppins",
});
const MobileOurProject = () => {
  return (
    <div className="md:hidden w-[100%] pt-[30px] ">
      <p className="relative items-center flex justify-center text-[12px] leading-[18px] tracking-[0.5%] text-[#A5787A] font-extrabold uppercase mb-[20px]">
        / our projects
      </p>
      <div className="flex flex-row justify-between pl-[19px] pr-[23px] pb-[27px] ">
        <div className="flex flex-col text-[15px] leading-[22.5px] tracking-[0.5px] font-[300] italic uppercase">
          <div className="font-medium">-residential</div>
          <div>commercial</div>
          <div>restaurant</div>
        </div>
        <div className="w-[36px] text-[7.06px] leading-[8.78px] tracking-[10%] font-[700] text-right">
          wE’vE bUiLt homes thAt brinG DrEAms COME trUE
        </div>
      </div>
      <img src="rectangle269.png" className="w-[100vw]"></img>
      <div className="pl-[20px]">
        {/* <img src="rectangle269.png" className="w-[100vw] z-[1]"></img> */}
        <div
          className={`${golden.className} absolute text-[50px] leading-[50px] tracking-[3%] top-[190px] z-[10]`}
        >
          bonito{" "}
          <div className="rotate-[270deg] absolute left-[218px] top-[10px]  text-[16px] leading-[27px] tracking-[0.5%] font-bold">
            2020
          </div>
          designs
        </div>
      </div>
      <div className="absolute right-[20px] top-[475px]">
        <img src="group 52.svg"></img>
      </div>

      <div className="mt-[4rem] text-[1rem] px-5 font-normal text-justify leading-[19.36px] tracking-[0.05em]">
        Using edge cutting technology to provide extremely reliable service
        Using edge cutting technology to provide extremely reliable service
        Using edge cutting technology to provide extremely reliable serviceUsing
        edge cutting technology to provide extremely reliable service
      </div>
    </div>
  );
};
export default MobileOurProject;
