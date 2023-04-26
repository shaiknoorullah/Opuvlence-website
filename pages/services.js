import React from "react";
import ServicesComp from "../components/ServicesComp";
import OurServices from "../components/OurServices";

const Services = () => {
  return (
    <div className="bg-[#F5E1E2] w-full h-screen px-[40px] ">
      <OurServices />
      <ServicesComp />
    </div>
  );
};

export default Services;
