/** @format */

import react from "react"
import localFont from "next/font/local"
import ScrollContainer from "react-indiana-drag-scroll"
import { useEffect } from "react"
import { gsap } from "gsap"
import Link from "next/link"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})

// const Residential = () => {
// 	return (
// 		<div className="flex flex-row relative w-full 3xl:gap-[12px] lg:gap-[0.625vw]">
// 			{/* <div className="flex flex-row  absolute bottom-[36px] left-[-200px]"> */}
// 			<img
// 				src="ourproject.png"
// 				className="w-[25vw]"
// 			></img>
// 			<div className="flex flex-col">
// 				<p className="font-extrabold 3xl:text-[25px] lg:text-[1.3vw] 3xl:leading-[37.5px] lg:leading-[1.95vw] tracking-[0.5%] mt-[-9px]">
// 					2020
// 				</p>
// 				<p className="font-medium 3xl:text-[89.14px] lg:text-[4.642vw] 3xl:leading-[133.71px] lg:leading-[6.93vw] tracking-[0.5%] rotate-[270deg] absolute 3xl:left-[328px] lg:left-[16.5vw] 3xl:mt-[228px] lg:mt-[11.875vw] uppercase">
// 					{" "}
// 					Residential
// 				</p>
// 			</div>
// 			{/* </div> */}
// 		</div>
// 	)
// }
// const OurProject = () => {
// 	return (
// 		<div
// 			// data-scroll-section
// 			className="w-full max-w-[1920px] items-center flex justify-center "
// 		>
// 			<div className="font-poppins w-[98%] z-50 ">
// 				<div className="w-[65%] justify-center font-extrabold text-[1.3rem] text-[#A5787A] flex pt-[20px]">
// 					/ OUR PROJECTS
// 				</div>
// 				<div className="flex flex-row 3xl:gap-[168px] lg:gap-[8.75vw]">
// 					<text className="3xl:w-[583px] lg:w-[30.36vw]  3xl:text-[33px] lg:text-[1.71vw]  3xl:leading-[45.34px] lg:leading-[2.361vw] tracking-[10%] font-bold 3xl:pl-[50px] 3xl:pt-[41px] lg:pl-[2.60vw] lg:pt-[2.13vw] snap-center font-[lamore]">
// 						WE&apos;VE BUILT HOMES THAT BRING DREAMS COME
// 						TRUE
// 					</text>
// 					<div className="3xl:w-[442px] lg:w-[23.02vw] 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] lg:leading-[1.294vw] tracking-[7%] font-normal  3xl:pt-[86px] lg:pt-[4.47vw]  snap-center">
// 						Using edge cutting technology to provide
// 						extremely reliable service Using edge cutting
// 						technology to provide extremely reliable service
// 						Using edge cutting technology to provide
// 						extremely reliable serviceUsing edge cutting
// 						technology to provide extremely reliable service
// 					</div>
// 				</div>
// 				{/* reuse */}
// 				<div className="3xl:w-[587px] lg:w-[30.57vw] 3xl:pl-[50px] lg:pl-[2.60vw]  relative pb-[10px]">
// 					<div className="flex flex-row items-center 3xl:gap-[15px] lg:gap-[0.78vw] absolute 3xl:top-[-13.59px] lg:top-[-0.708vw]">
// 						<div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase">
// 							residential
// 						</div>
// 						<img
// 							src="OurprojectVector.png"
// 							className=" 3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]"
// 						></img>
// 						<div className="3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
// 							commercial
// 						</div>
// 						<img
// 							src="OurprojectVector.png"
// 							className="3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]  ml-1"
// 						></img>
// 						<div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
// 							restaurant
// 						</div>
// 					</div>
// 				</div>
// 				<div className="grid w-[700px] h-[550px] grid-cols-[0.3fr_2.2fr_0.7fr_1.9fr_0.5fr_0.4fr] grid-rows-[0.1fr_1.6fr_0.8fr]">
//           <div
//             style={{
//               gridArea: "2 / 1 / 3 / 5",
//             }}
//             className={` ${golden.className} pointer-events-none select-none w-[792px]   3xl:text-[188px] lg:text-[9.79vw] lg:leading-[9.79vw] 3xl:leading-[188px] tracking-[3%] font-normal font-[gilroy] uppercase mt-0 z-[10]`}
//           >
//             Bonito Designs
//           </div>
//           <div
//             style={{
//               gridArea: "3 / 2 / 4 / 4",
//             }}
//             className="grid-cols-1 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] ml-8 mr-[-3.6rem] lg:leading-[1.29vw] tracking-[7%] font-normal z-[10]"
//           >
const Residential = props => {
	return (
		<div className="flex flex-row relative w-full 3xl:gap-[12px] lg:gap-[0.625vw]">
			<img
				src={props.src}
				className="3xl:w-[558px] lg:w-[29.06vw] 3xl:h-[558px] lg:h-[29vw] "
			></img>
			<div className="flex flex-col">
				<p className="font-extrabold 3xl:text-[25px] lg:text-[1.3vw] 3xl:leading-[37.5px] lg:leading-[1.95vw] tracking-[0.5%] mt-[-9px]">
					{props.date}
				</p>
				<p className="font-medium  3xl:text-[87.14px] lg:text-[4.642vw] 3xl:leading-[133.71px] lg:leading-[6.93vw] tracking-[0.5%] rotate-[270deg] absolute 3xl:left-[328px] lg:left-[16.5vw] 3xl:mt-[228px] lg:mt-[11.875vw] uppercase">
					{props.type}
				</p>
			</div>
		</div>
	)
}

const Grid = props => {
	return (
		<div className="flex flex-col row-span-full col-start-1 col-end-7 row-start-1 row-end-3 z-40">
			<div
				className={` ${golden.className} pointer-events-none select-none   3xl:text-[188px] lg:text-[9.79vw] lg:leading-[9.79vw] 3xl:leading-[188px] tracking-[0.03em] font-normal font-[gilroy] uppercase 3xl:mt-[15px] lg:mt-[0.78vw] z-[10] `}
			>
				{props.tittle}
			</div>
			<div className="font-medium  ml-[3.5rem] z-30">
				{props.discription}
			</div>
		</div>
	)
}
const OurProject = () => {
	useEffect(() => {
		const viewMoreButtonRef = document.getElementById(
			"viewMoreButton"
		)

		const onMouseOver = () => {
			gsap.to("#buttonArrow", {
				y: -20,
				duration: 0.3,
				ease: "power2.out",
			})
		}

		const onMouseLeave = () => {
			gsap.to("#buttonArrow", {
				y: 0,
				duration: 0.3,
				ease: "power2.out",
			})
		}

		viewMoreButtonRef.addEventListener(
			"mouseover",
			onMouseOver
		)
		viewMoreButtonRef.addEventListener(
			"mouseleave",
			onMouseLeave
		)

		return () => {
			viewMoreButtonRef.removeEventListener(
				"mouseover",
				onMouseOver
			)
			viewMoreButtonRef.removeEventListener(
				"mouseleave",
				onMouseLeave
			)
		}
	}, [])
	return (
		<div className="w-full max-w-[1920px] items-center flex justify-center ">
			<div className="font-poppins w-[98%] z-50 ">
				<div className="grid grid-cols-[1.3fr_0.4fr_1.2fr_1.2fr] grid-rows-[0.4fr_0.6fr_0.7fr_0.5fr_0.4fr]">
					<div
						style={{
							gridColumnStart: 2,
							gridColumnEnd: 3,
							gridRowStart: 1,
							gridRowEnd: 2,
						}}
						className="w-[100%] justify-center font-extrabold text-[1.3rem] text-[#A5787A] flex pt-[20px]"
					>
						/ OUR PROJECTS
					</div>
					<text
						style={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRowStart: 3,
							gridRowEnd: 4,
						}}
						className=" 3xl:w-[583px] text-black lg:w-[30.36vw]  3xl:text-[33px] lg:text-[1.71vw]  3xl:leading-[45.34px] lg:leading-[2.361vw] tracking-[10%] font-bold 3xl:pl-[50px] 3xl:pt-[41px] lg:pl-[2.60vw] lg:pt-[2.13vw] snap-center font-[lamore]"
					>
						WE&apos;VE BUILT HOMES THAT BRING DREAMS COME
						TRUE
					</text>
					<div
						style={{
							gridColumnStart: 3,
							gridColumnEnd: 4,
							gridRowStart: 3,
							gridRowEnd: 5,
						}}
						className="3xl:w-[442px] text-[#270405] lg:w-[23.02vw] 3xl:text-[16px] lg:text-[0.833vw] 3xl:leading-[24.85px] lg:leading-[1.294vw] tracking-[7%] font-normal  3xl:pt-[86px] lg:pt-[4.47vw]  snap-center"
					>
						Using edge cutting technology to provide
						extremely reliable service Using edge cutting
						technology to provide extremely reliable service
						Using edge cutting technology to provide
						extremely reliable serviceUsing edge cutting
						technology to provide extremely reliable service
					</div>
					{/* reuse */}
					<div
						style={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRowStart: 5,
							gridRowEnd: 6,
						}}
						className="3xl:w-[587px] lg:w-[30.57vw] 3xl:pl-[50px] lg:pl-[2.60vw]  relative"
					>
						<div className="flex text-black flex-row items-center 3xl:gap-[15px] lg:gap-[0.78vw] absolute 3xl:top-[-13.59px] lg:top-[-0.708vw]">
							<div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%] font-medium italic uppercase">
								residential
							</div>
							<img
								src="OurprojectVector.png"
								className=" 3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]"
							></img>
							<div className="3xl:text-[22.15px] 3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
								commercial
							</div>
							<img
								src="OurprojectVector.png"
								className="3xl:h-[12.17px] 3xl:w-[64.78px] lg:h-[0.633vw] lg:w-[3.37vw]  ml-1"
							></img>
							<div className="3xl:text-[22.15px]  3xl:leading-[33.22px] lg:text-[1.153vw] lg:leading-[1.73vw] tracking-[0.5%]  italic uppercase">
								restaurant
							</div>
						</div>
					</div>
				</div>

				<ScrollContainer
					style={{
						display: "flex",
						gap: "100px",
						overflow: "scroll",
					}}
				>
					<ProjectCard
						src={projectImage}
						title="Bonito Designs"
						description="Indulge in the world of luxury interior design with our exceptional showcase of projects. From opulent residential homes to lavish commercial spaces, we cater to the most discerning clients in Bangalore. Slide through our stunning designs and let us inspire you to transform your space into a beautiful, functional work of art that exudes luxury."
						year="2022"
						type="residential"
					/>
					<ProjectCard
						src={projectImage}
						title="Bonito Designs"
						description="Indulge in the world of luxury interior design with our exceptional showcase of projects. From opulent residential homes to lavish commercial spaces, we cater to the most discerning clients in Bangalore. Slide through our stunning designs and let us inspire you to transform your space into a beautiful, functional work of art that exudes luxury."
						year="2022"
						type="residential"
					/>
					<ProjectCard
						src={projectImage}
						title="Bonito Designs"
						description="Indulge in the world of luxury interior design with our exceptional showcase of projects. From opulent residential homes to lavish commercial spaces, we cater to the most discerning clients in Bangalore. Slide through our stunning designs and let us inspire you to transform your space into a beautiful, functional work of art that exudes luxury."
						year="2022"
						type="residential"
					/>
					<Link
						href="/project"
						passHref
						id="viewMoreButton"
						className="relative flex flex-col"
					>
						<svg
							id="buttonArrow"
							className="scale-[0.7] -translate-y-[25px] translate-x-[80px] origin-bottom-right"
							width="46"
							height="140"
							viewBox="0 0 46 140"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M23.0001 228.497L23.0001 0.229981M23.0001 0.229981C21.8532 19.5573 20.0816 32.7193 17.6852 39.7159C15.2888 46.7147 9.92678 54.3681 1.60351 62.6805M23.0001 0.229981C24.1469 19.5573 25.9186 32.7193 28.315 39.7159C30.7114 46.7147 36.0734 54.3681 44.3967 62.6805"
								stroke="black"
								stroke-width="2.19697"
							/>
						</svg>
						<div
							className={`${golden.className} uppercase absolute w-max bottom-0 left-0 origin-top-left -rotate-90 translate-y-[50px] text-[min(54px,2.81vw)]`}
						>
							view more
						</div>
					</Link>
				</ScrollContainer>
				{/* <div className="block h-[800px] overflow-hidden">
          <div className=" flex gap-[100px] overflow-x-scroll scrollbar-hide">
            
          </div>
        </div> */}
			</div>
		</div>
	)
}
export default OurProject
