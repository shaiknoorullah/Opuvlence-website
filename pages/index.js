/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OurExpertise from "../components/ourExpertise";
import OurProject from "../components/ourProject";
import Batholic from "../components/batHolic";
import LoadingScreen from "../components/LoadingScreen";
import Testimonials from "../components/testimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import TransitionScreen from "../components/TransitionScreen";
import Imgs4 from "../components/Imgs4";

export default function Home() {
  return (
    <div className="bg-[#F5E1E2]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingScreen />
      <TransitionScreen />
      <Navbar />
      <Hero />
      <Imgs4 />
      <Testimonials />
      <OurExpertise />
      <OurProject />
      <Contact />
      {/* <Batholic /> */}
    </div>
  );
}
