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

const Residential = () => {
  return (
    <div className="flex flex-row relative w-full 3xl:gap-[12px] lg:gap-[0.625vw]">
      {/* <div className="flex flex-row  absolute bottom-[36px] left-[-200px]"> */}
      <img src="ourproject.png" className="w-[25vw]"></img>
      <div className="flex flex-col">
        <p className="font-extrabold 3xl:text-[25px] lg:text-[1.3vw] 3xl:leading-[37.5px] lg:leading-[1.95vw] tracking-[0.5%] mt-[-9px]">
          2020
        </p>
        <p className="font-medium 3xl:text-[89.14px] lg:text-[4.642vw] 3xl:leading-[133.71px] lg:leading-[6.93vw] tracking-[0.5%] rotate-[270deg] absolute 3xl:left-[328px] lg:left-[16.5vw] 3xl:mt-[228px] lg:mt-[11.875vw] uppercase">
          {" "}
          Residential
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};
const OurProject = () => {
  return (
    <div className="w-full max-w-[1920px] items-center flex justify-center ">
      <div className="font-poppins w-[98%] z-50 ">
        <div className="w-[65%] justify-center font-extrabold text-[1.3rem] text-[#A5787A] flex pt-[20px]">
          / OUR PROJECTS
        </div>
        <div className="flex flex-row 3xl:gap-[168px] lg:gap-[8.75vw]">
          <text className="3xl:w-[583px] lg:w-[30.36vw]  3xl:text-[33px] lg:text-[1.71vw]  3xl:leading-[45.34px] lg:leading-[2.361vw] tracking-[10%] font-bold 3xl:pl-[50px] 3xl:pt-[41px] lg:pl-[2.60vw] lg:pt-[2.13vw] snap-center font-[lamore]">
            WE&apos;VE BUILT HOMES THAT BRING DREAMS COME TRUE
          </text>
          <div className="3xl:w-[442px] lg:w-[23.02vw] 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] lg:leading-[1.294vw] tracking-[7%] font-normal  3xl:pt-[86px] lg:pt-[4.47vw]  snap-center">
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable
            serviceUsing edge cutting technology to provide extremely reliable
            service
          </div>
        </div>
        {/* reuse */}
        <div className="3xl:w-[587px] lg:w-[30.57vw] 3xl:pl-[50px] lg:pl-[2.60vw]  relative pb-[10px]">
          <div className="flex flex-row items-center 3xl:gap-[15px] lg:gap-[0.78vw] absolute 3xl:top-[-13.59px] lg:top-[-0.708vw]">
            <div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase">
              residential
            </div>
            <img
              src="OurprojectVector.png"
              className=" 3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]"
            ></img>
            <div className="3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
              commercial
            </div>
            <img
              src="OurprojectVector.png"
              className="3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]  ml-1"
            ></img>
            <div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
              restaurant
            </div>
          </div>
        </div>
        {/* <div className="grid w-[700px] h-[550px] grid-cols-[0.3fr_2.2fr_0.7fr_1.9fr_0.5fr_0.4fr] grid-rows-[0.1fr_1.6fr_0.8fr]">
          <div
            style={{
              gridArea: "2 / 1 / 3 / 5",
            }}
            className={` ${golden.className} pointer-events-none select-none w-[792px]   3xl:text-[188px] lg:text-[9.79vw] lg:leading-[9.79vw] 3xl:leading-[188px] tracking-[3%] font-normal font-[gilroy] uppercase mt-0 z-[10]`}
          >
            Bonito Designs
          </div>
          <div
            style={{
              gridArea: "3 / 2 / 4 / 4",
            }}
            className="grid-cols-1 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] ml-8 mr-[-3.6rem] lg:leading-[1.29vw] tracking-[7%] font-normal z-[10]"
          >
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable
            serviceUsing edge cutting technology to provide extremely reliable
            service
          </div>
          <div
            style={{
              gridArea: "1 / 3 / 4 / 6",
            }}
            className="w-[588px] h-[542px] ml-[90px]"
          >
            <img src="ourproject.png" className="w-[100%] h-[100%]"></img>
          </div>
          <p
            style={{
              gridArea: "1/ 7 / 1 / 6",
            }}
            className="font-extrabold 3xl:text-[25px] lg:text-[1.3vw] 3xl:leading-[37.5px] lg:leading-[1.95vw] tracking-[0.5%] mt-[-9px]"
          >
            2020
          </p>
          <div
            style={{
              gridArea: "2 / 6 / 4 / 7",
            }}
            className="relative max-w-[135px] max-h-[531px]"
          >
            <p className="uppercase  text-[90px] origin-top-left translate-y-[531px] rotate-[270deg]">
              Residential
            </p>
          </div>
        </div> */}
        <div className="grid w-[80%] grid-cols-9 grid-rows-3">
          <div className="row-span-full col-start-1 col-end-7 row-start-1 row-end-3 z-40">
            <div
              className={` ${golden.className} pointer-events-none select-none   text-[9vw] lg:leading-[9.79vw] 3xl:leading-[188px] tracking-[3%] font-normal font-[gilroy] uppercase mt-0 z-[10]`}
            >
              bonito designs
            </div>
          </div>
          <div className="row-span-full row-start-1 row-end-4 col-start-4 col-end-9">
            <Residential />
          </div>
          <div className=" font-medium  col-start-1 col-end-5 ml-[4rem] row-start-3 row-end-4 z-30">
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable service
            Using edge cutting technology to provide extremely reliable
            serviceUsing edge cutting technology to provide extremely reliable
            service
          </div>
        </div>
        {/* ksd */}
        {/* <div className="3xl:pt-[35px] lg:pt-[1.822vw] mt-[15px]">
          <div className="flex flex-col justify-center items-center m-auto">
            <div
              className={` ${golden.className} pointer-events-none select-none 3xl:w-[892px] lg:w-[46.25vw]  3xl:text-[188px] lg:text-[9.79vw] lg:leading-[9.79vw] 3xl:leading-[188px] tracking-[3%] font-normal font-[gilroy] uppercase mt-0 z-[10]`}
            >
              bonito designs
            </div>
            <div className=" 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] lg:leading-[1.29vw] tracking-[7%] font-normal z-[10] ">
              <div className="3xl:w-[501px] font-medium lg:w-[26.09vw]">
                Using edge cutting technology to provide extremely reliable
                service Using edge cutting technology to provide extremely
                reliable service Using edge cutting technology to provide
                extremely reliable serviceUsing edge cutting technology to
                provide extremely reliable service
              </div>
            </div>
          </div>
          <div className="relative rotate-90 3xl:top-[480px] lg:top-[25vw] 3xl:left-[810.24px] lg:left-[42.20vw]">
            <div className="absolute flex flex-row 3xl:gap-[30px] lg:gap-[50px] items-center ">
              <img
                className="3xl:w-[228.27px] lg:w-[10.4
                  1vw] rotate-[270deg]"
                src="Vectorour.svg"
              ></img>
              <button
                className={`uppercase 3xl:w-[401px] lg:w-[20.88vw] 3xl:h-[74px] lg:h-[3.85vw] bg-transparent border-transparent font-normal 3xl:text-[54px] lg:text-[2.81vw] 3xl:leading-[54px] lg:leading-[2.81vw] tracking-[10%] rotate-[180deg] ${golden.className} `}
              >
                view more
              </button>
            </div>
          </div>
        </div> */}

        {/* <div className="relative h-10"> */}
        {/* <div className="absolute 3xl:bottom-[-50px]  3xl:left-[-180px] lg:bottom-[0.5vw] lg:left-[-9.375vw] ">
            <Residential />
          </div> */}
        {/* <div className="absolute 3xl:bottom-[-50px] lg:bottom-[0.5vw]  3xl:right-[330px] lg:right-[14.4vw] ">
            <Residential />
          </div>
        </div> */}

        {/* <div className="relative rotate-90 top-[259px] left-[600px]">
          <div className="absolute flex flex-row 3xl:gap-[10px] lg:gap-[0.52vw] ">
            <img
              className="3xl:w-[200px] lg:w-[10.41vw] rotate-[180deg] "
              src="Ourprojectvector.png"
            ></img>
            <button className="uppercase 3xl:w-[401px] lg:w-[20.88vw] 3xl:h-[74px] lg:h-[3.85vw] bg-transparent border-transparent font-normal 3xl:text-[54px] lg:text-[2.81vw] 3xl:leading-[54px] lg:leading-[2.81vw] tracking-[10%] rotate-[180deg]">
              view more
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default OurProject;
