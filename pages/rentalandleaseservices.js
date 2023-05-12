import React from "react";
import Rental from "../components/Rental.js";
import RentalServices from "../components/RentalServices.js";
import Feedback from "../components/Feedback.js";
import ServicesRentalMobile from "../components/ServicesRentalMobile.js";
import { useState, useEffect } from "react";

const rentalandleaseservices = () => {
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

        <Feedback />
      </div>
    </div>
  );
};
export default rentalandleaseservices;
