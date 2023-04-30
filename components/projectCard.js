/** @format */

import localFont from "@next/font/local"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import useAnimateOnScroll from "../utils/hooks/useAnimateOnScroll"
import { gsap } from "gsap"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})

const ProjectCard = ({
	title,
	description,
	year,
	type,
	src,
}) => {
	const projectCardRef = useRef(null)

	// useEffect(() => {
	// 	const cardRefVar = projectCardRef.current.children
	// 	gsap.fromTo(
	// 		cardRefVar,
	// 		{
	// 			y: 20,
	// 			opacity: 0,
	// 		},
	// 		{
	// 			y: 0,
	// 			opacity: 1,
	// 			duration: 0.5,
	// 			delay: 0.2,
	// 			ease: "power4.out",
	// 			stagger: 0.05,
	// 			scrollTrigger: {
	// 				trigger: projectCardRef.current,
	// 			},
	// 		}
	// 	)
	// }, [])

	return (
		<div
			ref={projectCardRef}
			data-scroll
			data-scroll-direction="horizontal"
			data-scroll-speed="1.3"
			data-scroll-draggable="true"
			className="select-none grid grid-flow-row grid-cols-[0.03fr_0.22fr_0.1fr_0.15fr_0.07fr_0.05fr] grid-rows-[0.1fr_1.6fr_0.45fr]"
		>
			<div
				style={{
					// gridArea: "2 / 1 / 3 / 4",
					gridColumnStart: 1,
					gridRowStart: 2,
					gridColumnEnd: 5,
					gridRowEnd: 3,
				}}
				className={` ${golden.className} text-black pointer-events-none w-[min(992px,47vw)] 3xl:ml-[-25px] lg:ml-[-1.30vw] 3xl:text-[188px] lg:text-[9vw] leading-[min(188px,9vw)] tracking-[0.03em] font-normal font-[gilroy] uppercase mt-0 z-[10]`}
			>
				{title}
			</div>
			<div
				style={{
					// gridArea: "3 / 2 / 4 / 4",
					gridColumnStart: 2,
					gridColumnEnd: 4,
					gridRowStart: 3,
					gridRowEnd: 4,
				}}
				className="3xl:text-[16px] text-black pointer-events-none w-[min(600px,32vw)] lg:text-[0.85vw] 3xl:leading-[24.85px] lg:leading-[1.29vw] tracking-[0.007em] font-normal z-[10]"
			>
				{description}
			</div>
			<div
				style={{
					// gridArea: "1 / 3 / 4 / 5",
					gridColumnStart: 3,
					gridColumnEnd: 6,
					gridRowStart: 1,
					gridRowEnd: 4,
				}}
				className="w-[min(588px,30.625vw)] cursor-pointer"
			>
				<Link
					href="/projects/residential"
					passHref
				>
					<Image
						src={src}
						alt="project image"
						className=""
					></Image>
				</Link>
			</div>

			<p
				style={{
					// gridArea: "1/ 7 / 1 / 6",
					gridColumnStart: 6,
					gridColumnEnd: 7,
					gridRowStart: 1,
					gridRowEnd: 2,
					justifySelf: "center",
				}}
				className="font-extrabold text-black w-[min(100px, 5vw)] 3xl:text-[25px] lg:text-[1.2vw]  leading-[min(37.5px,3vw)] tracking-[0.05em] mt-[-9px]"
			>
				{year}
			</p>
			<div
				style={{
					// gridArea: "2 / 6 / 4 / 7",
					gridColumnStart: 6,
					gridColumnEnd: 7,
					gridRowStart: 2,
					gridRowEnd: 4,
				}}
				className="relative w-[min(100px, 5vw)]"
			>
				<p className="uppercase text-black absolute bottom-0 left-0 origin-top-left -rotate-90 -translate-x-[min(25px,1.30vw)]  translate-y-[min(135px,6.7vw)]  text-[min(90px,4.6vw)]">
					{type}
				</p>
			</div>
		</div>
	)
}

export default ProjectCard
