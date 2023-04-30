/** @format */

import React from "react"
import localFont from "next/font/local"
import { lamore, golden, poppins } from "../utils/fonts"
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

// Font files can be colocated inside of `pages`

const AboutUsBehind = () => {
	return (
		<div className="w-full flex base:justify-center lg:justify-center py-14 ">
			<div className="base:w-[95%] max-w-[1920px] lg:w-[97.5%]">
				{/* grid  */}
				<div className="base:flex base:flex-col lg:grid grid-cols-12">
					<div className="row-span-full col-start-1 col-end-11 flex w-full flex-col z-50">
						<div
							className={`hidden lg:inline-block text-[min(4.8vw,6rem)] text-black tracking-[0.7rem] leading-[min(7vw,130px)] ${golden} capitalize  `}
						>
							Behind every great company is a great founder
							- meet ours.
						</div>
						<div
							className={`lg:hidden base:text-[2.8rem] lg:text-[4.8vw]  self-center justify-self-center tracking-[0.7rem] leading-[65px] ${golden} capitalize leading-[5rem] `}
						>
							meet our visionary founder
						</div>

						{/* For desktop quotation */}
						<div
							className={`lg:inline-block base:hidden w-[32rem] text-black text-[min(1.5vw,1.4rem)]  italic  pt-[11rem] ${poppinsSemibold.className}`}
						>
							“Using edge cutting technology to provide
							extremely reliable service Using edge cutting
							technology to provide extremely reliable
							service Using edge cutting technology to
							provide extremely reliable service Using edge
							cutting technology”
						</div>
					</div>
					<div className="row-span-full lg:pl-[5rem] col-start-7 col-end-13 z-0">
						<img
							className="rounded-br-[5rem]"
							src="/aboutus.jpg"
						/>
					</div>

					{/*for mobile  */}
					<div
						className={`lg:hidden base:inline-block  mt-4 lg:text-[1.3rem] w-[80%] font-extrabold italic ${poppins}`}
					>
						“Lorem Ipsum dolor sit amet consectetur
						adipscing lore lorem is lorem ipsum dolor sit
						amet adipscing Lorem Ipsum dolor sit amet”
					</div>
				</div>
				<div
					className={`${poppinsRegular.className} base:text-right lg:text-left lg:ml-[25rem] lg:mr-[5rem] text-[1.1rem] py-11 text-black leading-8 `}
				>
					Lorem ipsum dolor sit amet consectetur adipiscing
					elit Ut et massa mi. Aliquam in hendrerit urna.
					Pellentesque sitLorem ipsum dolor sit amet
					consectetur Lorem ipsum dolor sit amet consectetur
					adipiscing elit Ut et massa mi. Aliquam in
					hendrerit urna. Pellentesque sitLorem ipsum dolor
					sit amet consectetur Lorem ipsum dolor sit amet
					consectetur adipiscing elit Ut et massa mi.
					Aliquam in hendrerit urna. Pellentesque sitLorem
					ipsum dolor sit amet consectetur
				</div>
			</div>
		</div>
	)
}

export default AboutUsBehind
