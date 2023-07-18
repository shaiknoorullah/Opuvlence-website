import React from "react";

const Reusabletext = ({text,white}) => {
  return (
    <div className={white?"font-[600] base:text-[1.9rem] lg:text-[2.5rem] text-[#F6EBDD] base:mb-5 lg:mb-[5rem]":"font-[600] base:text-[1.9rem] lg:text-[2.5rem] text-[#270405] base:mb-5 lg:mb-[5rem]"}>
      {text}
    </div>
  );
};

export default Reusabletext;
