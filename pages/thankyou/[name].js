import React from "react";
import localFont from "next/font/local";
import { useRouter } from "next/router";
const golden = localFont({
  src: "../../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
// const poppins = localFont({
//   src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
//   variable: "--font-poppins",
// });
const poppinsExtrabold = localFont({
  src: "../../styles/font/poppins/Poppins-ExtraBold.woff2",
});
const poppinsRegular = localFont({
  src: "../../styles/font/poppins/Poppins-Regular.woff2",
});
const poppinsMedium = localFont({
  src: "../../styles/font/poppins/Poppins-Medium.woff2",
});
const poppinsSemibold = localFont({
  src: "../../styles/font/poppins/Poppins-SemiBold.woff2",
});

const Name = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div
      className="flex flex-col w-full items-center justify-center text-black  py-[12rem]
  "
    >
      <div
        className={`${golden.className} base:text-[1.8rem] lg:text-[min(3vw,5rem)] flex items-center justify-center w-full`}
      >
        THANKYOU <span> &nbsp;{name}</span>
      </div>
      <div
        className={`${poppinsRegular.className} base:text-[1rem] lg:text-[min(1.1vw,1.5rem)] font-light flex items-center text-center w-[50%] justify-center`}
      >
        We appreciate your message and assure you that our team will prioritize
        your request and respond to you swiftly.
      </div>
      <div className="underline text-[min(1.2vw,1.4rem)] font-semibold mt-8">Go to homepage</div>
    </div>
  );
};

export default Name;
