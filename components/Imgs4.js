/** @format */

import React, { useEffect } from "react"
import { Parallax } from "./Parallax"
import { useAnimateOnScroll } from "../utils/hooks/useAnimateOnScroll"
import { useLenis } from "@studio-freight/react-lenis"

const Imgs4 = () => {
	// const { isIntersecting, targetRef } = useAnimateOnScroll(
	// 	0.25,
	// 	false
	// )

	return (
		<div
			// ref={targetRef}
			id="images-section"
			className="w-full flex base:mt-0 md:mt-[300px] scroll-smooth lg:justify-center"
		>
			<section className="w-[95%] max-w-[1920px] base:hidden lg:flex justify-center ">
				<div className=" w-full grid grid-cols-9  grid-rows-6  ">
					<Parallax
						speed="-1.5"
						classNameParent="mr-[6rem] z-[1000] flex justify-start items-end w-full self-end row-span-full row-start-3 row-end-7 col-start-1 col-end-4"
					>
						<img src="/img1.png" />
					</Parallax>

					<Parallax
						speed="-1.5"
						classNameParent="row-span-full z-[100] row-start-2 row-end-7 col-start-3 col-end-6"
					>
						<img src="/img2.png" />
					</Parallax>

					<Parallax
						speed="-3"
						classNameParent="col-start-5 col-end-9 mt-[2rem] ml-[9rem] mr-[-8rem] z-[1] row-start-4 row-end-7 row-span-full"
					>
						<img
							src="/img3.png"
							className=""
						/>
					</Parallax>
					<Parallax
						speed="-3"
						classNameParent="col-start-7 col-end-13 row-start-3 row-end-7 z-10 ml-[7rem] row-span-full"
					>
						<img
							src="/img4.png"
							className=" "
						/>
					</Parallax>
				</div>
			</section>

			{/* for mobile */}
			<div className="w-full lg:hidden mt-16 md:mt-1">
				<img
					className="w-full md:h-[832px]"
					src="/imagesection.jpg"
				/>
			</div>
		</div>
	)
}

export default Imgs4
