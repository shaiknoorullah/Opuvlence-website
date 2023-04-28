import NavLinks from "next/link";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { useRouter } from "next/router";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
  variable: "--font-poppins",
});

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);
  const rect1Ref = useRef(null);
  const rect2Ref = useRef(null);
  const menuBg = useRef(null);

  const navLinksRef = useRef(null);
  const navLinksRef2 = useRef(null);
  const emailRef = useRef(null);

  const socialsRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect1 = rect1Ref.current;
      const rect2 = rect2Ref.current;
      const navLinks = navLinksRef.current.children;
      const navLinks2 = navLinksRef2.current.children;

      // const letters = emailRef.current.children;
      const socialsChildren = socialsRef.current.children;
      // console.log(letters);

      const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
          rotation: 90,
          transformOrigin: "center",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(buttonRef.current, { rotation: 0 });
      };

      const handleButtonClick = () => {
        setIsClicked(!isClicked);
        !isClicked
          ? gsap.fromTo(
              menuBg.current,
              {
                display: "none",
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut",
              },
              {
                display: "block",
                scaleY: 1,
                opacity: 1,
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut",
              }
            )
          : gsap.to(menuBg.current, {
              display: "none",
              scaleY: 0,
              opacity: 0,
              // transformOrigin: "top",
              delay: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });

        gsap.to(rect1, {
          rotation: isClicked ? 0 : 45,
          transformOrigin: "center",
          y: isClicked ? 0 : 6,
          duration: 0.5,
          ease: "power2.inOut",
        });

        gsap.to(rect2, {
          rotation: isClicked ? 0 : -45,
          transformOrigin: "center",
          y: isClicked ? 0 : -6,
          duration: 0.5,
          ease: "power2.inOut",
        });

        if (!isClicked) {
          gsap.fromTo(
            socialsChildren,
            {
              y: -20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.inOut",
            }
          );
          gsap.fromTo(
            [navLinks2, navLinks],
            { y: -20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.inOut",
            }
          );

          // gsap.fromTo(
          //   letters,
          //   {
          //     // transform: "translate(0px,-20px)",
          //     y: -20,
          //     translate: "",
          //     // opacity: 0,
          //   },
          //   {
          //     // transform: "translate(0px,0px)",
          //     y: 0,
          //     translate: "",
          //     // opacity: 1,
          //     stagger: 0.05,
          //     duration: 0.5,
          //   }
          // );
        } else {
          // gsap.fromTo(
          //   letters,
          //   {
          //     // transform: "translate(0px,0px)",
          //     y: 0,
          //     translate: "",
          //     // opacity: 1,
          //   },
          //   {
          //     // transform: "translate(0px,-20px)",
          //     y: -20,
          //     translate: "",
          //     // opacity: 0,
          //     stagger: -0.05,
          //     duration: 0.5,
          //   }
          // );
          gsap.to(socialsChildren, {
            // y: -20,
            translate: "",
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          });
          gsap.to([navLinks2, navLinks], {
            // translateY: -20,
            translate: "",
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          });
        }
      };
      const handleButtonClick2 = () => {
        // setIsClicked(!isClicked);
        !isClicked
          ? gsap.fromTo(
              menuBg.current,
              {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut",
              },
              {
                scaleY: 1,
                opacity: 1,
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut",
              }
            )
          : gsap.to(menuBg.current, {
              scaleY: 0,
              opacity: 0,
              // transformOrigin: "top",
              delay: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });

        gsap.to(rect1, {
          rotation: isClicked ? 0 : 45,
          transformOrigin: "center",
          y: isClicked ? 0 : 6,
          duration: 0.5,
          ease: "power2.inOut",
        });

        gsap.to(rect2, {
          rotation: isClicked ? 0 : -45,
          transformOrigin: "center",
          y: isClicked ? 0 : -6,
          duration: 0.5,
          ease: "power2.inOut",
        });

        if (!isClicked) {
          gsap.fromTo(
            socialsChildren,
            {
              y: -20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.inOut",
            }
          );
          gsap.fromTo(
            [navLinks2, navLinks],
            { y: -20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.inOut",
            }
          );

          // gsap.fromTo(
          //   letters,
          //   {
          //     // transform: "translate(0px,-20px)",
          //     y: -20,
          //     translate: "",
          //     // opacity: 0,
          //   },
          //   {
          //     // transform: "translate(0px,0px)",
          //     y: 0,
          //     translate: "",
          //     // opacity: 1,
          //     stagger: 0.05,
          //     duration: 0.5,
          //   }
          // );
        } else {
          // gsap.fromTo(
          //   letters,
          //   {
          //     // transform: "translate(0px,0px)",
          //     y: 0,
          //     translate: "",
          //     // opacity: 1,
          //   },
          //   {
          //     // transform: "translate(0px,-20px)",
          //     y: -20,
          //     translate: "",
          //     // opacity: 0,
          //     stagger: -0.05,
          //     duration: 0.5,
          //   }
          // );
          gsap.to(socialsChildren, {
            // y: -20,
            translate: "",
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          });
          gsap.to([navLinks2, navLinks], {
            // translateY: -20,
            translate: "",
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          });
        }
      };
      buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
      buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
      buttonRef.current.addEventListener("click", handleButtonClick);
      navLinksRef.current.addEventListener("click", handleButtonClick2);
      navLinksRef2.current.addEventListener("click", handleButtonClick2);
      return () => {
        // buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        // buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
        // buttonRef.current.removeEventListener("click", handleButtonClick);
        // navLinksRef2.current.addEventListener("click", handleButtonClick);
      };
    }
  }, [isClicked]);

  const navlist = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/aboutus",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Cases",
      href: "/casestudies",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const options = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/aboutus",
    },
    {
      title: "Services",
      href: "/services",
    },
  ];

  const options2 = [
    {
      title: "Cases",
      href: "/casestudies",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const social = [
    {
      src: "/fb.png",
      href: "/",
    },
    {
      src: "/tw.png",
      href: "/",
    },
    {
      src: "/ig.png",
      href: "/",
    },
    {
      src: "/ld.png",
      href: "/",
    },
  ];
  return (
    <nav className="flex flex-row relative  justify-between w-full pt-[25px] px-[40px] ">
      <h3 className="m-0 lg:inline-block base:hidden  text-3xl-4 text-[#CAABAC] tracking-[0.1em] lg:leading-[20px] 2xl:leading-[24px] uppercase font-semibold  ">
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">Creating new</p>
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">heights of luxury</p>
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">for the deserving</p>
      </h3>
      <NavLinks href={"/"}>
        <img
          className="relative w-[40px] h-[40px] shrink-0 object-cover cursor-pointer"
          alt=""
          src="/logo.png"
        />
      </NavLinks>
      <div className="flex flex-col items-end justify-center lg:gap-[8px] 2xl:gap-[12px] font-[700] ">
        {/* desktop */}
        <ul
          className={`text-black base:hidden lg:flex flex-col uppercase text-right 2xl:text-[18px]  2xl:leading-[30px] lg:text-[16px] lg:leading-[24px] ${poppins.className} font-[700]`}
        >
          {navlist.map((data, index) => {
            const router = useRouter();
            const path = router.asPath;
            const active = data.href === path;

            return (
              <div
                className={`flex flex-row items-center justify-end gap-[15px] w-4  `}
              >
                <div
                  className={
                    active
                      ? "relative bg-black w-[20px] h-[2px] shrink-0 "
                      : "hidden"
                  }
                />
                <NavLinks href={data.href} className="cursor-pointer  ">
                  {data.title}
                </NavLinks>
              </div>
            );
          })}
          {/* <NavLinks href="/aboutus" className="  cursor-pointer">
            about
          </NavLinks>
          <NavLinks href="/services" className="   cursor-pointe">
            services
          </NavLinks>
          <NavLinks href="/casestudies" className="  cursor-pointer">
            cases
          </NavLinks>
          <NavLinks href="/#contact" className="  cursor-pointer">
            COntact
          </NavLinks> */}
        </ul>
        {/* mobile hamburger */}
        <div className="relative z-[6000] lg:hidden w-12 h-12">
          <svg
            ref={buttonRef}
            className="absolute  w-full h-full cursor-pointer"
            viewBox="0 0 52 15"
          >
            <rect
              ref={rect1Ref}
              width="52"
              height="5"
              fill={isClicked ? "black" : "black"}
              // click={props.isClicked}
              // toggle={props.setIsClicked}
            />
            <rect
              ref={rect2Ref}
              y="10"
              width="52"
              height="5"
              fill={isClicked ? "black" : "black"}
            />
          </svg>
        </div>
        <div
          ref={menuBg}
          className={
            "fixed left-0 scale-y-0 top-0 base:px-[1rem] base:py-5 lg:px-[6rem] lg:py-[4rem] overflow-y-scroll lg:overflow-clip z-[5000] w-screen h-screen opacity-0 bg-[#C3DBE8]"
          }
        >
          <div className="flex lg:flex-row base:flex-col lg:justify-between h-full">
            <div className="flex flex-col relative  ">
              {/* mobile nav */}
              {/* <div className="flex lg:hidden justify-between w-full">
                <img className="w-[8rem]" src="/websleakfooter.svg" />
                <div
                  onClick={() => {
                    setisOpen(!isOpen);
                  }}
                >
                  <img className="w-[1.4rem]" src="/wrong.svg" />
                </div>
              </div> */}
              <div className=" flex flex-col pt-[min(110px,34.375vw)] lg:flex-row base:gap-[2.5rem] lg:gap-[min(250px,13vw)] lg:pt-[min(108px,5.625vw)] ">
                <div
                  ref={navLinksRef2}
                  className="flex flex-col base:items-center lg:items-start base:gap-[2.5rem] lg:gap-[5rem]"
                >
                  {options.map((data, index) => {
                    return (
                      <a
                        key={index}
                        href={data.href}
                        onClick={() => {
                          setIsClicked(!isClicked);
                        }}
                        className="font-medium base:text-[1.3rem] lg:text-[1.7rem] hover:text-white text-[#4F6672]"
                      >
                        {data.title}
                      </a>
                    );
                  })}
                </div>
                <div
                  ref={navLinksRef}
                  className="flex flex-col base:items-center lg:items-start   base:gap-[2.5rem] lg:gap-[5rem]"
                >
                  {options2.map((data, index) => {
                    return (
                      <a
                        key={index}
                        href={data.href}
                        onClick={() => {
                          setIsClicked(!isClicked);
                        }}
                        className="font-medium base:text-[1.3rem] lg:text-[1.7rem]  hover:text-white text-[#4F6672]"
                      >
                        {data.title}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* <nav
                ref={navLinksRef}
                className="flex flex-col flex-wrap h-[40rem] base:items-center lg:items-start  my-auto base:gap-[2.5rem] py-[9rem] lg:gap-[5rem]"
              >
                {options.map((data, idx) => {
                  return (
                    <Link
                      key={idx}
                      className="font-medium base:text-[1.3rem] lg:text-[1.7rem] text-[#626262] mr-20"
                      href={data.href}
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </nav> */}
            </div>
            <div className="flex flex-col lg:border-l lg:border-[#3F3F3F] w-full lg:w-[44%] ">
              <div className="self-end  lg:gap-[min(39px,2.03125vw)] hidden  lg:pb-[min(65px,3.385vw)] lg:flex justify-self-start">
                {/* <Hamburger duration={0.1} toggled={!isOpen} toggle={setisOpen} /> */}
              </div>
              <div className=" hidden lg:flex flex-col pb-[min(75px,3.90625vw)] border-b border-[#3F3F3F] gap-[min(5px,0.260vw)] pl-[min(28px,1.458vw)]">
                <text className=" font-medium text-[min(22px,1.145vw)] text-white leading-[min(25px,1.3vw)] ">
                  Contact Us
                </text>
                <text className=" font-normal text-[min(18px,0.9375vw)] text-[#4F6672] leading-[min(28px,1.458vw)]  ">
                  care@thehelpsquard.com
                </text>
                <text className=" font-normal text-[min(18px,0.9375vw)] text-[#4F6672] leading-[min(28px,1.458vw)]  ">
                  +91-9353238667
                </text>
              </div>
              <div className=" hidden lg:flex flex-col pt-[min(100px,5.208vw)] pb-[min(202px,10.52vw)] border-b border-[#3F3F3F] gap-[min(5px,0.260vw)] pl-[min(28px,1.458vw)]">
                <text className=" font-medium text-[min(22px,1.145vw)] text-white leading-[min(25px,1.3vw)] ">
                  India
                </text>
              </div>
              <div className=" flex flex-col pt-[min(115px,35.9vw)] lg:pt-[min(100px,5.208vw)] pb-[min(138px,7.1875vw)] self-center lg:self-start  gap-[min(40px,2.08vw)] pl-[min(28px,1.458vw)]">
                <text className=" hidden lg:flex font-medium text-[min(22px,1.145vw)] text-white leading-[min(25px,1.3vw)] ">
                  Follow Us
                </text>
                <div
                  ref={socialsRef}
                  className="flex items-center  gap-[min(57px,2.96875vw)]"
                >
                  {social.map((social, index) => {
                    return (
                      <img
                        className=" self-center "
                        key={index}
                        width={"24px"}
                        src={social.src}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col border-l border-[#3F3F3F] w-full  lg:w-[44%] lg:pl-[3.4rem]">
              <div className="base:mx-auto lg:my-auto">
                <div className="flex flex-col  mb-6 justify-center base:items-center lg:items-start lg:w-[30rem] text-white">
                  <div className="flex flex-col gap-0 ">
                    <div className="flex  gap-3">
                      <div
                        ref={emailRef}
                        className="font-medium base:text-[1.7rem] lg:text-[1.9rem] translate-y-0 relative xl:text-[2.9rem]"
                      >
                        {email}
                        {email.split("").map((letter, index) => (
                          <span key={index} className="relative">
                            {letter}
                          </span>
                        ))}
                      </div>
                      <img
                        className="base:w-[1.8rem] lg:w-[3rem]"
                        src="/footerarrow.svg"
                      />
                    </div>
                    <div className="base:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.5rem]">
                      +91-8121885150
                    </div>
                  </div>
                  <div
                    ref={socialsRef}
                    className="flex flex-wrap items-end base:gap-6 lg:gap-[1.9rem] mt-[4.5rem]"
                  >
                    {socials.map((data, idx) => {
                      return (
                        <div key={idx} className="flex gap-2">
                          <img src="/footerarrow2.svg" />
                          <div className="font-normal lg:text-[1.3rem] xl:text-[1.5rem]">
                            {data.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
