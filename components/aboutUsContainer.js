/** @format */

import React from "react"
import { lamore, golden } from "../utils/fonts"
import localFont from "@next/font/local"

const poppins = localFont({
	src: "../styles/font/poppins/Poppins-Regular.woff2",
	variable: "--font-poppins",
})

const AboutUsContainer = ({ left }) => {
	return (
		<div className="w-full flex justify-center base:py-6 lg:py-[150px]">
			<div className="w-[95%] max-w-[1920px] flex">
				<div
					className={
						left
							? `${poppins.className} max-w-[90rem] font-normal leading-[40px] bg-[#270405] flex items-center lg:pl-[5rem] base:rounded-br-[9rem] base:rounded-tl-[9rem] lg:pr-[10rem] lg:self-start base:self-center px-5 base:justify-self-center lg:justify-self-start lg:rounded-r-full w-full lg:mr-[12rem] py-[150px] text-white lg:text-[20px]`
							: `${poppins.className} max-w-[90rem] font-normal leading-[40px] bg-[#270405] flex items-center lg:pr-[5rem] base:rounded-bl-[9rem] base:rounded-tr-[9rem] lg:pl-[10rem] lg:self-start base:self-center px-5 base:justify-self-center lg:justify-self-end lg:rounded-l-full lg:ml-[12rem] py-[150px] text-white lg:text-[20px]`
					}
				>
					As passionate interior designers, we bring
					creativity, innovation, and expertise to every
					project. We paint with light, texture, and color
					to create luxury spaces that inspire and
					captivate. We take time to understand our
					clients&apos; needs, offering expertise and
					guidance to enhance their vision. From concept to
					completion, we&apos;re committed to delivering an
					exceptional experience and result that exceeds
					expectations. At our interior design company,
					we&apos;re not just creating beautiful spaces -
					we&apos;re creating homes that are functional,
					comfortable, and unforgettable.
				</div>
			</div>
		</div>
	)
}

export default AboutUsContainer
