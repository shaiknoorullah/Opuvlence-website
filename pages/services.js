import React, { useEffect, useState } from "react";
import ServicesComp from "../components/ServicesComp";
import OurServices from "../components/OurServices";
import Navbar from "../components/Navbar";
import TransitionScreen from "../components/TransitionScreen";
import Services4 from "../components/Services4";
import ServicesBottom from "../components/ServicesBottom";
import ServicesBottomMobile from "../components/ServicesBottomMobile";

const Services = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window) {
      console.log(window.innerWidth);
      if (window.innerWidth < 700) {
        return setIsMobileDevice(true);
      }
      return setIsMobileDevice(false);
    }
  }, []);

  console.log(isMobileDevice);
  return (
    <div className="bg-[#F5E1E2] w-full h-screen lg:px-[40px] ">
      <TransitionScreen />
      <Navbar />
      {!isMobileDevice ? <ServicesBottom /> : <ServicesBottomMobile />}

      {/* <Services4 /> */}
    </div>
  );
};

export default Services;
