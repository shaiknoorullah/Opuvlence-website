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
      className={`flex ${golden.className} flex-col w-full items-center justify-center base:py-[8rem] text-black lg:py-[12rem]`}
    >
    <div className="lg:text-[min(5vw,5rem)]">COMING Soon</div>
      {/* <Link href={"/"} className="underline lg:text-[min(1.2vw,1.4rem)] font-semibold mt-8">
        Go to homepage
      </Link> */}
    </div>
  );
};

export default NotFoundPage;
