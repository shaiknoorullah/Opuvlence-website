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
    <div className=" w-[100%] px-[40px] mt-[50px] ">
      <section className="flex flex-row items-start mt-[20px] justify-between  w-full text-left ">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <h1 className="m-0  text-[#270405]  tracking-[5px]  text-[62px] uppercase font-[300] leading-[80px] ">
            <span className={`w-full  ${golden.className} `}>
              <p className="tracking">Taking the</p>
              <p className="tracking">living standards</p>
              <p className="tracking">to new heights</p>
            </span>
          </h1>
          <p
            className={`m-0 text-[#A5787A] text-lg tracking-normal leading-[30px]  font-[400] flex items-end w-[600px] ${poppins.className}`}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </p>
          <button className="cursor-pointer  [border:none] p-0 bg-[transparent] w-[250px] h-[55px] shrink-0">
            <div className=" bg-[#000000] py-[12px] text-[20px] tracking-[0.1em] rounded-r-[50px]  uppercase font-[700] font-nunito-sans text-white text-center">
              say hello
            </div>
          </button>
        </div>
        <img
          className=" h-[650px] pr-[100px]  object-cover "
          alt=""
          src="/heroImg.png"
        />
      </section>
    </div>
  );
};

export default Hero;
