import React, { useState } from "react";
import Reusabletext from "./reusabletext";

const Faqs = () => {
  const questionAnswersArray = [
    {
      id: "01",
      question: "How involved will I be in the decision-making process?",
      answer:
        "When it comes to interiors, clients actively participate in the decision-making process. Client needs to communicate their needs, preferences, and budget while gathering inspiration and collaborating with  design professionals on design development. Clients make choices regarding cabinetry, countertops, flooring, lighting, and appliances. Clients review quotes, select specific products, and provide feedback throughout construction and installation. By being involved, clients can ensure that the final design aligns with their style, fulfills functional requirements, and remains within their budget.",
    },
    {
      id: "02",
      question:
        "How do you handle purchasing and procurement of materials and furnishings?",
      answer:
        "At Opulence design Kitchens, our purchasing and procurement process is meticulous. We carefully select reputable vendors, assessing materials for durability and aesthetics. Negotiating competitive prices, we ensure value for our customers. Timely delivery and quality control are prioritized, while efficient inventory management keeps projects on track. We communicate transparently with clients, involving them in decision-making for a truly satisfying modular kitchen experience.",
    },
    {
      id: "03",
      question:
        "Do you have partnerships or discounts with suppliers or vendors?",
      answer:
        "At Opulence design Kitchens, we prioritize delivering the best value to our customers by offering competitive pricing without compromising on quality. While we do not have any specific partnerships or discounts with suppliers or vendors, we maintain strong relationships with reliable and trusted suppliers to ensure the highest quality materials for our projects. Our focus is on providing personalized and high-quality modular kitchen solutions, and we strive to keep our pricing fair and transparent for all our valued customers.",
    },
    {
      id: "04",
      question:
        "What is the best method and frequency of communication?",
      answer:
        "The best method and frequency of communication depend on the context and preferences of the individuals or teams involved. It is important to choose a suitable method, such as face-to-face meetings, phone calls, emails, or video conferences, to ensure clear and efficient communication. Regular updates and check-ins strike a balance between staying informed and avoiding disruptions. Adaptability is key, as different situations may require different communication frequencies. Effective communication involves active listening, clarity in conveying information, and being open to feedback.",
    },
  ];
  return (
    <div className="w-[100%] bg-[#F6EBDD] flex flex-col  items-center text-[#270405]">
      <div className="w-[90%] max-w-[1920px] py-[5vw]">
        <Reusabletext text={"Frequently Asked Questions"} />
        {questionAnswersArray.map((data, index) => {
          return (
            <div key={index}>
              <SingleFaq
                id={data.id}
                question={data.question}
                answer={data.answer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;

const SingleFaq = ({ id, question, answer }) => {
  const [ans, setAns] = useState(false);

  return (
    <div className="border-t border-[#270405]">
      <div
        className="flex justify-between gap-4 lg:gap-10 py-[3rem] cursor-pointer"
        onClick={() => {
          setAns(!ans);
        }}
      >
        <div className="lg:text-[min(1.4vw,1.4rem)]">{id}</div>
        <div className="flex flex-col gap-5 lg:mr-[30rem] w-full">
          <div className="font-medium lg:text-[min(1.4vw,1.4rem)]"> {question}</div>
          {ans && <div className="">{answer}</div>}
        </div>

        {ans ? (
          <div className=" lg:flex base:hidden lg:mr-[10rem]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 19.6875L15 10.3125L24.375 19.6875"
                stroke="#270405"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className="lg:flex base:hidden rotate-180 lg:mr-[10rem]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 19.6875L15 10.3125L24.375 19.6875"
                stroke="#270405"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
