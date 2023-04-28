/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import OurExpertise from "../components/ourExpertise";
import OurProject from "../components/ourProject";
import Batholic from "../components/batHolic";
import LoadingScreen from "../components/LoadingScreen";
import Testimonials from "../components/testimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import TransitionScreen from "../components/TransitionScreen";
import MobileOurProject from "../components/Mobileourproject";
import About from "../components/About";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <LoadingScreen /> */}
      {/* <TransitionScreen /> */}
      {/* <Navbar />
      <Testimonials />
    <OurExpertise /> */}
      <OurProject />
      {/* <Contact /> */}
      {/* <Batholic /> */}
      {/* <MobileOurProject /> */}
      {/* <Hero /> */}
      {/* <div className="w-full flex justify-center">
        <About />
      </div> */}
      {/* <Contact /> */}
    </>
  );
}
