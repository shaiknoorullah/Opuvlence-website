import React from "react";
import ServicesReusable from "./reusable/ServicesReusable";
import localFont from "next/font/local";
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
  variable: "--font-poppins",
});

const Rental = () => {
  return (
    <>
      <ServicesReusable
        title="rental and lease services"
        imageUrl="/serviceshero.jpg"
        quote={`“In rooms where lovely harmonies prevail, Where all is simple,
      gracious, and serene, Where natural beauty needs no art to veil,
      Where order, light, and comfort reign supreme”`}
        className={`${golden.className}`}
        className2={`${poppins.className}`}
      />
    </>
  );
};

export default Rental;
