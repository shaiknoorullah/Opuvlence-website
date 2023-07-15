import React from "react";
import Hero from "../../components/newlanding/Hero";
import WeProvide from "../../components/newlanding/WeProvide";
import LandingAboutus from "../../components/newlanding/LandingAboutus";
import Advantages from "../../components/newlanding/Advantages.js";

const Landing = () => {
  return (
    <div>
      {/* <Hero /> */}
      <WeProvide />
      <Advantages />
      <LandingAboutus />
    </div>
  );
};

export default Landing;
