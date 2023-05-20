import React from "react";
import Rental from "../components/Rental.js";
import RentalServices from "../components/RentalServices.js";
import Feedback from "../components/FeedbackForm.js";
import ServicesRentalMobile from "../components/ServicesRentalMobile.js";
import { useState, useEffect } from "react";
import WhyChooseUs from "../components/WhyChooseUs.js";
import HowDoesIt from "./HowDoesIt.js";
import Embrace from "../components/Embrace.js";

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
    <div className="w-full flex justify-center">
      <div className="w-[95%] ">
        <Rental />
        {!isMobileDevice ? <RentalServices /> : <ServicesRentalMobile />}
        <WhyChooseUs />
        <HowDoesIt />
        <Embrace />

        {/* <Feedback /> */}
      </div>
    </div>
  );
};
export default Rentalandleaseservices;
