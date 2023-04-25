import React from "react";

const Imgs4 = () => {
  return (
    <div>
      <section className="w-[100%] mt-[150px] flex justify-center ">
        <div className=" w-full   justify-center items-center grid grid-cols-10">
          <div className="col-start-2 col-span-3 row-span-full">
            <img src="/img1.png" className=" w-[350px] mt-[300px] z-[10]  " />
          </div>

          <div className="col-span-3 col-start-4 row-span-full self-start">
            <img src="/img2.png" className="w-[400px] z-[100]  " />
          </div>

          <div className="col-span-3 col-start-6 row-span-full">
            <img src="/img3.png" className="h-[300px] mt-[320px] z-[1] " />
          </div>

          <div className="col-span-2 col-start-8  ml-[50px] self-start row-span-full">
            <img src="/img4.png" className="w-[250px] mt-[220px] " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imgs4;
