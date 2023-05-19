/** @format */

import React, { useRef, useEffect } from "react"
import localFont from "@next/font/local"
import { gsap } from "gsap"
import { useRouter } from "next/router"

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraLight.woff2",
	variable: "--font-poppins",
})

const ExampleComponent = () => {
	const contentRef = useRef(null)

	const router = useRouter()

	useEffect(() => {
		// hide content initially
		// gsap.set(contentRef.current, { visibility: "hidden" });

		// define animation timeline
		const tl = gsap.timeline({
			defaults: { ease: "power2.inOut" },
		})

		const setPositions = () => {
			const clientHeight = window.innerHeight
			const clientWidth = window.innerWidth
			const h1Height =
				document.getElementById("opuvlence").clientHeight
			const h1Width =
				document.getElementById("opuvlence").clientWidth
			const pHeight =
				document.getElementById("desc").clientHeight
			const pWidth =
				document.getElementById("desc").clientWidth

			document.getElementById(
				"opuvlence"
			).style.left = `7vw`
			document.getElementById("opuvlence").style.top = `${
				50 - h1Height / 20
			}vh`
		}
		setPositions()

		document.addEventListener("resize", setPositions())

		// document.getElementById("#opuvlence").style.left =
		tl.fromTo(
			contentRef.current,
			{
				clipPath: "inset(100vh 0 0 0)",
			},
			{
				clipPath: "inset(0px 0 0 0)",
				duration: 0.5,
				ease: "power3.out",
			}
		).to(contentRef.current, {
			clipPath: "inset(0px 0 100vh 0)",
			duration: 0.5,
			ease: "power3.out",
		})
	}, [])

	return (
		<div className="absolute top-0  pointer-events-none left-0 w-full h-screen ">
			<div
				ref={contentRef}
				className={`relative z-[999999] bg-[#270405] flex flex-col ${golden.className} overflow-clip justify-center text-[200px] h-screen w-full items-center text-[#f6ebdd]`}
			>
				<h1
					id="opuvlence"
					className="absolute opacity-25 top-[27vh] text-[12vw]"
				>
					Opuvlence
				</h1>
				<p
					id="desc"
					className={`absolute md:top-[70vh] opacity-25 base:top-[57vh] md:left-[35vw] base:left-[4.5vw] ${poppins.className} md:w-[436px] base:w-fit text-center md:text-[28px] base:text-[16px] z-[100]`}
				>
					Elevating the status of luxury for the deserving
				</p>
			</div>
		</div>
	)
}

export default ExampleComponent
