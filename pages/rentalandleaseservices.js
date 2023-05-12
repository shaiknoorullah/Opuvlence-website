import React from "react";
import Rental from "../components/Rental.js";
import RentalServices from "../components/RentalServices.js";

const rentalandleaseservices = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] ">
        <Rental />
        <RentalServices />
      </div>
    </div>
  );
};
export default rentalandleaseservices;
