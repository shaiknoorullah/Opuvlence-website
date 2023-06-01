import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ServicesRentalMobile = () => {
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);

  const tl1 = useRef();
  const tl2 = useRef();
  const tl3 = useRef();
  const tl4 = useRef();

  useEffect(() => {
    tl1.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl2.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl3.current = gsap.timeline({
      paused: true,
      delay: 0,
    });
    tl4.current = gsap.timeline({
      paused: true,
      delay: 0,
    });

    tl1.current.fromTo(
      "#image1",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",
        duration: 1,
        ease: "power4.out",
      }
    );
    tl1.current.fromTo(
      "#div1",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    );
    tl2.current.fromTo(
      "#image2",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",
        duration: 1,
        ease: "power3.out",
      }
    );
    tl2.current.fromTo(
      "#div2",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    );
    tl3.current.fromTo(
      "#image3",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",

        duration: 1,
        ease: "power3.out",
      }
    );
    tl3.current.fromTo(
      "#div3",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    );
    tl4.current.fromTo(
      "#image4",
      { display: "none", width: "0%" },
      {
        display: "flex",
        width: "100%",

        duration: 1,
        ease: "power3.out",
      }
    );
    tl4.current.fromTo(
      "#div4",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    service1 ? tl1.current.play() : tl1.current.reverse();
    service2 ? tl2.current.play() : tl2.current.reverse();
    service3 ? tl3.current.play() : tl3.current.reverse();
    service4 ? tl4.current.play() : tl4.current.reverse();
  }, [service1, service2, service3, service4]);

  return (
    <div className="  base:flex lg:hidden  justify-center  w-[100%]">
      <div className="w-[95%] flex flex-col gap-[16px] mt-[50px] ">
        {/* first service */}
        <div
          className="w-full"
          id="first"
          onClick={() => {
            setService1(true);
            setService2(false);
            setService3(false);
            setService4(false);
          }}
        >
          <div className=" h-[1px] bg-black" />
          <div className="flex items-center gap-[20px] mt-[16px] font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Tenant Managements</h1>
          </div>
          <div
            id="image1"
            className="relative mt-[12px] hidden  justify-center "
          >
            <img src="/services3.png" className="relative" />
            <div
              id="div1"
              className="absolute z-10 top-[50%] w-[90%] text-white "
            >
              <h1 className="text-[5vw]">Tenant Managements</h1>
              <p className="text-[3.5075vw]">
                Transform your home into a work of art with our residential
                design services. From space planning to custom interiors, we
                create stunning living spaces that reflect your unique style.
              </p>
            </div>
          </div>
        </div>
        {/* second service */}
        <div
          id="second"
          onClick={() => {
            setService1(false);
            setService2(true);
            setService3(false);
            setService4(false);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Brokerage Servicess</h1>
          </div>
          <div
            id="image2"
            className="relative mt-[12px] hidden  justify-center "
          >
            <img src="/services3.png" className="relative" />
            <div
              id="div2"
              className="absolute z-10 top-[50%] w-[90%] text-white  "
            >
              <h1 className="text-[5vw]">Brokerage Servicess</h1>
              <p className="text-[3.5075vw]">
                Elevate your business with our corporate design services. We
                create functional and attractive workspaces that promote
                productivity and reflect your brand identity. Let us help you
                create a space that inspires and motivates.
              </p>
            </div>
          </div>
        </div>
        {/* third service */}
        <div
          id="third"
          onClick={() => {
            setService1(false);
            setService2(false);
            setService3(true);
            setService4(false);
          }}
        >
          <div className="w-full  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Property Management</h1>
          </div>
          <div
            id="image3"
            className="relative mt-[12px] hidden  justify-center "
          >
            <img src="/services3.png" className="relative" />
            <div
              id="div3"
              className="absolute z-10 top-[50%] w-[90%] text-white "
            >
              <h1 className="text-[5vw]">Property Management</h1>
              <p className="text-[3.5075vw]">
              Impress your diners with our Property Management services.
                  From the layout to the decor, we create a welcoming atmosphere
                  that complements your menu and brand. Let us transform your
                  space into a dining destination.
              </p>
            </div>
          </div>
        </div>
        {/* fourth service */}
        <div
          id="fourth"
          onClick={() => {
            setService1(false);
            setService2(false);
            setService3(false);
            setService4(true);
          }}
        >
          <div className="w-full  lg:hidden  h-[1px] bg-black  " />
          <div className="flex items-center  gap-[20px] mt-[16px]  font- text-[5vw] text-black">
            <img src="/services12.png" className="w-[15.625vw] " />
            <h1>Marketing and Advertisements</h1>
          </div>
          <div
            id="image4"
            className="relative mt-[12px] hidden  justify-center "
          >
            <img src="/services3.png" className="relative" />
            <div
              id="div4"
              className="absolute z-10 top-[50%] w-[90%] text-white "
            >
              <h1 className="text-[5vw]">Marketing and Advertisements</h1>
              <p className="text-[3.5075vw]">
              Our marketing and management services are designed to optimize
                  the visibility and profitability of your rental properties.
                  Trust us to handle the promotion, tenant screening, and
                  day-to-day operations for a hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRentalMobile;
