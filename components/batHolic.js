import react from "react";
const Pluto = () => {
  const elements = [
    {
      picture: "rectangle 229.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque siLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitt",
    },
    {
      picture: "rectangle 230.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque siLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitt",
    },
  ];
  return (
    <div className="flex flex-col 3xl:gap-[76px] lg:gap-[3.95vw]">
      {elements.map((item, index) => {
        return (
          <div key={index} className="">
            <div
              className={`flex 3xl:gap-[73px] lg:gap-[3.802vw] ${
                index == 1 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <img
                src={item.picture}
                className="3xl:w-[526px] lg:w-[27.39vw] 3xl:h-[374px] lg:h-[19.47vw]"
              ></img>
              <div className="3xl:w-[1067px] lg:w-[55.57vw]  3xl:h-[360px]  lg:h-[18.75vw]  3xl:text-[22px] lg:text-[1.145vw] 3xl:leading-[40px] lg:leading-[2.0833vw] tracking-[10%]  text-[#A5787A] flex  items-center text-justify">
                {item.discription}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Batholic = () => {
  const images = [
    "Rectangle24.png",
    "Rectangle25.png",
    "Rectangle26.png",
    "Rectangle27.png",
    "Rectangle28.png",
  ];
  return (
    <div className="w-full max-w-[1920px] bg-[#270405] 3xl:pt-[105px] lg:pt-[5.46vw]">
      <div className="flex flex-row 3xl:gap-[33.97px] lg:gap-[1.7692vw]">
        <div className="h-[fit-content] lg:h-[fit-content] 3xl:w-[90px] lg:w-[4.68vw]  relative rotate-[270deg] 3xl:top-[520px] lg:top-[27.08vw] ">
          <div className="flex flex-row items-center 3xl:gap-[40px] lg:gap-[2.08vw]">
            <div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-[white]">
              residential
            </div>
            <img
              src="Vectorwhite.png"
              className="3xl:w-[12.17px] 3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-[90deg]"
            ></img>
            <div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
              commercial
            </div>
            <img
              src="Vectorwhite.png"
              className="3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-[90deg] ml-1"
            ></img>
            <div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
              restaurant
            </div>
          </div>
        </div>

        <div className="flex flex-col 3xl:gap-[50px] lg:gap-[2.60vw]">
          <div className="large-image">
            <img
              src={images[0]}
              alt="Large Image"
              layout="responsive"
              // width={1084}
              // height={646}
              className="3xl:w-[1084px] 3xxl:h-[646px] lg:w-[56.45vw] lg:h-[33.64vw]"
            />
          </div>
          <div className="flex flex-row 3xl:gap-[25.51px] lg:gap-[1.32vw] small-images">
            {images.slice(1).map((image, index) => (
              <div key={index} className="small-image">
                <img
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  layout="responsive"
                  // width={180.49}
                  // height={107.56}
                  className="3xl:w-[180.49px] 3xl:h-[107.56px] lg:w-[9.40vw] lg:h-[5.60vw]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col 3xl:gap-[62px] lg:gap-[3.22vw]">
          <div className="3xl:w-[509px] lg:w-[26.51vw] 3xl:text-[72px] lg:text-[3.75vw] 3xl:leading-[98.5px] lg:leading-[5.130vw] tracking-[17.5%] font-normal italic align-middle uppercase text-[white]">
            Batholic plutonic
          </div>
          <div className="3xl:w-[499px] lg:w-[25.989vw] 3xl:text-[22px] lg:text-[1.14vw] 3xl:leading-[40px] lg:leading-[2.083vw] tracking-[10%] font-normal italic align-middle  text-[#A5787A] 3xl:pl-[141px] lg:pl-[7.343vw]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sitLorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sitLorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit
          </div>
        </div>
      </div>
      <div className="3xl:pt-[85px]  3xl:pl-[102px] 3xl:pr-[152px] 3xl:pb-[79px] lg:pt-[4.42vw] lg:pl-[5.312vw] lg:pr-[7.91vw] lg:pb-[4.114vw]">
        <Pluto />
      </div>
      <div className="pl-[128px]">
        <button>button</button>
      </div>
    </div>
  );
};
export default Batholic;
