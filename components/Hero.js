import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className=" w-[100%] px-[40px] ">
      <section className="flex flex-row items-start mt-[20px] justify-between  w-full text-left text-[72px] text-gray font-golden">
        <div className="flex flex-col items-start justify-start gap-[49px]">
          <h1 className="m-0  text-[#270405]  font-[GOLDEN] text-[72px] uppercase font-[300] leading-[80px] ">
            <span className=" w-full">
              <p>Taking the</p>
              <p>living standards</p>
              <p>to new heights</p>
            </span>
          </h1>
          <p className="m-0 text-[#A5787A] text-3xl tracking-[0.1em] font-poppins text-rosybrown-200 flex items-end w-[729px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </p>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[340px] h-[65px] shrink-0">
            <div className=" bg-[#000000] py-[18px] text-3xl tracking-[0.1em] rounded-r-[50px] leading-[130.3%] uppercase font-black font-nunito-sans text-white text-center">
              say hello
            </div>
          </button>
        </div>
        <img
          className=" h-[750px] pr-[100px]  object-cover "
          alt=""
          src="/heroImg.png"
        />
      </section>
      <section className="w-[100%] mt-[150px] h-[100vh] flex justify-center ">
        <div className=" relative flex justify-center items-center w-[100%] ">
          <img
            src="/img1.png"
            className=" w-[500px] z-[10] absolute top-[250px] left-0"
          />
          <img
            src="/img2.png"
            className="w-[500px] z-[1] absolute top-[-50px] left-[400px]"
          />
          <img
            src="/img3.png"
            className="h-[500px]  absolute bottom-[150px] left-[800px]"
          />
          <img
            src="/img4.png"
            className="w-[350px] absolute top-[100px] right-[50px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
