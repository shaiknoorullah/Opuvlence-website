import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import CustomButton from "./section/customButton";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-Light.woff2",
  variable: "--font-poppins",
});
const Hero = () => {
  return (
    <div className=" w-[100%] relative z-[1000] base:py-[3rem] flex justify-center base:px-[20px] lg:px-[40px]  ">
      <section className="flex lg:flex-row base:flex-col max-w-[1920px] items-start mt-[20px] justify-between  w-full text-left ">
        <div className="flex flex-col base:items-center lg:items-start justify-start gap-[30px]">
          <h1 className="m-0  text-[#270405] base:text-[2rem]  2xl:tracking-[10px] lg:tracking-[7px]  xl:text-[62px] 2xl:text-[78px] uppercase font-[300] lg:leading-[90px] 2xl:leading-[100px] ">
            <span
              className={`w-full base:flex flex-col base:justify-center lg:justify-start base:items-center lg:items-start  ${golden.className} `}
            >
              <p className="tracking base:text-center lg:text-left">
                Taking the
              </p>
              <p className="tracking base:text-center lg:text-left">
                living standards
              </p>
              <p className="tracking base:text-center lg:text-left">
                to new heights
              </p>
            </span>
          </h1>

          <img
            className="  lg:hidden base:inline-block  object-fill "
            // className=" lg:h-[650px] 2xl:h-[820px] pr-[100px]  object-cover "
            alt=""
            src="/heroImg.png"
          />
          <p
            className={`m-0 base:text-center lg:text-left text-[#A5787A] lg:text-lg 2xl:text-[22px] tracking-wide lg:leading-[30px] 2xl:leading-[34px]  font-[400] flex items-end lg:w-[670px] ${poppins.className}`}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </p>
          <div className="mt-10 self-start pl-4">
            {" "}
            <CustomButton text="Say Hello" href={"#contact"} />
          </div>
        </div>
        <img
          className=" 2xl:w-[670px] lg:w-[550px] pr-[100px] lg:inline-block base:hidden  object-fill "
          // className=" lg:h-[650px] 2xl:h-[820px] pr-[100px]  object-cover "
          alt=""
          src="/heroImg.png"
        />
      </section>
    </div>
  );
};

export default Hero;
