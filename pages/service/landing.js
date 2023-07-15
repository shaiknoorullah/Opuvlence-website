import React from "react";
import Hero from "../../components/newlanding/Hero";
import WeProvide from "../../components/newlanding/WeProvide";
import LandingAboutus from "../../components/newlanding/LandingAboutus";
import Advantages from "../../components/newlanding/Advantages.js";
import WhatweOffer from "../../components/newlanding/WhatweOffer.js";
import Download from "../../components/newlanding/Download";

const Landing = () => {
  return (
    <div>
      <Hero />
      <WeProvide />
      <Advantages />
      <LandingAboutus />
      <Download />
      <WhatweOffer />
    </div>
  );
};

export default Landing;
