const Navbar = () => {
  return (
    <nav className="flex flex-row  justify-between w-full pt-[50px] px-[40px] ">
      <h3 className="m-0  text-3xl-4 text-[#CAABAC] tracking-[0.1em] leading-[111%] uppercase font-semibold font-gilroy text-rosybrown-100 text-left">
        <p className="m-0">Creating new</p>
        <p className="m-0">heights of luxury</p>
        <p className="m-0">for the deserving</p>
      </h3>
      <img
        className="relative w-16 h-[49px] shrink-0 object-cover cursor-pointer"
        alt=""
        src="/logo.png"
      />
      <div className="flex flex-col items-end justify-center gap-[8px]">
        <div className="flex flex-row items-center justify-end gap-[15px]">
          <div className="relative bg-black w-[25px] h-0.5 shrink-0" />
          <p className="m-0  text-lg tracking-[0.08em] cursor-pointer leading-[18px] uppercase font-semibold font-gilroy text-black text-left">
            Home
          </p>
        </div>
        <p className="m-0  text-lg tracking-[0.08em] cursor-pointer uppercase leading-[18px]  font-semibold font-gilroy text-black text-left">
          about
        </p>
        <p className="m-0  text-lg tracking-[0.08em]  cursor-pointer uppercase leading-[18px]  font-semibold font-gilroy text-black text-left">
          services
        </p>
        <p className="m-0  text-lg tracking-[0.08em] cursor-pointer uppercase leading-[18px]  font-semibold font-gilroy text-black text-left">
          cases
        </p>
        <p className="m-0  text-lg tracking-[0.08em] cursor-pointer uppercase leading-[18px]  font-semibold font-gilroy text-black text-left">
          COntact
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
