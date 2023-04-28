import NavLinks from "next/link";
import localFont from "next/font/local";

const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});
const poppins = localFont({
  src: "../styles/font/poppins/Poppins-SemiBold.woff2",
  variable: "--font-poppins",
});

const Navbar = () => {
  return (
    <nav className="flex flex-row relative  justify-between w-full pt-[25px] px-[40px] ">
      <h3 className="m-0  text-3xl-4 text-[#CAABAC] tracking-[0.1em] lg:leading-[20px] 2xl:leading-[24px] uppercase font-semibold  ">
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">Creating new</p>
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">heights of luxury</p>
        <p className="m-0 lg:text-[14px] 2xl:text-[18px] ">for the deserving</p>
      </h3>
      <NavLinks href={"/"}>
        <img
          className="relative w-[40px] h-[40px] shrink-0 object-cover cursor-pointer"
          alt=""
          src="/logo.png"
        />
      </NavLinks>
      <div className="flex flex-col items-end justify-center lg:gap-[8px] 2xl:gap-[12px] font-[700] ">
        <ul
          className={`text-black flex flex-col uppercase text-right 2xl:text-[18px]  2xl:leading-[30px] lg:text-[16px] lg:leading-[24px] ${poppins.className} font-[700]`}
        >
          <div
            className={`flex flex-row items-center justify-end gap-[15px]  `}
          >
            <div className="relative bg-black w-[20px] h-[2px] shrink-0  " />
            <NavLinks href="/" className="cursor-pointer  ">
              Home
            </NavLinks>
          </div>
          <NavLinks href="/" className="  cursor-pointer">
            about
          </NavLinks>
          <NavLinks href="/services" className="   cursor-pointe">
            services
          </NavLinks>
          <NavLinks href="/" className="  cursor-pointer">
            cases
          </NavLinks>
          <NavLinks href="/" className="  cursor-pointer">
            COntact
          </NavLinks>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
