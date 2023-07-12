import React from "react";
import Rental from "../components/Rental.js";
import RentalServices from "../components/RentalServices.js";
import Feedback from "../components/FeedbackForm.js";
import ServicesRentalMobile from "../components/ServicesRentalMobile.js";
import { useState, useEffect } from "react";
import WhyChooseUs from "../components/WhyChooseUs.js";
import HowDoesIt from "./HowDoesIt.js";
import Embrace from "../components/Embrace.js";
import WhyChooseMobile from "../components/WhyChooseMobile.js";
import HowDoesItMob from "../components/HowDoesItMob.js";

const Rentalandleaseservices = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 1020) {
        return setIsMobileDevice(true);
      }
      return setIsMobileDevice(false);
    }
  }, []);
  return (
    <div className="w-full flex justify-center text-black">
      <div className="w-[95%] ">
        <Rental />
        {!isMobileDevice ? <RentalServices /> : <ServicesRentalMobile />}
        <div className="lg:block base:hidden">
          <WhyChooseUs />
        </div>
        <WhyChooseMobile />
        <div className="lg:block base:hidden">
          <HowDoesIt />
        </div>
        <HowDoesItMob />
        <Embrace />

        {/* <Feedback /> */}
      </div>
    </div>
  );
};
export default Rentalandleaseservices;
