import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const poppinsRegular = localFont({
  src: "../styles/font/poppins/Poppins-Regular.woff2",
});

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center base:py-[8rem] text-black lg:py-[12rem]
  "
    >
      <div
        className={`${golden.className} base:text-[1.8rem] lg:text-[min(3vw,5rem)] flex items-center justify-center w-full`}
      >
        OOPS
      </div>
      <div
        className={`${poppinsRegular.className} base:text-[1rem]  lg:text-[min(1.1vw,1.5rem)] font-light flex items-center text-center base:w-[80%] lg:w-[50%] justify-center`}
      >
      404 PAGE NOT FOUND
      </div>
      <div
        className={`${poppinsRegular.className} base:text-[1rem] lg:text-[min(1.1vw,1.5rem)] font-light flex items-center text-center base:w-[80%] lg:w-[50%] justify-center`}
      >
        The page you are looking for might have been removed or is temporary
        unavailable
      </div>
      <Link href={"/"} className="underline lg:text-[min(1.2vw,1.4rem)] font-semibold mt-8">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
