/** @format */

import react, { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import localFont from "next/font/local"

// Font files can be colocated inside of `pages`
const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})

// eslint-disable-next-line react/display-name
const LoadingScreen = forwardRef((props, ref) => {
	const loadingLogo = useRef(null)
	const paragraph = useRef(null)

	useEffect(() => {
		const loadingLogoVar = loadingLogo.current.children
		const paragraphVar = paragraph.current.children
		const tl = gsap.timeline()
		const tl2 = gsap.timeline()

		tl.fromTo(
			loadingLogoVar,
			{
				y: 40,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				ease: "power4.out",
				duration: 1,
				stagger: 0.1024,
			}
		).fromTo(
			paragraphVar,
			{
				y: 20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,

				ease: "power4.out",
				duration: 0.7,
				stagger: 0.05,
			}
		)
		gsap.fromTo(
			"#progress",
			{ opacity: 1, width: 0 },
			{ duration: 3, width: "100%", ease: "power3.Out" }
		)

		gsap.fromTo(
			"#img1",
			{ y: -350 },
			{ y: 0, duration: 1, delay: 0.7, ease: "power3.out" }
		)
		gsap.fromTo(
			"#img2",
			{ x: 1000 },
			{ x: 0, duration: 1, delay: 0.75, ease: "power3.out" }
		)
		gsap.fromTo(
			"#img3",
			{ x: -800 },
			{ x: 0, duration: 1, delay: 0.8, ease: "power3.out" }
		)
		gsap.fromTo(
			"#img4",
			{ y: 500 },
			{ y: 0, duration: 1, delay: 0.85, ease: "power3.out" }
		)
	}, [])

	return (
		<>
			<div
				ref={ref}
				id="loadingScreen1"
				className="absolute select-none top-0 left-0 scrollbar-hide z-[9999] bg-[#f6ebdd] w-[100%]  overflow-hidden text-left text-[186px] text-black "
			>
				<img
					className="base:hidden md:block absolute top-[0px] left-[0px] h-[230px]  object-contain"
					alt=""
					id="img1"
					src="/loadingbed.svg"
				/>

				<div
					className={`relative flex flex-col z-[999] justify-center items-center ${golden.className} text-[#270405] w-full h-screen`}
					id="text"
				>
					<h1
						ref={loadingLogo}
						className="text-[12vw] select-none"
					>
						{"Opuvlence".split("").map((char, idx) => {
							return (
								<span
									key={idx}
									className="inline-block"
								>
									{char}
								</span>
							)
						})}
					</h1>
					<div
						ref={paragraph}
						className={`${poppins.className} select-none md:w-[436px] base:w-[90vw] text-center overflow-hidden base:text-[16px] md:text-[28px] z-[100]`}
					>
						{"Elevating the status of luxury for the deserving"
							.split(" ")
							.map((char, idx) => {
								return (
									<span
										key={idx}
										className="inline-block ml-2"
									>
										{char}
									</span>
								)
							})}
						<p className="text-[22px] select-none mt-[30px] font-semibold text-black ">
							click anywhere to begin
						</p>
					</div>
				</div>
				<img
					className="base:hidden md:block absolute bottom-0 right-[100px] h-[274px] object-contain"
					alt=""
					id="img4"
					src="/loadingrightbottom.svg"
				/>

				<img
					className="base:hidden md:block absolute lg:top-[321px] md:top-[350px] left-0 lg:w-[650px] lg:h-[414px] md:w-[400px] md:h-[180px] object-contain"
					alt=""
					id="img3"
					src="/loading3.png"
				/>

				<img
					className="base:hidden md:block absolute top-[0px] right-0 w-[783px]  object-contain"
					alt=""
					id="img2"
					src="/loadingright.svg"
				/>
				<div
					id="progress"
					className="base:hidden md:block absolute bottom-0 left-[0px] bg-[#270405] w-[1920px] h-2"
				/>
			</div>
		</>
	)
})

export default LoadingScreen
