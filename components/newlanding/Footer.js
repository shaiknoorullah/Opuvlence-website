import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const footeritems = [
        {
          title: "Quick links",
          elements: [
            { title: "Home", href: "/" },
            { title: "Benefits", href: "/benefits" },
            { title: "Testimonials", href: "/" },
            { title: "FAQs", href: "/" },
            { title: "About Us", href: "/aboutus" },
            { title: "How It Works", href: "/" },
            { title: "What We Offer", href: "/" },
          ],
        },
        {
          title: "Socials",
          elements: [
            {
              title: "Instagram",
              href: "https://www.instagram.com/thewrapteamhyderabad/",
            },
            {
              title: "Facebook ",
              href: "https://www.facebook.com/thewrapteam/",
            },
            {
              title: "Twitter",
              href: "/",
            },
            {
              title: "Youtube",
              href: "https://www.youtube.com/@thewrapteam9361/featured",
            },
          ],
        },
      ];
  return (
    <div className="w-[100%] flex flex-col justify-center items-center bg-[black] pt-[3rem] text-[#F6EBDD]">
      {/* <Faqs /> */}
      <div className="w-[90%] base:flex flex-col pt-[5rem] lg:place-content-center lg:grid lg:grid-cols-[1.2fr,1.5fr,1.5fr,2fr]  ">
        <div className="flex flex-col gap-7 w-full font-[400] lg:gap-5 lg:pb-[7rem] lg:text-[1rem]">
          {/* Logo */}
          <div className="">
            {/* <Image src={"#"} alt="company_logo" /> */}
          </div>
          {/* {/Contact Us/} */}
          <div className="base: flex  gap-4 base:mt-6 lg:mt-16">
            <Image src={Location} className="w-5" alt="logo" />
            <a href="https://goo.gl/maps/PmNchVYEdgs3rswy7">
              Orangery plaza Bengaluru, Karnataka, 560043
            </a>
          </div>{" "}
          <div className="base: flex gap-3">
            {/* <Image className="w-5" src={"#"} alt="logo" /> */}
            <a href="tel:+91-7892360181">(+91) 789 236 0181</a>
          </div>{" "}
          <div className="base: flex gap-3 max-w-[18rem]">
            {/* <Image src={"#"} className="w-5" alt="logo" /> */}
            <a href="mailto:care@opuvlence.com"> care@opuvlence.com</a>
          </div>
        </div>
        {/* Links section */}
        {footeritems.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:ml-[10rem]  base:mt-9 font-[400]"
            >
              <div className=" base:text-[1.3rem] lg:text-[min(1.1vw,1.3rem)] mb-3 font-primary text-primary">
                {data.title}
              </div>
              <div className="flex flex-col">
                {data.elements.map((item, idx) => {
                  return (
                    <Link
                      href={item.href}
                      className="mt-4 lg:w-[100%] lg:font-[300] lg:text-[min(1vw,1.2rem)]"
                      key={idx}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* map section */}
        <div className="w-full flex mt-10 justify-center">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.114837931202!2d78.44452621487663!3d17.406275688067275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e9dbc4837%3A0xdc8b10375e721961!2sThe%20Wrap%20Team!5e0!3m2!1sen!2sin!4v1688804235400!5m2!1sen!2sin"
              width="450"
              height="275"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-[100%] mt-10">
        <div className="lg:flex lg:flex-row lg:justify-between base:flex base:flex-col base:gap-4 base:items-center base:text-[14px] font-[300] lg:text-[min(1vw,1.2rem)] border-[#F6EBDD] border-t-[1px] lg:px-[22px] lg:py-[22px] base:pt-[20px] base:pb-[50px]">
          <div className="flex lg:flex-row base:flex-col items-center lg:gap-10 base:gap-4 font-[300]">
            <div className="flex gap-5">
              Copyright &#169; 2023 Opuvlence. All Rights Reserved{" "}
            </div>
          </div>
          <div>
            Brought to you by{" "}
            <a href="https://www.websleak.com/">
              {" "}
              <u>
                <em> Websleak</em>
              </u>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer