import localFont from "@next/font/local";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
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

const WhyChooseUs = () => {
  const content = [
    {
      title: "Verified Tenants with Background Checks",
      content1: [
        "Peace of mind with thorough background checks.",
        "Trustworthy individuals for your property's long-term stability.",
        "A secure selection process that safeguards your investments.",
        "Our rigorous checks guarantee responsible occupants for you."
      ],
      content2: [
        "We ensure only the best tenants for your properties.",
        "Our vetting process brings you reliable, responsible tenants.",
        "Our verified tenants uphold your property's integrity and value."
      ],
    },
    {
      title: "Maintainance of Interiors",
      content1: [
        "Skilled maintenance for a flawlessly maintained property interior.",
        "Ensuring your property's interior remains pristine and inviting.",
        "Dedicated maintenance for a comfortable and well-maintained living space.",
        " Experts in preserving the interior beauty of your property."
      ],
      content2: [
        " Meticulous attention to detail in interior maintenance services.",
        "Our maintenance ensures a comfortable and aesthetically pleasing environment.",
        "Trust us to maintain the interior's charm and functionality."
      ],
    },
    { title: "Dedicated Relationship Manager", 
      content1: [
      " Your dedicated relationship manager ensures exceptional client service.",
      " A dedicated relationship manager for a customized real estate experience.",
      "Your dedicated manager for a seamless and personalized journey.",
      " A dedicated relationship manager to navigate your real estate goals."
    ],
      content2: [
      "Your dedicated manager anticipates and meets your unique needs.",
      "Our relationship manager is committed to your success.",
      "A dedicated manager for clear and prompt assistance."
    ],
  },
    { title: "On demand Repair Service",
      content1: [
      " On-demand services for swift and efficient property repairs.",
      " Quick and convenient on-demand repair solutions for your property.",
      " On-demand repair services that prioritize your property's upkeep.",
      "Count on our on-demand repair services for timely property maintenance."
    ],
      content2: [
      "Our on-demand services ensure your property remains in top condition.",
      " On-demand repairs delivered with precision and professionalism.",
      " Trust our on-demand repair services for timely property restoration."
    ], },
    { title: "On Time Rental Collections",
      content1: [
      "Our on-time rental collection ensures a hassle-free experience.",
      " Timely rental collection for consistent cash flow management.",
      "On-time payments that optimize your property's financial performance.",
      "Trust us for on-time rental collection and hassle-free transactions."
    ],
      content2: [
      "Our on-time rental collection ensures consistent income for property owners.",
      "Count on us for timely and hassle-free rental collection.",
      "Our on-time rental collection ensures your financial peace of mind."
    ],  },
  ];

  const sectionref = useRef(null);
  const triggerref = useRef(null);

  // useEffect(() => {
  //   let timeln=gsap.timeline({
  //     scrollTrigger:{
  //       trigger:triggerref.current,
  //       pin:true,
  //       pinSpacing:true,
  //       start: "top top",
  //         end: "2000 top",
  //         scrub: 0.6,
  //     }

  //   })

  //   // timeln.addLabel('card1');
  //   timeln.to('.card-1',{
  //     xPercent:0,
  //     opacity:1
  //   })

  //   timeln.from('.card-2',{
  //     xPercent:75,
  //     opacity:0
  //   })

  //   // timeln.addLabel('card2');

  //   timeln.to('.card-1',{
  //     scale:0.95,
  //     xPercent:-0.5,
  //     opacity:0.5,
  //   },"-=0.3")

  //   timeln.from('.card-2',{

  //     xPercent:0,
  //     opacity:1,
  //   });

  //   timeln.from(".card-3",{
  //     xPercent:75,
  //     opacity:0
  //   })

  //   timeln.addLabel("card3")
  //   timeln.to(".card-2",{
  //     scale:0.98,
  //     xPercent:-0.4,
  //     opacity:0.6,
  //   },"-=0.3")

  //   timeln.to(".card-3",{
  //     xPercent:0,
  //     opacity:1
  //   })
  // }, [])

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionref.current,
      {
        x: 0,
      },
      {
        x: "-230vw",

        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerref.current,
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
    <div ref={triggerref} className="w-full  hidden lg:flex justify-center">
      <div className="w-[90%] max-w-[1920px] ">
        {/* ourservice/why choose us */}
        <div
          id="section-name"
          className="flex lg:justify-start base:justify-center"
        >
          <div className="md:flex hidden w-[20%]"></div>

          <div
            className={`${poppinsExtrabold.className} uppercase font-extrabold base:text-[1.2rem] md:text-[2rem] lg:text-[1.2rem] text-[#A5787A] flex`}
          >
            <span className="inline-block text-[1rem] md:text-[2rem] lg:text-[1.2rem] mr-3">
              /
            </span>
            <span className="inline-block mr-3 mt-[-3px] lg:text-[1.2rem]">
              Our service / why choose us?
            </span>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-12 grid-rows-3 pt-12">
          <h1
            className={`${golden.className} text-[min(2.9vw,3.4rem)] col-start-1 col-end-6 row-start-1 row-end-2`}
          >
            WHy choose us?
          </h1>
          <div
            className={`${poppinsSemibold.className} row-start-2 italic row-end-3 col-start-3 col-end-7`}
          >
            &quot;Trusted experts in real estate, offering seamless solutions
            for buying, selling, renting, leasing, and property management. Your
            success starts here&quot;
          </div>
          <div
            className={`${poppinsRegular.className} row-start-3 italic row-end-4 col-start-7 col-end-12`}
          >
            Explore all our benefits, click here for a comprehensive overview
            {/* &quot;Lorem ipsum dolor sit amet consectetur{" "} */}
          </div>
        </div>

        {/* cards */}
        <div className="">
          <div ref={sectionref} className="cards flex   relative  ">
            {content.map((data, index) => {
              return (
                <div key={index}>
                  <div className="card-1 mx-[min(3vw,3rem)] z-0   left-0 top-0    min-w-[70rem] min-h-[30rem]  my-8 bg-[#270405] py-[min(7vw,7.2rem)] px-[min(7vw,7.2rem)] rounded-[14rem] flex justify-between">
                    <div className=" w-[30%] flex justify-center items-center  text-[#F6EBDD] text-[min(1.8vw,2.4rem)]">
                      {data.title}
                    </div>

                    <div className="w-[50%] flex justify-between gap-6 text-[min(1.2vw,1.2rem)]  text-[#E3CBC6]">
                      <ul className="justify-between text-[min(0.8vw,0.9rem)] flex flex-col">
                    {data.content1.map((data,index)=>{
                      return (
                        <li key={index}>{data}</li>
                      )
                    })}
                      </ul>
                      <ul className="justify-between text-[min(0.8vw,0.9rem)] flex flex-col">
                      {data.content2.map((data,index)=>{
                      return (
                        <li key={index}>{data}</li>
                      )
                    })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
