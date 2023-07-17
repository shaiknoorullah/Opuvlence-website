import React, { useState } from "react";
import Reusabletext from "./reusabletext";

const Faqs = () => {
  const questionAnswersArray = [
    {
      id: "01",
      question:
        "Lorem ipsum dolor sit amet consectetur Sagittis id consectetur sagittis id?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.Ornare amet ligula ornare lacus aliquam aenean. Eu lacusimperdiet urna amet ",
    },
    {
      id: "02",
      question:
        "Lorem ipsum dolor sit amet consectetur Sagittis id consectetur sagittis id?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.Ornare amet ligula ornare lacus aliquam aenean. Eu lacusimperdiet urna amet ",
    },
    {
      id: "03",
      question:
        "Lorem ipsum dolor sit amet consectetur Sagittis id consectetur sagittis id?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.Ornare amet ligula ornare lacus aliquam aenean. Eu lacusimperdiet urna amet ",
    },
    {
      id: "04",
      question:
        "Lorem ipsum dolor sit amet consectetur Sagittis id consectetur sagittis id?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.Ornare amet ligula ornare lacus aliquam aenean. Eu lacusimperdiet urna amet ",
    },
  ];
  return (
    <div className="w-[100%] bg-[#F6EBDD] flex flex-col  items-center text-[#270405]">
      <div className="w-[90%] py-[5vw]">
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
        <div>{id}</div>
        <div className="flex flex-col gap-5 lg:mr-[30rem] w-full">
          <div className="font-medium"> {question}</div>
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