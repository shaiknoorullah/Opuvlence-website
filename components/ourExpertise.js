/** @format */

import React, { useEffect, useRef } from "react"
import CustomButton from "./section/customButton"
import localFont from "next/font/local"

const poppinsExtrabold = localFont({
	src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
})
const poppinsRegular = localFont({
	src: "../styles/font/poppins/Poppins-Regular.woff2",
})
const poppinsMedium = localFont({
	src: "../styles/font/poppins/Poppins-Medium.woff2",
})
const poppinsSemibold = localFont({
	src: "../styles/font/poppins/Poppins-SemiBold.woff2",
})

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useAnimateOnScroll } from "../utils/hooks/useAnimateOnScroll"

// number component

gsap.registerPlugin(ScrollTrigger)

const NumberText = ({ number, text, state }) => {
	return (
		<div className={`flex w-[9rem]  flex-${state} `}>
			<div
				className={`${poppinsSemibold.className} text-black font-semibold base:text-[2.8rem] md:text-[3.5rem] lg:text-[min(3.5vw,3.5rem)]`}
			>
				{number}+
			</div>
			<div
				className={`${poppinsMedium.className} text-black w-[40%]  base:text-[0.9rem] md:text-[1.8rem] lg:text-[min(1.8vw,1.5rem)] font-medium leading-8 lg:leading-[min(2.2vw,2.5rem)] `}
			>
				{text}
			</div>
		</div>
	)
}

const OurExpertise = () => {
	// const sectionRef = useRef(null)
	const { targetRef: sectionRef, hasIntersected } =
		useAnimateOnScroll(0.8)

	useEffect(() => {
		const sectionName =
			document.getElementById("section-name")

		const sectionStats =
			document.getElementById("section-stats")
		const sectionDescMob = document.getElementById(
			"section-description-mobile"
		).children
		const sectionStatsMobile = document.getElementById(
			"section-stats-mobile"
		).children
		const sectionGraph =
			document.getElementById("section-graph")

		const tl = gsap.timeline({
			ease: "power2.out",
			duration: 0.4,
			delay: 1,
		})

		if (hasIntersected == true) {
			tl.fromTo(
				"#section-name",
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
				}
			)
				.fromTo(
					"#section-title",
					{
						y: 20,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
					}
				)
				.fromTo(
					"#section-description",
					{ y: 20, opacity: 0 },
					{
						y: 0,
						opacity: 1,
					}
				)
				.fromTo(
					[sectionStats, sectionStatsMobile],
					{ y: 20, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						stagger: 0.05,
					}
				)
				.fromTo(
					"#section-button",
					{ y: 20, opacity: 0 },
					{
						y: 0,
						opacity: 1,
					}
				)
				.fromTo(
					"#section-graph",
					{ h: 0, opacity: 0 },
					{
						h: "initial",
						opacity: 1,
					}
				)
		}
	}, [hasIntersected])

	return (
		<div
			// data-scroll
			// data-scroll-speed="2"
			ref={sectionRef}
			className="w-full flex justify-center base:mt-[5rem] lg:mt-[70px] relative"
		>
			<div
				className={`base:w-[90%] max-w-[1900px]  lg:w-[95%] z-50 flex flex-col py-12`}
			>
				{/* our Expertise title */}
				<div
					id="section-name"
					className="flex lg:justify-start base:justify-center"
				>
					<div className="lg:flex hidden w-[30%]"></div>

					<div
						className={`${poppinsExtrabold.className} uppercase font-extrabold text-[1.2rem] text-[#A5787A] flex`}
					>
						<span className="inline-block text-[1rem] mr-3">
							/
						</span>
						<span className="inline-block mr-3 mt-[-3px]">
							our expertise
						</span>
					</div>
				</div>

				{/*25 years experience  */}
				<div
					id="section-title"
					className={`${poppinsRegular.className} lg:w-[30%] base:text-[1.5rem] lg:text-[1.8rem] lg:text-left base:text-center text-black leading-[2.4rem] font-[700] pt-8`}
				>
					25 YEARS OF EXPERIENCE IN INTERIOR DESIGN
				</div>

				{/* description for lg */}
				<div
					id="section-description"
					className="lg:flex base:hidden w-full"
				>
					<div className="w-[35%]"></div>
					<div
						className={`${poppinsRegular.className} text-[0.9rem] w-[30rem] tracking-[7%] text-[#A5787A] leading-[1.5rem]`}
					>
						Each member of our team brings unique strengths
						and experiences to the table, and we work
						collaboratively to achieve our objectives. We
						prioritize communication, trust, and
						accountability in all our interactions to ensure
						that we are working efficiently and effectively
						towards our common goals
					</div>
				</div>

				{/* grid */}
				<div className="w-full grid base:grid-cols-2 lg:grid-cols-11 pt-9">
					<div class="col-span-6  w-full grid lg:grid-rows-3">
						{/* for desktop */}
						<div
							id="section-stats"
							class="lg:row-span-2 lg:grid text-black lg:grid-cols-2 gap-3  hidden"
						>
							<div>
								<NumberText
									number={"10"}
									text={"Years Experience"}
									state={"col"}
								/>
							</div>
							<div>
								<NumberText
									number={"25"}
									text={"Professional Team"}
									state={"col"}
								/>
							</div>
							<div className="hidden lg:flex">
								<NumberText
									number={"32"}
									text={"Awards Gained"}
									state={"row"}
								/>
							</div>
							<div className="hidden lg:flex">
								<NumberText
									number={"2,000"}
									text={"Projects Completed"}
									state={"row"}
								/>
							</div>
						</div>

						{/* for mobile */}

						<div
							id="section-stats-mobile"
							className="base:flex lg:hidden justify-between md:mx-20"
						>
							<div className="flex flex-col gap-3">
								<NumberText
									number={"10"}
									text={"Years Experience"}
									state={"col"}
								/>
								<NumberText
									number={"25"}
									text={"Awards Gained"}
									state={"col"}
									end={true}
								/>
							</div>
							<div className="flex flex-col gap-3">
								<div className="self-end">
									<NumberText
										number={"32"}
										text={"Professional Team"}
										state={"col"}
									/>
								</div>
								<div className="self-end">
									<NumberText
										number={"2,000"}
										text={"Projects Completed"}
										state={"col"}
										end={true}
									/>
								</div>
							</div>
						</div>

						{/* button */}
						<div
							id="section-button"
							class="row-span-1 hidden lg:flex  items-center"
						>
							<div className="ml-8 pb-4">
								{" "}
								<CustomButton
									text={"Discover"}
									color={"black"}
									href="#contact"
								/>
							</div>
						</div>
					</div>

					{/* graph */}
					<div
						id="section-graph"
						class="col-span-5 base:mt-[5rem] lg:mt-[-2rem] lg:h-[520px] items-end lg:pl-9 gap-6 lg:gap-9 grid grid-cols-3"
					>
						{/* restaurant */}
						<div className="flex flex-col h-[100%] items-center justify-end gap-6">
							<div
								className={`text-[#524646] text-[1.3rem] font-normal ${poppinsRegular.className}`}
							>
								11%
							</div>
							<div className="bg-[#A5787A] rounded-tl-full w-full base:h-[9rem] lg:h-[21%]"></div>
							<div
								className={`text-[#A5787A] base:text-[0.8rem] lg:text-[1.3rem] font-semibold italic ${poppinsRegular.className}`}
							>
								Design Solution
							</div>
						</div>
						{/* residential */}
						<div className="flex flex-col h-full items-center justify-end gap-6">
							<div
								className={`${poppinsRegular.className} text-[#524646] text-[1.3rem] font-normal`}
							>
								77%
							</div>
							<div className="bg-[#443C3D] rounded-t-full w-full base:h-[14.5rem] lg:h-[87%]"></div>
							<div
								className={`${poppinsRegular.className} base:text-[0.8rem] lg:text-[1.3rem] text-[#A5787A]  font-semibold italic `}
							>
								Turnkey Solution
							</div>
						</div>
						{/* coperate */}
						<div className="flex flex-col h-full items-center justify-end gap-6">
							<div
								className={`text-[#524646] text-[1.3rem] font-normal ${poppinsRegular.className}`}
							>
								12%
							</div>
							<div className="bg-[#AB9D9E] rounded-tr-full w-full base:h-[11rem] lg:h-[32%]"></div>
							<div
								className={`text-[#A5787A] base:text-[0.8rem] lg:text-[1.3rem] font-semibold italic ${poppinsRegular.className} `}
							>
								Execution Solution
							</div>
						</div>
					</div>
				</div>
				{/* mobile description */}
				<div
					id="section-description-mobile"
					className="lg:hidden  w-full mt-10"
				>
					<div className="lg:text-[0.9rem] text-[1.2rem]  text-center text-[#A5787A] leading-[1.5rem]">
						Using edge cutting technology to provide
						extremely reliable service Using edge cutting
						technology to provide extremely reliable service
						Using edge cutting technology to provide
						extremely reliable serviceUsing edge cutting
						technology to provide extremely reliable service
					</div>
				</div>
			</div>

			{/* background text */}
			<div className="absolute hidden scale-[2] top-[18%]  lg:inline-block golden  opacity-70 text-[#DFCECF4D]">
				<img
					src="/achievements.svg"
					className="max-h-[15rem] ml-[25rem]"
				/>
			</div>
			<div className="absolute hidden scale-[2] bottom-[18%] lg:inline-block golden  opacity-70 text-[#DFCECF4D]">
				<img
					src="/achievements.svg"
					className="max-h-[15rem]"
				/>
			</div>
		</div>
	)
}

export default OurExpertise
