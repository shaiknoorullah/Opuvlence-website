/** @format */

import { gsap } from "gsap"
import Link from "next/link"
import React, { useEffect, useRef } from "react"

const CustomButton = ({
	text,
	color,
	href,
	onClick,
	email,
	contactNumber,
	name,
}) => {
	const buttonRef = useRef(null)

	useEffect(() => {
		const buttonRefVar = buttonRef.current

		const onMouseOver = e => {
			gsap.to("#circle", {
				x: 150,
				scale: 0.2,
				duration: 0.5,
				ease: "power3.out",
			})
			gsap.to("#text", {
				letterSpacing: "0.2em",
			})
			gsap.to("#arrow", {
				x: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power3.out",
			})
		}

		const onMouseLeave = e => {
			gsap.to("#circle", {
				x: 0,
				scale: 1,
				duration: 0.5,
				ease: "power3.out",
			})
			gsap.to("#text", {
				letterSpacing: "0.5rem",
			})
			gsap.to("#arrow", {
				x: -50,
				opacity: 0,
				duration: 0.5,
				ease: "power3.out",
			})
		}

		buttonRefVar.addEventListener("mouseover", onMouseOver)
		buttonRefVar.addEventListener(
			"mouseleave",
			onMouseLeave
		)

		return () => {
			buttonRefVar.removeEventListener(
				"mouseover",
				onMouseOver
			)
			buttonRefVar.removeEventListener(
				"mouseleave",
				onMouseLeave
			)
		}
	}, [])
	return (
		<>
			{href ? (
				<Link href={href}>
					<div
						ref={buttonRef}
						className="relative w-[max(280px,10vw)] flex items-center"
					>
						<div
							id="circle"
							className={
								color === "white"
									? `circleblack`
									: `circle `
							}
						></div>
						<div
							id="text"
							className={`font-black text-[1.4rem] ml-[-50px] uppercase text-${color} spacing tracking-[0.7rem]`}
						>
							{text}
						</div>
						<svg
							id="arrow"
							className="opacity-0 absolute right-[-70px] origin-left -translate-x-5"
							width="62"
							height="12"
							viewBox="0 0 62 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-1.19209e-07 6H61M61 6C55.8351 5.732 52.3179 5.318 50.4482 4.758C48.5779 4.198 46.5326 2.945 44.3113 1M61 6C55.8351 6.268 52.3179 6.682 50.4482 7.242C48.5779 7.802 46.5326 9.055 44.3113 11"
								stroke="black"
							/>
						</svg>
					</div>
				</Link>
			) : (
				<div
					ref={buttonRef}
					className="relative w-[max(280px,10vw)] flex items-center"
				>
					<div
						id="circle"
						className={
							color === "white" ? `circleblack` : `circle `
						}
					></div>
					<div
						id="text"
						className={`font-black text-[1.4rem] ml-[-50px] uppercase text-${color} spacing tracking-[0.7rem]`}
					>
						{text}
					</div>
					<svg
						id="arrow"
						className="opacity-0 absolute right-[-70px] origin-left -translate-x-5"
						width="62"
						height="12"
						viewBox="0 0 62 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M-1.19209e-07 6H61M61 6C55.8351 5.732 52.3179 5.318 50.4482 4.758C48.5779 4.198 46.5326 2.945 44.3113 1M61 6C55.8351 6.268 52.3179 6.682 50.4482 7.242C48.5779 7.802 46.5326 9.055 44.3113 11"
							stroke="black"
						/>
					</svg>
				</div>
			)}
		</>
	)
}

export default CustomButton
