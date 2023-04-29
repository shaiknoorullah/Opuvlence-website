/** @format */

import Navbar from "../components/Navbar"
import localFont from "next/font/local"
import CustomButton from "./section/customButton"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// static import images

import heroImage from "../public/heroImage.webp"
import Image from "next/image"

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
		// console.log(heading.children)

		const tl = gsap.timeline()

		// console.log(heading.childNodes.)
		// gsap.from(heading.children, {
		// 	stagger: 0.5,
		// })

		// heading.childNodes.forEach((element, idx) => {
		// console.log(element, idx)
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
				delay: 4.5,
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
					delay: 4.5,
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
				delay: 5,
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
				delay: 5.5,
				ease: "power2.out",
			}
		)
	}, [])

	return (
		<div
			// data-scroll-section
			className=" w-[100%] relative z-[1000] flex justify-center base:px-[20px] lg:px-[40px]  "
		>
			<section className="flex lg:flex-row base:flex-col max-w-[1920px] lg:items-start mt-[20px] lg:justify-between lg:mr-12 w-full text-left ">
				<div className="flex flex-col base:items-center w-full lg:items-start justify-start gap-[30px]">
					<h1 className="m-0  text-[#270405] base:text-[2rem]  2xl:tracking-[10px] lg:tracking-[7px]  xl:text-[62px] 2xl:text-[78px] uppercase font-[300] lg:leading-[min(5vw,90px)] 2xl:leading-[100px] ">
						<div
							className={`w-full base:flex flex-col base:justify-center lg:justify-start base:items-center lg:items-start  ${golden.className} `}
						>
							<div
								id="heading"
								className="tracking relative base:text-center lg:text-left"
							>
								<p
									// ref={block}
									className="tracking base:text-center lg:text-left overflow-clip"
								>
									{"Taking the"
										.split("")
										.map((char, idx) => {
											return (
												<span
													key={idx}
													className={`inline-block ${
														char == " "
															? "ml-7"
															: "ml-[-7px]"
													}`}
												>
													{char}
												</span>
											)
										})}
								</p>
								<p className="tracking base:text-center lg:text-left overflow-clip">
									{"living standards"
										.split("")
										.map((char, idx) => {
											return (
												<span
													key={idx}
													className={`inline-block ${
														char == " "
															? "ml-7"
															: "ml-[-7px]"
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
															? "ml-7"
															: "ml-[-7px]"
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
					<div className="lg:hidden base:inline-block w-full h-[min(500px,60vh)] relative overflow-clip rounded-tl-full rounded-tr-full">
						<Image
							className=" absolute top-0 lg:right-[10] object-fill "
							// className=" lg:h-[650px] 2xl:h-[820px] pr-[100px]  object-cover "
							alt="image of a luxury chair"
							src={heroImage}
						/>
					</div>
					<p
						id="description"
						className={`m-0 base:text-center lg:text-left text-[#A5787A]  lg:text-[min(1.3vw,20px)] 2xl:text-[22px] tracking-wide lg:leading-[30px] 2xl:leading-[34px] font-[400] flex flex-col items-start lg:w-[500px] ${poppins.className}`}
					>
						{`Welcome to our Interior Design company in Bangalore! We specialize in Home & Commercial Decor, Furniture Design, Space Planning, Custom Interiors, Renovation, & Luxury Design. Let us transform your space into something truly extraordinary. Contact us today for bespoke solutions tailored to your unique needs.`
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
						{" "}
						<CustomButton
							text="Say Hello"
							color={"black"}
							href={"#contact"}
						/>
					</div>
				</div>
				<div
					id="heroImage"
					data-scroll
					data-scroll-speed="1.7"
					className="w-[min(712px,40vw)] h-[min(782px,75vh)] base:hidden lg:inline-block relative overflow-clip rounded-tl-full rounded-tr-full"
				>
					<Image
						data-scroll
						data-scroll-speed="1.5"
						className="lg:inline-block base:hidden absolute top-[-20px] lg:right-[10] h-[800px] "
						// className=" lg:h-[650px] 2xl:h-[820px] pr-[100px]  object-cover "
						alt="image of a luxury chair"
						src={heroImage}
					/>
				</div>
			</section>
		</div>
	)
}

export default Hero
