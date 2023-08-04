import React, { useEffect, useRef } from "react";
import localFont from "@next/font/local";
import { gsap } from "gsap";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const poppinsExtrabold = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
});
const poppinsRegular = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
});
const poppinsMedium = localFont({
  src: "../styles/font/poppins/Poppins-Medium.woff2",
});
const poppinsSemibold = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
});

const HowDoesIt = () => {
  const content = [
    "Sign Management agreement",
    "Inventory Check and Video",
    "Property Marketing",
    "Tenant Screening",
    "Tenant Agreement & Move In",
    "On Demand Maintenance",
    "Tenant Replacement",
    "Exit Check & Renewal",
  ];

  const sectionref1 = useRef(null);
  const triggerref1 = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionref1.current,
      {
        y: 0,
      },
      {
        y: "-280vw",

        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerref1.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div
      ref={triggerref1}
      className="pin-trigger w-full cursor-none flex justify-center py-36"
    >
      <div className="w-[90%] max-w-[1920px] ">
        {/* ourservice/why choose us */}
        <div
          id="section-name"
          className="pin-element flex lg:justify-start base:justify-center"
        >
          <div className="md:flex hidden w-[20%]"></div>

          <div
            className={`${poppinsExtrabold.className} uppercase font-extrabold base:text-[1.2rem] md:text-[2rem] lg:text-[1.2rem] text-[#A5787A] flex`}
          >
            <span className="inline-block text-[1rem] md:text-[2rem] lg:text-[1.2rem] mr-3">
              /
            </span>
            <span className="inline-block mr-3 mt-[-3px] lg:text-[1.2rem]">
              Our service / how does it work?
            </span>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-12 grid-rows-2 pt-12">
          <h1
            className={`${golden.className} text-[min(2.9vw,3.4rem)] col-start-1 col-end-6 row-start-1 row-end-2`}
          >
            how does it work?
          </h1>
          <div
            className={`${poppinsSemibold.className} row-start-2 italic row-end-3 col-start-3 col-end-7 pt-4`}
          >
            Streamline rentals and leases with our comprehensive services,
            ensuring a seamless experience for landlords and tenants.
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-between h-[32rem] items-center ">
          <div className="py-[5rem] w-[55vw] text-[min(20px,1.4vw)] leading-[min(3vw,2rem)]">
           We specialize in providing hassle-free
            solutions for individuals and businesses seeking temporary or
            long-term accommodations. Our experienced team offers a wide range
            of properties, from apartments to commercial spaces, tailored to
            meet diverse needs and budgets. We handle all aspects of the rental
            process, from property sourcing and tenant screening to lease
            agreement management and maintenance coordination. With our
            commitment to exceptional service and attention to detail, we strive
            to ensure a seamless and enjoyable experience for both landlords and
            tenants.
          </div>
          <div
            ref={sectionref1}
            id="cardsani"
            className="card-container h-full w-[30%] relative"
          >
            {content.map((data, index) => {
              return (
                <div
                  // id="card"
                  key={index}
                  className={`${poppinsRegular.className} mt-[6rem]  left-0 h-[min(27vw,30rem)] w-[min(27vw,30rem)] pt-9 bg-[#270405] rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
                >
                  {data}
                </div>
              );
            })}

            {/* <div
              id="card"
              className={`${poppinsRegular.className} mt-12  left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 2
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 3
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 4
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 5
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 6
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 7
            </div>
            <div
              id="card"
              className={`${poppinsRegular.className} mt-12 left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 8
            </div> */}
            {/* <div
              id="card4"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement 4
            </div> */}
            {/* <div
              id="card2"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div> */}
            {/* <div
              id="card3"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div>
            <div
              id="card4"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div>
            <div
              id="card5"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div>
            <div
              id="card6"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div>
            <div
              id="card7"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div>
            <div
              id="card8"
              className={`${poppinsRegular.className} absolute left-0 h-full w-[min(27vw,30rem)] pt-9 bg-black rounded-t-full flex items-center justify-center text-center text-[min(1.8vw,2rem)] text-white`}
            >
              Sign Management <br /> Agreement
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesIt;
