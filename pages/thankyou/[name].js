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
      className="flex flex-col w-full items-center justify-center  py-[15rem]
  "
    >
      <div
        className={`${golden.className} base:text-[1.8rem] lg:text-[min(5vw,6rem)] flex items-center justify-center w-full`}
      >
        THANK YOU <span> &nbsp;  &nbsp;{name}</span>
      </div>
      <div
        className={`${poppinsRegular.className} base:text-[1rem] lg:text-[min(21.5vw,1.5rem)] font-light flex items-center justify-center w-full`}
      >
        WE WILL GET BACK TO YOU
      </div>
    </div>
  );
};

export default Name;
