import React from "react";
import Reusabletext from "./reusabletext";

const LandingAboutus = () => {
  return (
    <div className="w-full flex justify-center base:py-14 lg:py-40 ">
      <div className="max-w-[1920px] w-[90%] base:py-[50px] md:py-[100px] text-[#270405]">
        {/* heading */}
        <div className="flex base:flex-col-reverse md:flex-row gap-[min(14vw,273px)] ">
          <div className="flex flex-col justify-between">
           <Reusabletext text={"About Us"} />
            <div className="md:text-[min(1.1vw,20px)] text-justify">
            At Opulence design  , our team unites diverse strengths and experiences, collaborating passionately to achieve shared objectives. We prioritize effective communication, trust, and accountability in every interaction, ensuring our collective efforts steer towards common goals. With 427+ joyous projects delivered, we continuously seek innovation and improvement. Quality is ingrained in our ethos, employing only the finest materials to create enduring, beautiful designs. Our customers' satisfaction reigns supreme, and we work diligently to surpass their expectations, leaving them delighted with the final outcome. For a personalized, high-quality modular kitchen experience, choose Opulence  where innovation meets customer-centric excellence.
            </div>
          </div>
          <img src="../landingAbout.png" className="md:w-[min(44vw,847px)] " />
        </div>
      </div>
    </div>
  );
};

export default LandingAboutus;
