/** @format */

import Navbar from "../components/Navbar"
import localFont from "next/font/local"
import CustomButton from "./section/customButton"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import Image from "next/image"
import Heroimg from "../public/homepage/heroImg.webp"
import { Parallax } from "./Parallax"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-Light.woff2",
	variable: "--font-poppins",
})
const Hero = () => {
	useEffect(() => {
		const heading = document.getElementById("heading")
		const description =
			document.getElementById("description")

		const tl = gsap.timeline()

		gsap.fromTo(
			heading.children,
			{
				y: 70,
				opacity: 0,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				delay: 0.5,
				ease: "power2.out",
			}
		)
		heading.childNodes.forEach((element, idx) => {
			// console.log(element, idx)
			gsap.fromTo(
				element.children,
				{
					y: 70,
					opacity: 0,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.07,
					delay: 0.5,
					ease: "power2.out",
				}
			)
		})

		gsap.fromTo(
			description.children,
			{
				y: 20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.05,
				delay: 1,
				ease: "power2.out",
			}
		)
		gsap.fromTo(
			"#heroImage",
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				delay: 1.5,
				ease: "power2.out",
			}
		)
	}, [])

	return (
		<div className=" w-[100%] relative z-[1000] flex justify-center base:px-[20px] base:mt-5 lg:mt-0 lg:px-[40px]  ">
			<section
				data-scroll-section
				className="flex lg:flex-row base:flex-col max-w-[1920px] lg:items-start lg:justify-between lg:mr-12 w-full text-left "
			>
				<div className="flex flex-col base:items-center base:w-[100%]  lg:w-[max(970px,50vw)] lg:items-start justify-start gap-[30px]">
					<h1
						data-scroll
						className="m-0 text-[#270405] base:text-[24px]  2xl:tracking-[10px] lg:tracking-[7px]  xl:text-[62px] 2xl:text-[78px] uppercase font-[300] lg:leading-[min(5vw,90px)] 2xl:leading-[100px] "
					>
						<div
							className={`w-full flex flex-col base:justify-center lg:justify-start base:items-center lg:items-start ${golden.className}`}
						>
							<div
								id="heading"
								className="tracking relative base:text-center lg:text-left"
							>
								<p
									// ref={block}
									className="tracking base:text-cente lg:text-left overflow-clip"
								>
									{"Taking the"
										.split("")
										.map((char, idx) => {
											return (
												<span
													key={idx}
													className={`inline-block ${
														char == " "
															? "base:ml-3 md:ml-7"
															: "base:ml-[0px] md:ml-[-7px]"
													}`}
												>
													{char}
												</span>
											)
										})}
								</p>
								<p className="tracking base:text-cente lg:text-left overflow-clip">
									{"living standards"
										.split("")
										.map((char, idx) => {
											return (
												<span
													key={idx}
													className={`inline-block ${
														char == " "
															? "base:ml-3 md:ml-7"
															: "base:ml-[0px] md:ml-[-7px]"
													}`}
												>
													{char}
												</span>
											)
										})}
								</p>
								<p className="tracking base:text-center lg:text-left overflow-clip">
									{"to new heights"
										.split("")
										.map((char, idx) => {
											return (
												<span
													key={idx}
													className={`inline-block ${
														char == " "
															? "base:ml-3 md:ml-7"
															: "base:ml-[0px] md:ml-[-7px]"
													}`}
												>
													{char}
												</span>
											)
										})}
								</p>
							</div>
						</div>
					</h1>
					{/* image for mobile */}
					<div className="lg:hidden base:inline-block base:w-[280px] md:w-[max(710px,40vw)] base:h-[350px] md:h-[min(500px,60vh)] relative overflow-clip rounded-tl-full rounded-tr-full">
						<Image
							className="  lg:top-0 lg:right-[10] object-fill "
							alt="image of a luxury chair"
							src={Heroimg}
						/>
					</div>
					<p
						id="description"
						className={`m-0 base:text-center lg:text-left text-[#A5787A]  lg:text-[min(1.3vw,20px)] 2xl:text-[22px] tracking-wide lg:leading-[30px] 2xl:leading-[34px] font-[400] flex flex-col items-start lg:w-[500px] ${poppins.className}`}
					>
						{`Opuvlence is a full-service interior design firm specializing in creating beautiful, functionalspaces for residential and commercial clients. With over 4 years of experience in the industry,our team of designers have a proven track record of delivering exceptional results.

`
							.split(/\r?\n/)
							.map((char, idx) => {
								return (
									<span
										key={idx}
										className="inline-block"
									>
										{char}
									</span>
								)
							})}
					</p>
					<div className="lg:mt-10 base:mt-3">
						<CustomButton
							text="Say Hello"
							color={"black"}
							href={"#contact"}
						/>
					</div>
				</div>
				<div
					id="heroImage"
					className="w-[min(712px,40vw)] bg-blue-500 h-[min(782px,75vh)] base:hidden lg:inline-block relative overflow-clip rounded-tl-full rounded-tr-full"
				>
					<Parallax
						speed="-1"
						position="top"
					>
						<Image
							className="lg:block base:hidden absolute top-[-25px] w-[min(750px,50vw)] object-cover lg:right-0 "
							alt="image of a luxury chair"
							src={Heroimg}
						/>
					</Parallax>
				</div>
			</section>
		</div>
	)
}

export default Hero
