import React, { useEffect, useRef } from "react";

const CustomButton = ({ text, color }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonRefVar = buttonRef.current;

    const onMouseOver = (e) => {
      console.log(e.clientX);
    };

    const onMouseLeave = (e) => {
      console.log("not hovering");
    };

    buttonRefVar.addEventListener("mouseover", onMouseOver);
    buttonRefVar.addEventListener("mouseleave", onMouseLeave);

    return () => {
      buttonRefVar.removeEventListener("mouseover", onMouseOver);
      buttonRefVar.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);
  return (
    <div ref={buttonRef} className="relative">
      <div className="font-black text-[1.4rem] uppercase text-blck spacing tracking-[1rem]">
        {text}
      </div>
      <div className="circle absolute bottom-[-20px] left-[-11px] "></div>
    </div>
  );
};

export default CustomButton;
