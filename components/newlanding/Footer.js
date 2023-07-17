import Image from "next/image";
import Link from "next/link";
import React from "react";
import Location from "../../public/newlanding/location.svg";
import Mail from "../../public/newlanding/mail.svg";
import Phone from "../../public/newlanding/phone.svg";
import Logo from "../../public/logoLight.png";

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
          href: "https://www.instagram.com/opuvlence",
        },
        {
          title: "Facebook ",
          href: "https://www.facebook.com/theopuvlence",
        },
        {
          title: "Twitter",
          href: "https://www.twitter.com/opuvlence",
        },
        {
          title: "Youtube",
          href: "https://www.youtube.com/@opuvlence",
        },
      ],
    },
  ];
  return (
    <div className="w-[100%] flex flex-col justify-center items-center bg-[black] pt-[3rem] text-[#F6EBDD]">
      {/* <Faqs /> */}
      <div className="w-[90%] base:flex flex-col pt-[5rem] lg:place-content-center lg:grid lg:grid-cols-[1.2fr,1.5fr,1.5fr,2fr]  ">
        <div className="flex flex-col gap-7 w-full font-[500] lg:gap-5 lg:pb-[7rem] lg:text-[1.3rem]">
          {/* Logo */}
          <div className="">
          <Image src={Logo} alt="company_logo" />
          </div>
          {/* {/Contact Us/} */}
          <div className="base: flex  gap-4 base:mt-6 lg:mt-16">
            <Image src={Location} className="w-5" alt="logo" />
            <a href="https://goo.gl/maps/PmNchVYEdgs3rswy7">
              Orangery plaza Bengaluru, Karnataka, 560043
            </a>
          </div>{" "}
          <div className="base: flex gap-3">
            <Image className="w-5" src={Phone} alt="logo" />
            <a href="tel:+91-7892360181">(+91) 789 236 0181</a>
          </div>{" "}
          <div className="base: flex gap-3 max-w-[18rem]">
            <Image src={Mail} className="w-5" alt="logo" />
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
              <div className=" base:text-[1.3rem] lg:text-[min(1.3vw,1.3rem)] mb-3 font-medium text-primary">
                {data.title}
              </div>
              <div className="flex flex-col">
                {data.elements.map((item, idx) => {
                  return (
                    <Link
                      href={item.href}
                      className="mt-4 lg:w-[100%] lg:font-[300] text-[#F6EBDD] lg:text-[min(1vw,1.2rem)]"
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
          <div className="google-map w-[30rem] h-[20rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2728119975604!2d77.64565707436597!3d13.018291287301397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172bd6c5dac3%3A0xad0cb18960d1cd34!2sOrangery%20Plaza%2C%20916%2C%203rd%20Cross%20Rd%2C%20HRBR%20I%20Block%2C%20HRBR%20Layout%2C%20Kalyan%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1689599052513!5m2!1sen!2sin"
              width="100%"
              height="100%"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
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
  );
};

export default Footer;
