/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OurExpertise from "../components/ourExpertise";
import OurProject from "../components/ourProject";
import Batholic from "../components/batHolic";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/testimonials";
import Contact from "../components/Contact";

export default function Home() {
  // const mainRef = useRef(null)

  // useEffect(() => {
  // 	if (mainRef.current) {
  // 		const mainRefVar = mainRef.current.children

  // 		gsap.fromTo(
  // 			mainRefVar,
  // 			{
  // 				y: -10,
  // 				opacity: 0,
  // 			},
  // 			{
  // 				y: 0,
  // 				opacity: 1,
  // 				duration: 0.5,
  // 				delay: 0.5,
  // 				stagger: 0.2,
  // 				ease: "power2.out",
  // 			}
  // 		)
  // 	}
  // }, [])

  return (
    <div className="bg-[#F5E1E2]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <OurExpertise /> */}
	  /* <Navbar />
      <Hero />
	  <OurExpertise /> 
	  {/* <OurProject /> */}
	  <Testimonials />
	  <Contact />
	

      {/* <main
				ref={mainRef}
				className="w-screen min-h-screen flex justify-center items-center"
			>
				<h1 className="text-[8vw] text-black font-bold">
					This is an auto generated next js template for
					opuvlence
				</h1>
			</main> */}
    </div>
  );
}
