/** @format */

import react, { useEffect, useRef } from "react"
import localFont from "next/font/local"
import Image from "next/image"
import Gettoknow from "../public/homepage/gettokow.webp"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import SplitType from "split-type"
import { useAnimateOnScroll } from "../utils/hooks/useAnimateOnScroll"
import Getmobile from "../public/homepage/GetMobile.webp"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
})

gsap.registerPlugin(ScrollTrigger)

const About = () => {
	const { targetRef: imageRef, isIntersecting } =
		useAnimateOnScroll(1)

	useEffect(() => {
		if (isIntersecting) {
			gsap.fromTo(
				[imageRef.current, "#section-name-about"],
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: "power2.out",
				}
			)

			const text1 = new SplitType("#textLeft")
			const text2 = new SplitType("#textRight")
			gsap.fromTo(
				[text1.lines, text2.lines],
				{
					y: 100,
				},
				{
					y: 0,
					stagger: 0.1,
					duration: 0.5,
					ease: "power2.out",
				}
			)
			gsap.fromTo(
				["#textLeft", "#textRight"],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				}
			)
		}
	}, [isIntersecting])

	return (
		<div
			id="about-section"
			data-scroll
			data-scroll-speed="1.4"
			className="w-[100%] snap-center md:min-h-[min(100vh,900px)] base:min-h-[min(100vh,500px)] md:hidden base:flex justify-center items-center relative lg:flex flex-col max-w-[1920px] base:mt-[4rem] lg:mt-[-10rem]"
		>
			<div
				className={`lg:w-full grid grid-cols-[1.2fr_2.8fr] base:text-[3.75vw] base:leading-[5.62vw] base:tracking-[0.15vw] base:pt-[5vw] base:pb-[6.40vw] 3xl:text-[25px] 3xl:leading-[37.5px] 3xl:tracking-[0.5px] font-extrabold text-[#A5787A] 3xl:pt-[20px] 3xl:pb-[41px] lg:text-[1.2626vw] lg:leading-[1.89vw] lg:pt-[1.01vw] lg:pb-[2.07vw] uppercase ${poppins.className}`}
			>
				<p
					id="section-name-about"
					className={`${poppins.className} opacity-0 font-extrabold col-start-2 text-[min(20px,1.3vw)]`}
				>
					/ About
				</p>
			</div>
			<div className="base:pl-[6.25vw] max-w-[80%] base:pr-[6.25vw] 3xl:pl-[191px] 3xl:pr-[191px] lg:pl-[9.64vw] lg:pr-[9.64vw] lg:flex lg:flex-row relative lg:gap-[11.41vw] 3xl:gap-[226px] z-[100]">
				<div
					id="textLeft"
					className={`base:w-[60.56vw] z-[99] overflow-hidden opacity-0 absolute top-0 left-0 base:text-[8.88vw] base:leading-[14.88vw] base:tracking-[2.46vw] 3xl:w-[656px] 3xl:text-[115px] 3xl:leading-[157.32px] 3xl:tracking-[17.5px] font-normal ${golden.className} lg:text-[5.80vw] lg:leading-[7.94vw] lg:tracking-[0.88vw] lg:w-[33.1313vw] text-black`}
				>
					get to know
					<br />
					us
				</div>
				<div
					id="textRight"
					className={`text-right absolute z-[99] overflow-hidden opacity-0 right-0 bottom-0 base:mt-[20vw] base:w-[100] text-black base:text-[8.88vw] base:leading-[14.88vw] base:tracking-[2.46vw] 3xl:mt-[320px] lg:mt-[17.161616vw]   3xl:w-[656px] 3xl:text-[115px] 3xl:leading-[157.32px] 3xl:tracking-[17.5px] font-normal ${golden.className} text-right lg:text-[5.80vw] lg:leading-[7.94vw] lg:tracking-[0.88vw] lg:w-[33.1313vw]`}
				>
					A<br />
					Little
					<br />
					better
				</div>
				{/* lg */}
				<Image
					ref={imageRef}
					alt="A Project Image"
					src={Gettoknow}
					// data-scroll
					// data-scroll-speed="1.2"
					className="will-change-auto opacity-0 z-0 3xl:top-[245px] top-[20%] 3xl:right-[400px] rounded-[50px] lg:right-[23vw]"
				/>
			</div>

			{/* base */}
			<div className="md:hidden absolute">
				<Image
					src={Getmobile}
					className="w-[100vw] relative top-[38.123vw] rounded-[5rem] md:px-10"
				/>
				<img
					src="mobile267.png"
					className="relative w-[30.93vw] z-[100] left-[69.375vw] top-[5.625vw]"
				></img>
			</div>
			{/* <div>kbd</div> */}
		</div>
	)
}
export default About
