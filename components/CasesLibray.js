/** @format */

import React, { useEffect } from "react"
import localFont from "next/font/local"
import Image from "next/image"

import { lamore } from "../utils/fonts"

// importing images statically
import Arrow from "../public/Vectorwhite.png"
import OurProject from "./ourProject"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})

// import images statically
import arch1 from "../public/architecture1.webp"
import arch2 from "../public/architecture2.webp"
import arch3 from "../public/architecture3.webp"
import arch4 from "../public/architecture4.webp"
import Link from "next/link"

const ProjectGrid = props => {
	return (
		<Link
			href={props.href}
			passHref
		>
			<div className="block cursor-pointer h-[820px]">
				<div className="w-[100%] h-[100%] relative flex flex-col justify-center items-center overflow-clip ">
					<div
						className={`${golden.className} z-[99] relative mix-blend-multiply w-[min(707px,36.8vw)] font-normal italic text-[min(100px,5.2vw)] leading-[(136.8px,7.125vw)] tracking-[0.175em] text-center text-black`}
					>
						{props.heading}
					</div>
					<div
						className={`font-normal z-[99] relative  w-[min(480px,25vw)] items-center italic text-[min(23px,1.197vw)] leading-[min(31.6px,1.645vw)] tracking-[0.1em] text-center text-black lowercase ${poppins.className}`}
					>
						{props.text}
					</div>
					<Image
						// data-scroll
						// data-scroll-speed="1.2"
						src={props.image}
						alt="project image"
						className="absolute top-[-50%] object-cover"
					></Image>
				</div>
			</div>
		</Link>
	)
}

const CasesLibrary = () => {
	return (
		<div
			// data-scroll-section
			className="w-[full]"
		>
			<div className="px-[min(20px,1.041vw)] max-w-[1920px] flex flex-col items-center justify-center">
				<div className="flex justify-center  ">
					<img src="image 8.png"></img>
				</div>

				<div className="flex w-[100%] lg:flex-row base:flex-col base:gap-[0.5rem] lg:gap-[0.5rem] base:mt-[40px] lg:mt-[0px]">
					<div className="base:w-[100%] lg:w-[5%] 3xl:mt-[291.4px] lg:mt-[15.2vw]">
						<div className=" 3xl:w-[90px] lg:w-[4.68vw]  relative  3xl:top-[520px] lg:top-[27.08vw] ">
							<div
								// className="flex flex-row items-center base:gap-[5.56vw] base:px-[3.125vw] 3xl:gap-[40px] lg:gap-[2.08vw]"
								className="flex flex-row items-center origin-top-left lg:-rotate-90 base:gap-[5.56vw] base:px-[3.125vw] md:px-[0px] 3xl:gap-[40px] lg:gap-[2.08vw]"
							>
								<div className="base:text-[3.43vw] base:leading-[5.15vw] base:tracking-[0.05em] 3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw]  tracking-[0.5%] font-medium italic uppercase text-[white]">
									residential
								</div>
								<Image
									alt="arrow"
									src={Arrow}
									className="base:w-[2.3vw] 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-90  ml-1"
								></Image>
								<div className="base:text-[3.43vw] base:leading-[5.15vw]  base:tracking-[0.05em] 3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
									commercial
								</div>
								<Image
									alt="arrow"
									src={Arrow}
									className="base:w-[2.3vw] 3xl:w-[12.17px]  3xl:h-[64.78px] lg:w-[0.633vw] lg:h-[3.37vw] rotate-90  ml-1"
								></Image>

								<div className="base:text-[3.43vw] base:leading-[5.15vw]  base:tracking-[0.05em] 3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase text-[white]">
									restaurant
								</div>
							</div>
						</div>
					</div>

					<div className=" base:w-[100%] lg:w-[95%] flex flex-col gap-[30px] text-white lg:pt-[80px]">
						<ProjectGrid
							href="/casestudies"
							image={arch1}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
						<ProjectGrid
							href="/casestudies"
							image={arch2}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
						<ProjectGrid
							href="/casestudies"
							image={arch3}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
						<ProjectGrid
							href="/casestudies"
							image={arch4}
							heading="Batholic plutonic"
							text="wE'vE bUiLt homes thAt brinG DrEAms COME trUE"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CasesLibrary
