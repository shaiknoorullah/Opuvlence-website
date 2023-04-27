import React from "react";

const Imgs4 = () => {
  return (
    <div>
      <section className="w-[100%] mt-[50px] flex justify-center ">
        <div id="grid" className=" w-full   justify-center items-center ">
          <div id="gridItem1" className=" row-span-full">
            <img
              src="/img1.png"
              className=" relative  w-[350px] mt-[300px] z-[1000]  "
            />
          </div>

          <div id="gridItem2" className="   row-span-full self-start">
            <img
              src="/img2.png"
              className="w-[480px] mb-[100px] relative z-[100]  "
            />
          </div>

          <div id="gridItem3" className=" row-span-full">
            <img
              src="/img3.png"
              className="w-[550px] h-[400px]  object-fill mt-[320px] z-[1] "
            />
          </div>

          <div id="gridItem4" className=" self-start row-span-full">
            <img src="/img4.png" className="w-[300px] mt-[290px] " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imgs4;
