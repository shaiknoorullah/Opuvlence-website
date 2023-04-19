const Hero = () => {
  return (
    <div className="relative w-full h-[1080px] text-left text-[22.4px] text-rosybrown-100 font-gilroy">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[1920px] h-[1080px]" />
        <img
          className="absolute top-[51px] left-[928px] w-16 h-[49px] object-cover"
          alt=""
          src="/image-20@2x.png"
        />
        <div className=" bg-black w-[25px] h-0.5" />
        <div className=" w-[1920px] h-[1080px]">
          <div className=" w-[1920px] h-[1080px]" />
          <div className=" w-[1820px] h-[137px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.1em] leading-[111%] uppercase font-semibold">
              <p className="m-0">Creating new</p>
              <p className="m-0">heights of luxury</p>
              <p className="m-0">for the deserving</p>
            </div>
            <nav className="absolute top-[0px] left-[1729px] flex flex-col items-end justify-center gap-[8px]">
              <div className="relative text-lg tracking-[0.08em] uppercase font-semibold font-gilroy text-black text-left">
                Home
              </div>
              <div className="relative text-lg tracking-[0.08em] uppercase font-semibold font-gilroy text-black text-left">
                about
              </div>
              <div className="relative text-lg tracking-[0.08em] uppercase font-semibold font-gilroy text-black text-left">
                services
              </div>
              <div className="relative text-lg tracking-[0.08em] uppercase font-semibold font-gilroy text-black text-left">
                cases
              </div>
              <div className="relative text-lg tracking-[0.08em] uppercase font-semibold font-gilroy text-black text-left">
                COntact
              </div>
            </nav>
          </div>
          <h1 className="m-0 absolute top-[221px] left-[39px] text-[72px] tracking-[0.18em] leading-[0%] font-normal font-golden text-gray-100 flex items-end w-[967px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Taking the</p>
              <p className="m-0">living standards</p>
              <p className="m-0">to new heights</p>
            </span>
          </h1>
          <p className="m-0 absolute top-[552px] left-[50px] text-3xl tracking-[0.1em] font-poppins text-rosybrown-200 flex items-end w-[729px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </p>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[843px] left-[50px] w-[340px] h-[66px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-231xl rounded-br-231xl rounded-bl-none bg-gray-200 box-border w-[340px] h-[66px] border-[2px] border-solid border-black" />
            <div className="absolute top-[19px] left-[99px] text-3xl tracking-[0.1em] leading-[130.3%] uppercase font-black font-nunito-sans text-white text-center">
              say hello
            </div>
          </button>
          <img
            className="absolute top-[219px] left-[1083px] w-[712px] h-[861px] object-cover"
            alt=""
            src="/hero1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
