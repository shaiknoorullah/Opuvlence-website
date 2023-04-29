/** @format */

import React from "react"
import CustomButton from "./section/customButton"
import { useLocomotiveScroll } from "react-locomotive-scroll"
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

import { lamore } from "../utils/fonts"

// number component

const NumberText = ({ number, text, state }) => {
	return (
		<div className={`flex w-[9rem]  flex-${state} `}>
			<div
				className={`${poppinsSemibold.className} text-black font-semibold base:text-[2.8rem] lg:text-[3.5rem]`}
			>
				{number}+
			</div>
			<div
				className={`${poppinsMedium.className} text-black w-[40%]  base:text-[0.9rem] lg:text-[1.5rem] font-medium lg:leading-[2.5rem] `}
			>
				{text}
			</div>
		</div>
	)
}

const OurExpertise = () => {
	const { scroll } = useLocomotiveScroll()

	return (
		<div
			data-scroll
			data-scroll-speed="1.2"
			className="w-full flex justify-center mt-[-170px] relative"
		>
			<div
				data-scroll
				data-scroll-speed="1.6"
				className={`base:w-[90%] max-w-[1900px]  lg:w-[95%] z-50 flex flex-col py-12`}
			>
				{/* our Expertise title */}
				<div className="flex lg:justify-start base:justify-center">
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
					className={`${lamore} lg:w-[30%] base:text-[1.5rem] lg:text-[1.8rem] lg:text-left base:text-center text-black leading-[2.4rem] font-[700] pt-8`}
				>
					25 YEARS OF EXPERIENCE IN INTERIOR DESIGN
				</div>

				{/* description for lg */}
				<div className="lg:flex base:hidden w-full">
					<div className="w-[35%]"></div>
					<div
						className={`${poppinsRegular.className.className} text-[0.9rem] w-[30rem] tracking-[7%] text-[#A5787A] leading-[1.5rem]`}
					>
						Using edge cutting technology to provide
						extremely reliable service Using edge cutting
						technology to provide extremely reliable service
						Using edge cutting technology to provide
						extremely reliable serviceUsing edge cutting
						technology to provide extremely reliable service
					</div>
				</div>

				{/* grid */}
				<div className="w-full grid base:grid-cols-2 lg:grid-cols-11 pt-9">
					<div class="col-span-6  w-full grid lg:grid-rows-3">
						{/* for desktop */}
						<div class="lg:row-span-2 lg:grid text-black lg:grid-cols-2 gap-3  hidden">
							<div>
								<NumberText
									number={"25"}
									text={"Years Experience"}
									state={"col"}
								/>
							</div>
							<div>
								<NumberText
									number={"32"}
									text={"Professional Team"}
									state={"col"}
								/>
							</div>
							<div className="hidden lg:flex">
								<NumberText
									number={"50"}
									text={"Awards Gained"}
									state={"row"}
								/>
							</div>
							<div className="hidden lg:flex">
								<NumberText
									number={"5,000"}
									text={"Projects Completed"}
									state={"row"}
								/>
							</div>
						</div>

						{/* for mobile */}

						<div className="base:flex relative lg:hidden justify-between">
							<div className="flex flex-col gap-3">
								<NumberText
									number={"25"}
									text={"Years Experience"}
									state={"col"}
								/>
								<NumberText
									number={"50"}
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
										number={"5,000"}
										text={"Projects Completed"}
										state={"col"}
										end={true}
									/>
								</div>
							</div>
						</div>

						{/* button */}
						<div class="row-span-1 hidden lg:flex  items-center">
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
					<div class="col-span-5 base:mt-[5rem] lg:mt-[-2rem] items-end  lg:pl-9 gap-6 lg:gap-9 grid grid-cols-3">
						{/* restaurant */}
						<div className="flex flex-col items-center gap-6">
							<div
								className={`text-[#524646] md:text-[1.3rem] sm:text-[9px] font-normal ${poppinsRegular.className}`}
							>
								75%
							</div>
							<div className="bg-[#A5787A] rounded-tl-full  w-full base:h-[9rem] lg:h-[min(15vw,22rem)]"></div>
							<div
								className={`text-[#A5787A] md:text-[1.3rem] sm:text-[9px]  font-semibold italic ${poppinsRegular.className}`}
							>
								RESTAURANT
							</div>
						</div>
						{/* residential */}
						<div className="flex flex-col items-center gap-6">
							<div
								className={`${poppinsRegular.className} text-[#524646] md:text-[1.3rem] sm:text-[9px]  font-normal`}
							>
								86%
							</div>
							<div className="bg-[#443C3D] rounded-t-full w-full base:h-[14.5rem] lg:h-[min(25vw,34rem)]"></div>
							<div
								className={`${poppinsRegular.className} text-[#A5787A] md:text-[1.3rem] sm:text-[9px]  font-semibold italic `}
							>
								RESIDENTIAL
							</div>
						</div>
						{/* coperate */}
						<div className="flex flex-col items-center gap-6">
							<div
								className={`text-[#524646] md:text-[1.3rem] sm:text-[9px]  font-normal ${poppinsRegular.className}`}
							>
								78%
							</div>
							<div className="bg-[#AB9D9E] rounded-tr-full w-full base:h-[11rem] lg:h-[min(20vw,28rem)]"></div>
							<div
								className={`text-[#A5787A] md:text-[1.3rem] sm:text-[9px]  font-semibold italic ${poppinsRegular.className} `}
							>
								CORPORATE
							</div>
						</div>
					</div>
				</div>
				{/* mobile description */}
				<div className="lg:hidden  w-full mt-10">
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
