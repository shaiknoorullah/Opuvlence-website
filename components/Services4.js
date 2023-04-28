import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Services4 = () => {
  const [service1, setServices1] = useState(true);
  const [service2, setServices2] = useState(false);
  const [service3, setServices3] = useState(false);
  const [service4, setServices4] = useState(false);

  useEffect(() => {
    if (service1) {
      gsap.fromTo(
        "#first",
        { width: "150px" },
        { width: "800px", duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        "#text12",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo("#text11", { opacity: 1 }, { opacity: 0, duration: 1.5 });
      gsap.fromTo(
        "#img1",
        { opacity: 0, display: "none" },
        {
          opacity: 1,
          display: "block",
          delay: 1,
          duration: 1,
          ease: "power4.out",
        }
      );
    }
    if (!service1) {
      gsap.fromTo(
        "#first",
        { width: "800px" },
        { width: "250px", duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        "#img1",
        { opacity: 1, display: "block" },
        { opacity: 0, display: "none", duration: 0.2, ease: "power4.out" }
      );
    }
    if (service2) {
      gsap.fromTo(
        "#second",
        { width: "150px" },
        { width: "800px", duration: 1, ease: "power4.iout" }
      );
      gsap.fromTo("#text21", { opacity: 1 }, { opacity: 0, duration: 1.5 });
      gsap.fromTo("#text22", { opacity: 0 }, { opacity: 1, duration: 1.5 });
      gsap.fromTo(
        "#img2",
        { opacity: 0, display: "none" },
        { opacity: 1, display: "block", duration: 0.2 }
      );
    }
    if (!service2) {
      gsap.fromTo(
        "#second",
        { width: "800px" },
        { width: "250px", duration: 1, ease: "power4.iout" }
      );
      gsap.fromTo("#text21", { opacity: 0 }, { opacity: 1, duration: 1.5 });
      gsap.fromTo("#text22", { opacity: 1 }, { opacity: 0, duration: 1.5 });
      gsap.fromTo(
        "#img2",
        { opacity: 1, display: "block" },
        { opacity: 0, display: "none", duration: 1 }
      );
    }

    const first = document.getElementById("first");
    const second = document.getElementById("second");
    first.addEventListener("mouseover", () => {
      setServices1(true),
        setServices2(false),
        setServices3(false),
        setServices4(false);
    });
    second.addEventListener("mouseover", () => {
      setServices1(false),
        setServices2(true),
        setServices3(false),
        setServices4(false);
    });

    return () => {
      first.removeEventListener("mouseover", () => {
        setServices1(true),
          setServices2(false),
          setServices3(false),
          setServices4(false);
      });
      second.removeEventListener("mouseover", () => {
        setServices1(false),
          setServices2(true),
          setServices3(false),
          setServices4(false);
      });
    };
    // if (!service1) {
    //   gsap.fromTo("#first", { width: "800px" }, { width: "150px" });
    // }
  }, [service1, service2]);
  return (
    <div className="flex w-full justify-center h-fit">
      <div className="max-w-[1920px] flex h-[700px] ">
        {/* first service */}
        <div
          id="first"
          onClick={() => {
            setServices1(true),
              setServices2(false),
              setServices3(false),
              setServices4(false);
          }}
          className=" flex flex-row "
        >
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col px-[20px] self-end">
            <img
              id="img1"
              src="/services1.png"
              //   style={{
              //     display: service1 ? "block" : "none",
              //   }}
              className="w-[700px]  object-contain "
            />
            <div
              style={{
                //   flexDirection: service1 ? "flex-row" : "flex-col",
                flexDirection: service1 ? "row-reverse" : "column",
              }}
              className="self-start flex    gap-[10px]  h-[350px] items-center justify-between"
            >
              <h2
                id="text11"
                style={{
                  display: service1 ? "none" : "block",
                }}
                className=" text-[30px] font-[600] text-black rotate-[270deg] "
              >
                Residential Design
              </h2>
              <h2
                id="text12"
                style={{
                  display: service1 ? "block" : "none",
                }}
                className=" text-[30px] font-[600] text-black  "
              >
                Residential Design
              </h2>
              <img className=" w-[150px]   " src="/services12.png" />
            </div>
          </div>
        </div>
        {/* second service */}
        <div
          id="second"
          onClick={() => {
            setServices1(false),
              setServices2(true),
              setServices3(false),
              setServices4(false);
          }}
          className=" flex flex-row "
        >
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col px-[20px] self-end">
            <img
              id="img2"
              src="/services21.png"
              style={{
                display: service2 ? "block" : "none",
              }}
              className="w-[700px]  object-contain "
            />
            <div
              style={{
                //   flexDirection: service1 ? "flex-row" : "flex-col",
                flexDirection: service2 ? "row-reverse" : "column",
              }}
              className="self-start flex    gap-[10px]  h-[350px] items-center justify-between"
            >
              <h2
                id="text21"
                style={{
                  display: service2 ? "none" : "block",
                }}
                className=" text-[30px] font-[600] text-black rotate-[270deg] "
              >
                Residential Design
              </h2>
              <h2
                id="text22"
                style={{
                  display: service2 ? "block" : "none",
                }}
                className=" text-[30px] font-[600] text-black  "
              >
                Residential Design
              </h2>
              <img className=" w-[150px]   " src="/services22.png" />
            </div>
          </div>
        </div>
        {/* third service */}
        <div className=" flex">
          <div className="h-[700px] w-[1px] bg-black " />
          <div className="self-end flex flex-col   h-[350px] items-center justify-between">
            <h2 className=" text-[30px] font-[600] text-black rotate-[270deg] ">
              Residential Design
            </h2>
            <img className=" w-[150px]   " src="/services12.png" />
          </div>
        </div>
        {/* fourth service */}
        <div className=" flex">
          <div className="h-[700px] w-[1px] bg-black " />
          <div className="self-end flex flex-col   h-[350px] items-center justify-between">
            <h2 className=" text-[30px] font-[600] text-black rotate-[270deg] ">
              Residential Design
            </h2>
            <img className=" w-[150px]   " src="/services12.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services4;
