import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Services4 = () => {
  const [service1, setServices1] = useState(true);
  const [service2, setServices2] = useState(false);
  const [service3, setServices3] = useState(false);
  const [service4, setServices4] = useState(false);

  useEffect(() => {
    // if (service1) {
    //   gsap.fromTo(
    //     "#first",
    //     { width: "150px" },
    //     { width: "800px", duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s1text180",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s1text270",
    //     { opacity: 1, display: "initial" },
    //     {
    //       opacity: 0,
    //       display: "none",
    //       delay: 0.5,
    //       duration: 1.5,
    //       ease: "power2.out",
    //     }
    //   );
    //   gsap.fromTo(
    //     "#img1",
    //     { opacity: 0, width: 0 },
    //     {
    //       width: "100%",
    //       opacity: 1,
    //       delay: 0.3,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     }
    //   );
    // }
    // if (!service1) {
    //   gsap.fromTo(
    //     "#first",
    //     { width: "800px" },
    //     { width: "250px", delay: 0.5, duration: 0.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s1text180",
    //     { opacity: 1 },
    //     { opacity: 0, delay: 0.1, duration: 0.2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s1text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img1",
    //     { opacity: 1, width: "100%" },
    //     { opacity: 0, width: "0px", duration: 1, ease: "power2.out" }
    //   );
    // }
    // if (service2) {
    //   gsap.fromTo(
    //     "#second",
    //     { width: "150px" },
    //     { width: "800px", duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s2text180",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s3text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img3",
    //     { opacity: 0, width: 0 },
    //     {
    //       width: "100%",
    //       opacity: 1,
    //       delay: 0.3,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     }
    //   );
    // }
    // if (!service2) {
    //   gsap.fromTo(
    //     "#second",
    //     { width: "800px" },
    //     { width: "inherit", delay: 0.5, duration: 0.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s2text180",
    //     { opacity: 1 },
    //     { opacity: 0, delay: 0.1, duration: 0.2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s2text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img2",
    //     { opacity: 1, width: "100%" },
    //     { opacity: 0, width: "0px", duration: 1, ease: "power2.out" }
    //   );
    // }
    // if (service3) {
    //   gsap.fromTo(
    //     "#third",
    //     { width: "150px" },
    //     { width: "800px", duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s3text180",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s3text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img3",
    //     { opacity: 0, width: 0 },
    //     {
    //       width: "100%",
    //       opacity: 1,
    //       delay: 0.3,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     }
    //   );
    // }
    // if (!service3) {
    //   gsap.fromTo(
    //     "#third",
    //     { width: "800px" },
    //     { width: "inherit", delay: 0.5, duration: 0.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s3text180",
    //     { opacity: 1 },
    //     { opacity: 0, delay: 0.1, duration: 0.2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s3text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img3",
    //     { opacity: 1, width: "100%" },
    //     { opacity: 0, width: "0px", duration: 1, ease: "power2.out" }
    //   );
    // }
    // if (service4) {
    //   gsap.fromTo(
    //     "#fourth",
    //     { width: "150px" },
    //     { width: "800px", duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s4text180",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s4text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 1.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img4",
    //     { opacity: 0, width: 0 },
    //     {
    //       width: "100%",
    //       opacity: 1,
    //       delay: 0.3,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     }
    //   );
    // }
    // if (!service4) {
    //   gsap.fromTo(
    //     "#fourth",
    //     { width: "800px" },
    //     { width: "inherit", delay: 0.5, duration: 0.5, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s4text180",
    //     { opacity: 1 },
    //     { opacity: 0, delay: 0.1, duration: 0.2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#s4text270",
    //     { opacity: 0 },
    //     { opacity: 1, delay: 0.5, duration: 2, ease: "power2.out" }
    //   );
    //   gsap.fromTo(
    //     "#img4",
    //     { opacity: 1, width: "100%" },
    //     { opacity: 0, width: "0px", duration: 1, ease: "power2.out" }
    //   );
    // }

    const entryAnimation = (ids, onComplete) => {
      gsap.to(ids[0], {
        width: "800px",
        delay: 0,
        duration: 1,
        ease: "power3.inOut",
        // onComplete: onComplete,
      });
      gsap.fromTo(
        ids[1],
        { opacity: 0, display: "none" },
        {
          opacity: 1,

          display: "block",
          delay: 0.5,
          duration: 0.5,
          ease: "power3.inOut",
        }
      );
      gsap.to(ids[2], {
        display: "none",
        opacity: 0,
        delay: -0.5,

        // duration: 0,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ids[3],
        { opacity: 0, width: 0, display: "none" },
        {
          width: "100%",
          display: "initial",
          opacity: 1,
          delay: 0.5,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    };

    const leaveAnimation = (ids) => {
      gsap.to(ids[0], {
        width: "200px",
        duration: 1,
        delay: 0.5,
        ease: "power3.inOut",
      });
      const tl = gsap.timeline();
      tl.fromTo(
        ids[1],
        { opacity: 1, display: "block" },
        {
          opacity: 0,
          delay: 0.1,
          display: "none",
          duration: 0.2,
          ease: "power3.inOut",
        }
      );
      tl.fromTo(
        ids[2],
        { opacity: 0, display: "none" },
        {
          opacity: 1,
          delay: 1,
          display: "block",
          duration: 1,
          ease: "power3.inOut",
        }
      );
      gsap.fromTo(
        ids[3],
        { opacity: 1, width: "100%", display: "block" },
        {
          opacity: 0,
          delay: -0.2,
          width: "0px",
          duration: 1,
          ease: "power3.inOut",
          display: "none",
        }
      );
    };

    const onMouseEnter1 = () => {
      entryAnimation(["#first", "#s1text180", "#s1text270", "#img1"]) &&
        console.log(`mouse enter`);
    };
    const onMouseLeave1 = () => {
      leaveAnimation(["#first", "#s1text180", "#s1text270", "#img1"]) &&
        console.log(`mouse leave`);
    };

    const onMouseEnter2 = () => {
      entryAnimation(["#second", "#s2text180", "#s2text270", "#img2"]) &&
        console.log(`mouse enter`);
    };
    const onMouseLeave2 = () => {
      leaveAnimation(["#second", "#s2text180", "#s2text270", "#img2"]) &&
        console.log(`mouse leave`);
    };

    const first = document.getElementById("first");
    const second = document.getElementById("second");
    first.addEventListener("mouseenter", onMouseEnter1);
    first.addEventListener("mouseleave", onMouseLeave1);
    second.addEventListener("mouseenter", onMouseEnter2);
    second.addEventListener("mouseleave", onMouseLeave2);

    return () => {
      first.removeEventListener("mouseenter", onMouseEnter1);
      first.removeEventListener("mouseleave", onMouseLeave1);
      second.removeEventListener("mouseenter", onMouseEnter2);
      second.removeEventListener("mouseleave", onMouseLeave2);
    };
  }, []);
  return (
    <div className="flex w-full justify-center h-fit">
      <div className="max-w-[1920px] flex h-[700px] ">
        {/* first service */}
        <div id="first" className=" flex flex-row ">
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col  h-fit px-[20px] self-end">
            <img
              id="img1"
              src="/services1.png"
              className="w-[700px] hidden object-contain relative z-50 self-start "
            />
            <div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
              <h2
                style={{
                  writingMode: "vertical-lr",
                }}
                id="s1text270"
                className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
              >
                Residential Design
              </h2>

              <div className="flex items-center gap-[25px] ">
                <img
                  id="small1"
                  className=" min-w-[150px]   "
                  src="/services12.png"
                />
                <h2
                  id="s1text180"
                  className=" text-[30px] hidden font-[600] text-black  "
                >
                  Residential Design
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* second service */}
        <div id="second" className=" flex flex-row ">
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col  h-fit gap-[70px] px-[20px] self-end">
            <img
              id="img2"
              src="/services21.png"
              className="w-[700px] hidden object-contain "
            />
            <div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
              <h2
                style={{
                  writingMode: "vertical-lr",
                }}
                id="s2text270"
                className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
              >
                Residential Design
              </h2>

              <div className="flex items-center gap-[25px] ">
                <img
                  id="small2"
                  className=" min-w-[150px]   "
                  src="/services22.png"
                />
                <h2
                  id="s2text180"
                  className=" text-[30px] hidden font-[600] text-black  "
                >
                  Residential Design
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* third service */}
        <div id="third" className=" flex flex-row ">
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col gap-[70px] px-[20px] self-end">
            {/* <img
              id="img3"
              src="/services3.png"
              className="w-[700px]  object-contain "
            /> */}
            <div className="self-start flex    gap-[10px] items-center justify-between">
              <h2
                id="s3text270"
                className=" text-[30px] font-[600] text-black rotate-[270deg] "
              >
                Residential Design
              </h2>
              {/* <h2
                id="s3text180"
                className=" text-[30px] font-[600] text-black  "
              >
                Residential Design
              </h2> */}
              <img
                id="small3"
                className=" min-w-[150px]   "
                src="/services22.png"
              />
            </div>
          </div>
        </div>
        {/* fourth service */}
        <div id="fourth" className=" flex flex-row ">
          <div className="h-full w-[1px] bg-black " />
          <div className="flex flex-col gap-[70px] px-[20px] self-end">
            {/* <img
              id="img4"
              src="/services21.png"
              className="w-[700px]  object-contain "
            /> */}
            <div className="self-start flex    gap-[10px] items-center justify-between">
              <h2
                id="s4text270"
                className=" text-[30px] font-[600] text-black rotate-[270deg] "
              >
                Residential Design
              </h2>
              {/* <h2
                id="s4text180"
             
                className=" text-[30px] font-[600] text-black  "
              >
                Residential Design
              </h2> */}
              <img
                id="small4"
                className=" min-w-[150px]   "
                src="/services22.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services4;
