import NavLinks from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row  justify-between w-full pt-[25px] px-[40px] ">
      <h3 className="m-0  text-3xl-4 text-[#CAABAC] tracking-[0.1em] leading-[111%] uppercase font-semibold font-gilroy text-rosybrown-100 text-left">
        <p className="m-0 text-[14px]">Creating new</p>
        <p className="m-0 text-[14px]">heights of luxury</p>
        <p className="m-0 text-[14px]">for the deserving</p>
      </h3>
      <img
        className="relative w-[40px] h-[40px] shrink-0 object-cover cursor-pointer"
        alt=""
        src="/logo.png"
      />
      <div className="flex flex-col items-end justify-center gap-[8px]">
        <div className="flex flex-row items-center justify-end gap-[15px]">
          <div className="relative bg-black w-[25px] h-0.5 shrink-0" />
          <NavLinks
            href="/"
            className="m-0  text-sm tracking-[0.08em] cursor-pointer leading-[14px] uppercase font-semibold font-gilroy text-black text-left"
          >
            Home
          </NavLinks>
        </div>
        <NavLinks
          href="/"
          className="m-0  text-sm tracking-[0.08em] cursor-pointer uppercase leading-[14px]  font-semibold font-gilroy text-black text-left"
        >
          about
        </NavLinks>
        <NavLinks
          href="/"
          className="m-0  text-sm tracking-[0.08em]  cursor-pointer uppercase leading-[14px]  font-semibold font-gilroy text-black text-left"
        >
          services
        </NavLinks>
        <NavLinks
          href="/"
          className="m-0  text-sm tracking-[0.08em] cursor-pointer uppercase leading-[14px]  font-semibold font-gilroy text-black text-left"
        >
          cases
        </NavLinks>
        <NavLinks
          href="/"
          className="m-0  text-sm tracking-[0.08em] cursor-pointer uppercase leading-[14px]  font-semibold font-gilroy text-black text-left"
        >
          COntact
        </NavLinks>
      </div>
    </nav>
  );
};

export default Navbar;
