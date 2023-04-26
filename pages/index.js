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
      <Hero />
      <Testimonials />
      <OurExpertise /> */}
      <OurProject />
      {/* <Contact /> */}
      {/* <Batholic /> */}
    </>
  );
}
