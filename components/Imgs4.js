/** @format */

import React, { useEffect } from "react"
import { Parallax } from "./Parallax"
import { useAnimateOnScroll } from "../utils/hooks/useAnimateOnScroll"
import { useLenis } from "@studio-freight/react-lenis"

const Imgs4 = () => {
	const { isIntersecting, targetRef } = useAnimateOnScroll(
		0.25,
		false
	)

	const lenis = useLenis()

	useEffect(() => {
		if (!isIntersecting) return
		lenis.scrollTo("#images-section", {
			offset: -50,
			immediate: false,
			duration: 1,
			lerp: 0.03,
			lock: true,
		})
	}, [isIntersecting])
	return (
		<div
			ref={targetRef}
			id="images-section"
			className="w-full flex base:mt-0 md:mt-[100px] scroll-smooth lg:justify-center"
		>
			<section className="w-[95%] max-w-[1920px] base:hidden lg:flex justify-center ">
				<div className=" w-full grid grid-cols-9 grid-rows-6  ">
					<Parallax
						speed="-2"
						classNameParent="z-[1000] row-span-2 row-start-4 col-start-1 col-end-4"
					>
						<img src="/img1.png" />
					</Parallax>

					<Parallax
						speed="-1"
						classNameParent="z-[100] row-span-4 w-full self-center row-end-6 col-span-5 col-end-8"
					>
						<img src="/img2.png" />
					</Parallax>

					<Parallax
						speed="-5"
						classNameParent="z-[99] col-span-6 col-end-12 row-start-5 row-span-2"
						className="w-full"
					>
						<img
							src="/img3.png"
							className="w-full"
						/>
					</Parallax>
					<Parallax
						speed="0"
						classNameParent="z-[105] row-end-4 row-span-2 col-span-3 col-end-13"
					>
						<img
							src="/img4.png"
							className=" "
						/>
					</Parallax>
				</div>
			</section>

			{/* for mobile */}
			<div className="w-full lg:hidden mt-16">
				<img
					className="w-full"
					src="/imagesection.jpg"
				/>
			</div>
		</div>
	)
}

export default Imgs4
