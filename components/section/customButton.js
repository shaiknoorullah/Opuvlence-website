import Link from "next/link";
import React, { useEffect, useRef } from "react";

const CustomButton = ({ text, color, href }) => {
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
  <a href={href}>  <div ref={buttonRef} className="relative ">
      <div className={`font-black font-sans text-[1.4rem] uppercase text-${color} spacing tracking-[0.7rem]`}>
        {text}
      </div>
      <div className={color==="white"?`circleblack absolute bottom-[-27px] left-[-20px]`:`circle absolute bottom-[-27px] left-[-20px]`}></div>
    </div></a>
  );
};

export default CustomButton;
