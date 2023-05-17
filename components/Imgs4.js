/** @format */

import React from "react";
import Image from "next/image";
import Firstimg from "../public/homepage/Living1.webp";
import Secondimg from "../public/homepage/Bedroom4.webp";
import Thirdimg from "../public/homepage/heroImg.webp";
import Fourthimg from "../public/homepage/Foyer.webp";

const Imgs4 = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.5"
      className="w-full flex base:mt-0 md:mt-[-150px] lg:justify-center"
    >
      <section className="w-[95%] max-w-[1920px] base:hidden lg:flex justify-center ">
        <div className=" w-full grid grid-cols-9  grid-rows-6  ">
          <div
            data-scroll
            data-scroll-speed="4"
            className=" mr-[6rem] z-[1000]  row-span-full row-start-3 row-end-6 col-start-1 col-end-4"
          >
            {/* <img src="/img1.png" className=" " /> */}
            <Image
              src={Firstimg}
              className=" rounded-tr-[500px] h-[min(29vw,30rem)] object-cover "
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="6"
            className="row-span-full z-[100]  row-start-1 row-end-5  col-start-3 col-end-6 "
          >
            {/* <img src="/img2.png" className=" " /> */}
            <Image
              src={Secondimg}
              className="object-cover h-[min(40vw,50rem)] rounded-t-full"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="2"
            className="col-start-4 col-end-8 mt-[2rem] ml-[9rem] mr-[-8rem]  z-[1] row-start-3 row-end-7   row-span-full"
          >
            {/* <img src="/img3.png" className="" /> */}
            <Image
              src={Thirdimg}
              className="object-cover rounded-l-full h-[min(28vw,31rem)]"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="8"
            className=" col-start-7 col-end-13 row-start-2 row-end-5 z-10 ml-[7rem] row-span-full"
          >
            {/* <img src="/img4.png" className=" " /> */}
            <Image
              src={Fourthimg}
              className=" rounded-bl-full h-[min(30vw,25rem)] w-[min(25vw,30rem)] object-cover "
            />
          </div>
        </div>
      </section>

      {/* for mobile */}
      <div className="w-full lg:hidden mt-16">
        {/* <img className="w-full" src="/imagesection.jpg" /> */}
        <Image className="w-full md:h-[40em]   object-cover " src={Secondimg} />
      </div>
    </div>
  );
};

export default Imgs4;
