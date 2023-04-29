/** @format */

import react from "react"
import localFont from "next/font/local"
const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})
const MobileOurProject = () => {
	return (
		<div className="lg:hidden w-[100%] pt-[9.375vw]">
			<p className="relative items-center flex justify-center text-[3.75vw] leading-[5.625vw] tracking-[0.05em] text-[#A5787A] font-extrabold uppercase mb-[6.25vw]">
				/ our projects
			</p>
			<div className="flex flex-row justify-between pl-[5.93vw] pr-[7.18vw] pb-[8.43vw] ">
				<div className="flex flex-col text-[4.68vw] leading-[7.03vw] tracking-[0.05em] font-[300] italic uppercase">
					<div className="font-medium">-residential</div>
					<div>commercial</div>
					<div>restaurant</div>
				</div>
				<div className="w-[11.25vw] text-[2.20vw] leading-[2.743vw] tracking-[10%] font-[700] text-right">
					wE’vE bUiLt homes thAt brinG DrEAms COME trUE
				</div>
			</div>
			<div className="relative">
				<img
					src="rectangle269.png"
					className="w-[100vw]"
				></img>
				<div className="pl-[6.25vw]">
					{/* <img src="rectangle269.png" className="w-[100vw] z-[1]"></img> */}
					<div
						className={`${golden.className} absolute text-[15.625vw] leading-[15.625vw] tracking-[3%] top-[15.374vw] z-[10]`}
					>
						bonito{" "}
						<div className="rotate-[270deg] absolute left-[68.125vw] top-[3.125vw]  text-[5vw] leading-[8.43vw] tracking-[0.05em] font-bold">
							2020
						</div>
						designs
					</div>
				</div>
			</div>
			<div className="relative left-[52vw] top-[-10vw]">
				<img
					src="group 52.svg"
					className="absolute w-[45vw]"
				></img>
			</div>
		</div>
	)
}
export default MobileOurProject
