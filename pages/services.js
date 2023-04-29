import React from "react";
import ServicesComp from "../components/ServicesComp";
import OurServices from "../components/OurServices";
import Navbar from "../components/Navbar";
import TransitionScreen from "../components/TransitionScreen";
import Services4 from "../components/Services4";
import ServicesBottom from "../components/ServicesBottom";
import ServicesBottomMobile from "../components/ServicesBottomMobile";

const Services = () => {
  return (
    <div className="bg-[#F5E1E2] w-full h-screen lg:px-[40px] ">
      <TransitionScreen />
      <Navbar />
      {/* <ServicesBottom /> */}
      <ServicesBottomMobile />

      {/* <Services4 /> */}
    </div>
  );
};

export default Services;
