import React, { useEffect, useState } from "react";
import ServicesComp from "../components/ServicesComp";
import OurServices from "../components/OurServices";
import Navbar from "../components/Navbar";
import TransitionScreen from "../components/TransitionScreen";
import Services4 from "../components/Services4";
import ServicesBottom from "../components/ServicesBottom";
import ServicesBottomMobile from "../components/ServicesBottomMobile";
import Footer from "../components/Footer";
import Imgs4 from "../components/Imgs4";

const Services = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 1020) {
        return setIsMobileDevice(true);
      }
      return setIsMobileDevice(false);
    }
  }, []);

  console.log(isMobileDevice);
  return (
    <div className=" w-full lg:px-[40px] cursor-none text-black ">
      <TransitionScreen />
      <OurServices />

      {!isMobileDevice ? <ServicesBottom /> : <ServicesBottomMobile />}
      <Imgs4 />
      {/* <Footer /> */}
    </div>
  );
};

export default Services;
