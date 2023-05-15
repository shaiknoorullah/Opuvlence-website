import React, { useState } from "react";
import localFont from "next/font/local";
import CustomButton from "./section/customButton";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
  variable: "--font-poppins",
});

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleHover = (value) => {
    setRating(value);
  };

  const handleClick = (value) => {
    setSelectedRating(value);
  };
  return (
    <>
      <div
        // data-scroll-section
        id="contact"
        className=" w-full base:mt-[25px] lg:mt-[50px] base:px-[6.25vw] max-w-[1920px] lg:px-[40px] flex flex-col  justify-center mx-auto "
      >
        <div className="flex w-full justify-between ">
          <h1
            className={`lg:w-[70%] base:w-[100%] text-[#270405] uppercase base:text-[5vw] lg:text-[min(2.60vw,50px)] base:leading-[8.5vw] lg:leading-[min(120px,6.25vw)]  ${golden.className} base:tracking-[0.02em] lg:tracking-[0.04em] `}
          >
            Help us enhance our services by sharing your valuable feedback.
          </h1>
        </div>
        <div
          className={`w-full flex lg:flex-row base:flex-col mt-[34px] base:text-[4.375vw] lg:text-[18px] justify-between text-[#B25F62] font-[300] ${poppins.className} `}
        >
          <div className="base:w-full lg:w-[40%]">
            <div>
              <label className="block">Name</label>
              <input
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
                type="text"
              />
            </div>
            {/* <div>
              <label className="block base:mt-[14vw] lg:mt-[78px] ">
                Subject
              </label>
              <input
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
                type="text"
              />
            </div> */}
            <div>
              <label className="block base:mt-[14vw] lg:mt-[78px] ">
                {/* Subject */}
              </label>
              {/* <select
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
                type="text"
              /> */}
              <select
                // value="subject"
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid pb-[30px]  "
              >
                <option className="bg-inherit ">subject</option>
                <option typeof="bg-inherit">Website experience </option>
                <option typeof="bg-inherit">Support experience</option>
                <option typeof="bg-inherit">Service feedback</option>
              </select>
            </div>
            <div>
              <label className="block base:mt-[14vw] lg:mt-[78px] ">
                What do you think made our service so appealing to you?
              </label>
              <input
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
                type="text"
              />
            </div>
            <div>
              <label className="block base:mt-[14vw] lg:mt-[78px] ">
                If you could have one thing that you could change, what would it
                be?
              </label>
              <input
                className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
                type="text"
              />
            </div>
          </div>
          <div className="base:w-full lg:w-[40%] base:mt-[14vw] lg:mt-0 lg:text-right ">
            <div>
              <label className="block ">Email</label>
              <input
                className="w-full  outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
                type="text"
              />
            </div>
            <div>
              <label className="block base:mt-[14vw]  lg:mt-[78px]">
                Your Message
              </label>
              <input
                className="w-full bg-inherit border-b-[1px] border-b-[#B25F62] border-solid outline-none "
                type="text"
              />
            </div>
            <div>
              <label className="block base:mt-[14vw]  lg:mt-[78px]">
                what did you like the most about us?
              </label>
              <input
                className="w-full bg-inherit border-b-[1px] border-b-[#B25F62] border-solid outline-none "
                type="text"
              />
            </div>
            <div>
              <label className="block base:mt-[14vw]  lg:mt-[78px]">
                please explain your experience to us briefly.
              </label>
              <input
                className="w-full bg-inherit border-b-[1px] border-b-[#B25F62] border-solid outline-none "
                type="text"
              />
            </div>
          </div>
        </div>
        {/* Rating from 1 to 10 */}
        <div className="flex flex-col gap-[1.5rem] base:w-[100%] lg:w-[min(41vw,788px)] mt-[50px]">
          <div
            className={` mt-[34px] base:text-[4.375vw] lg:text-[min(1.041vw,20px)]  text-[#B25F62] font-[300] ${poppins.className} `}
          >
            How would you rate our service?
          </div>

          <div className="flex items-center justify-start flex-wrap">
            <div className="flex flex-wrap  base:gap-[3vw] lg:gap-[min(1.40vw,27px)]">
              {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
                <div
                  key={value}
                  className={`cursor-pointer base:w-[10.71vw]  base:text-[4.46vw] base:h-[10.71vw] lg:w-[min(2.8vw,54px)] lg:h-[min(2.8vw,54px)] lg:text-[min(1.14vw,22px)]  rounded-full flex items-center justify-center border-[#DECFBB] ${
                    value <= (selectedRating || rating)
                      ? "bg-[#5E2427]"
                      : "bg-[#DECFBB]"
                  }`}
                  onMouseEnter={() => handleHover(value)}
                  onMouseLeave={() => handleHover(0)}
                  onClick={() => handleClick(value)}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div
            className={` flex justify-between  base:text-[4.375vw] lg:text-[min(1.041vw,20px)]  text-[#B25F62] font-[300] ${poppins.className} `}
          >
            <div>Extremely Likely</div>
            <div>Extremely Unikely</div>
          </div>
        </div>

        <div className="mt-[70px] cursor-pointer  ">
          <CustomButton text={"Submit"} color={"black"} />
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
