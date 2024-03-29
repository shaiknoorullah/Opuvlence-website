import React from "react";
import Arrow from "../../public/newlanding/arrow.svg";
import Testimonial1 from "../../public/newlanding/testimonial.png";
import Testimonial2 from "../../public/newlanding/testimonial2.png";
import Star from "../../public/newlanding/star.svg";
import Image from "next/image";
import { useState } from "react";
import Reusabletext from "./reusabletext";

const Testimonial = () => {
  const testimonial = [
    {
      img: Testimonial1,
      name: "Sahil Mahajan",
      review:
        "I am thrilled to share my wonderful experience of working with Interior Designer Jyoti for the kitchen design of my house. From the very beginning, Jyoti was extremely attentive to my needs and preferences. She listened carefully to my ideas and vision for the space, and then brought her creative expertise to the table to help bring those ideas to life.",
    },
    {
      img: Testimonial2,
      name: "Abrar Ahmed",
      review:
        "Amazing experience in establishing the interiors for our Dental clinic. The details they put into reality isn't even close to what anyone else would on paper. Quality is totally next level along with perfection in timing. Fantastic work guys!",
    },
    {
      img: Testimonial1,
      name: " Mahajan",
      review:
        "I am thrilled to share my wonderful experience of working with Interior Designer Jyoti for the kitchen design of my house. From the very beginning, Jyoti was extremely attentive to my needs and preferences. She listened carefully to my ideas and vision for the space, and then brought her creative expertise to the table to help bring those ideas to life.",
    },
    {
      img: Testimonial1,
      name: " Mahajan",
      review:
        "I am thrilled to share my wonderful experience of working with Interior Designer Jyoti for the kitchen design of my house. From the very beginning, Jyoti was extremely attentive to my needs and preferences. She listened carefully to my ideas and vision for the space, and then brought her creative expertise to the table to help bring those ideas to life.",
    },
    {
      img: Testimonial1,
      name: "Sahil Mahajan",
      review:
        "I am thrilled to share my wonderful experience of working with Interior Designer Jyoti for the kitchen design of my house. From the very beginning, Jyoti was extremely attentive to my needs and preferences. She listened carefully to my ideas and vision for the space, and then brought her creative expertise to the table to help bring those ideas to life.",
    },
    {
      img: Testimonial1,
      name: "Sahil Mahajan",
      review:
        "I am thrilled to share my wonderful experience of working with Interior Designer Jyoti for the kitchen design of my house. From the very beginning, Jyoti was extremely attentive to my needs and preferences. She listened carefully to my ideas and vision for the space, and then brought her creative expertise to the table to help bring those ideas to life.",
    },
  ];

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setvalue] = useState(0);
  const itemsperpage = 2;
  const startIndex = (currentPage - 1) * itemsperpage;
  const endIndex = startIndex + itemsperpage;
  const currentTestimonials = testimonial.slice(startIndex, endIndex);
  const totalPages = Math.ceil(testimonial.length / itemsperpage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div id="landingtestimonial" className="w-full flex justify-center bg-[#270405] my-48">
      <div className="w-[90%] max-w-[1920px] flex-col gap-14 text-[#F6EBDD] flex justify-center py-24">
        <div className="text-center">
          <Reusabletext text={"Testimonials: Hear From Our Cutomers"} white />
        </div>
        {/* testimonial section */}
        <div className="w-full flex lg:flex-row base:flex-col base:items-center  justify-between base:gap-6 lg:gap-[12rem]">
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className={currentPage === 1 ? "cursor-not-allowed" : "bg-inherit"}
            disabled={currentPage === 1}
          >
            <Image src={Arrow} className="w-80 lg:flex base:hidden" />
          </button>
          <div className="base:hidden lg:grid grid-cols-2 gap-[6rem]">
            {currentTestimonials.map((data, index) => {
              return (
                <div
                  key={index}
                  className="testibg p-9 pb-14 flex flex-col gap-7"
                >
                  <div className="flex gap-7">
                    <Image src={data.img} />
                    <div className="flex flex-col gap-1">
                      <p> {data.name}</p>
                      <div className="flex gap-1">
                        <Image src={Star} />
                        <Image src={Star} />
                        <Image src={Star} />
                        <Image src={Star} />
                        <Image src={Star} />
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-[min(1.3vw,1.3rem)]">
                    {data.review}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="base:flex lg:hidden gap-[6rem]">
            <div className="testibg p-9 pb-14 flex flex-col gap-7">
              <div className="flex gap-7">
                <Image src={Testimonial1} />
                <div className="flex flex-col gap-1">
                  <p> {testimonial[value].name}</p>
                  <div className="flex gap-1">
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                  </div>
                </div>
              </div>
              <div className="lg:text-[min(1.3vw,1.3rem)]">
                {testimonial[value].review}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className={
              currentPage === totalPages ? "cursor-not-allowed " : "bg-inherit"
            }
            disabled={currentPage === totalPages}
          >
            <Image
              src={Arrow}
              alt="pic"
              className="w-80 rotate-180 lg:flex base:hidden"
            />
          </button>
          <div className="flex-row gap-2 lg:hidden base:flex">
            <Image
              onClick={() => {
                if (value !== 0) {
                  setvalue(value - 1);
                }
              }}
              alt="pic"
              src={Arrow}
              className="base:w-14 lg:w-[min(2.5vw,2.5rem)]  base:flex lg:hidden"
            />
            <Image
              onClick={() => {
                if (value !== testimonial.length - 1) {
                  setvalue(value + 1);
                }
              }}
              alt="pic"
              src={Arrow}
              className="base:w-14 lg:w-[min(2.5vw,2.5rem)] rotate-180 base:flex lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
