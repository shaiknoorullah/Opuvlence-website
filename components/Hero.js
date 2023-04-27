import Navbar from "../components/Navbar";
import localFont from "next/font/local";

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
    <div className=" w-[100%] relative z-[1000] flex justify-center px-[40px]  ">
      <section className="flex flex-row max-w-[1920px] items-start mt-[20px] justify-between  w-full text-left ">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <h1 className="m-0  text-[#270405]  2xl:tracking-[10px] lg:tracking-[7px]  xl:text-[62px] 2xl:text-[78px] uppercase font-[300] lg:leading-[90px] 2xl:leading-[100px] ">
            <span className={`w-full  ${golden.className} `}>
              <p className="tracking">Taking the</p>
              <p className="tracking">living standards</p>
              <p className="tracking">to new heights</p>
            </span>
          </h1>
          <p
            className={`m-0 text-[#A5787A] lg:text-lg 2xl:text-[22px] tracking-wide lg:leading-[30px] 2xl:leading-[34px]  font-[400] flex items-end w-[670px] ${poppins.className}`}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </p>
          <button className="cursor-pointer  [border:none] p-0 bg-[transparent] lg:w-[250px] 2xl:w-[340px] h-[55px] shrink-0">
            <div className=" bg-[#000000] lg:py-[12px] 2xl:py-[18px] lg:text-[20px] 2xl:text-[24px] tracking-[0.1em] rounded-r-[50px]  uppercase font-[700] font-nunito-sans text-white text-center">
              say hello
            </div>
          </button>
        </div>
        <img
          className=" 2xl:w-[670px] lg:w-[550px] pr-[100px]  object-fill "
          // className=" lg:h-[650px] 2xl:h-[820px] pr-[100px]  object-cover "
          alt=""
          src="/heroImg.png"
        />
      </section>
    </div>
  );
};

export default Hero;
