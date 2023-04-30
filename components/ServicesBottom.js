/** @format */

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const ServicesBottom = () => {
	const [service1, setService1] = useState(false)
	const [service2, setService2] = useState(false)
	const [service3, setService3] = useState(false)
	const [service4, setService4] = useState(false)

	const tl1 = useRef()
	const tl2 = useRef()
	const tl3 = useRef()
	const tl4 = useRef()
	const div = useRef()
	useEffect(() => {
		tl1.current = gsap.timeline({
			paused: true,
			delay: 0,
		})
		tl2.current = gsap.timeline({
			paused: true,
			delay: 0,
		})
		tl3.current = gsap.timeline({
			paused: true,
			delay: 0,
		})
		tl4.current = gsap.timeline({
			paused: true,
			delay: 0,
		})
		tl1.current.fromTo(
			"#first",
			{ width: "191px" },
			{
				width: "800px",

				duration: 0.5,
				ease: "power3.inOut",
			}
		)
		tl1.current.to("#s1text270", {
			display: "none",
			opacity: 0,
			delay: -0.35,
			ease: "power3.inOut",
		})
		tl1.current.fromTo(
			"#img1",
			{ opacity: 0, width: 0, display: "none" },
			{
				width: "100%",
				display: "block",
				opacity: 1,

				duration: 0.45,
				ease: "power2.out",
			}
		)
		tl1.current.to("#s1text180", {
			opacity: 1,
			display: "block",
			delay: 0.2,
			duration: 1,
			ease: "power3.inOut",
		})
		tl2.current.fromTo(
			"#second",
			{ width: "191px" },
			{
				width: "800px",

				duration: 0.5,
				ease: "power3.inOut",
			}
		)
		tl2.current.to("#s2text270", {
			display: "none",
			opacity: 0,
			delay: -0.35,
			ease: "power3.inOut",
		})
		tl2.current.fromTo(
			"#img2",
			{ opacity: 0, width: 0, display: "none" },
			{
				width: "100%",
				display: "block",
				opacity: 1,

				duration: 0.45,
				ease: "power2.out",
			}
		)
		tl2.current.to("#s2text180", {
			opacity: 1,
			display: "block",
			delay: 0.2,
			duration: 1,
			ease: "power3.inOut",
		})
		tl3.current.fromTo(
			"#third",
			{ width: "191px" },
			{
				width: "800px",
				duration: 0.5,
				ease: "power3.inOut",
			}
		)
		tl3.current.to("#s3text270", {
			display: "none",
			opacity: 0,
			delay: -0.35,
			ease: "power3.inOut",
		})
		tl3.current.fromTo(
			"#img3",
			{ opacity: 0, width: 0, display: "none" },
			{
				width: "100%",
				display: "block",
				opacity: 1,

				duration: 0.45,
				ease: "power2.out",
			}
		)
		tl3.current.to("#s3text180", {
			opacity: 1,
			display: "block",
			delay: 0.2,
			duration: 1,
			ease: "power3.inOut",
		})
		tl4.current.fromTo(
			"#fourth",
			{ width: "191px" },
			{
				width: "800px",
				duration: 0.5,
				ease: "power3.inOut",
			}
		)
		tl4.current.to("#s4text270", {
			display: "none",
			opacity: 0,
			delay: -0.35,
			ease: "power3.inOut",
		})
		tl4.current.fromTo(
			"#img4",
			{ opacity: 0, width: 0, display: "none" },
			{
				width: "100%",
				display: "block",
				opacity: 1,

				duration: 0.45,
				ease: "power2.out",
			}
		)
		tl4.current.to("#s4text180", {
			opacity: 1,
			display: "block",
			delay: 0.2,
			duration: 1,
			ease: "power3.inOut",
		})

		const first = document.getElementById("first")
		const second = document.getElementById("second")
		const third = document.getElementById("third")
		const fourth = document.getElementById("fourth")
	}, [])

	useEffect(() => {
		service1 ? tl1.current.play() : tl1.current.reverse()
		service2 ? tl2.current.play() : tl2.current.reverse()
		service3 ? tl3.current.play() : tl3.current.reverse()
		service4 ? tl4.current.play() : tl4.current.reverse()
	}, [service1, service2, service3, service4])
	return (
		<div className="flex w-full justify-center h-fit">
			<div className="max-w-[1920px] flex h-[700px] ">
				{/* first service */}
				<div
					id="first"
					onMouseEnter={() => {
						setService1(true)
					}}
					onMouseLeave={() => {
						setService1(false)
					}}
					className=" flex flex-row "
				>
					<div className="h-full w-[1px] bg-black " />
					<div className="flex flex-col  h-fit px-[20px] self-end">
						<div
							id="img1"
							className="relative hidden"
						>
							<img
								src="/services1.png"
								className="w-[700px]  object-contain relative z-1 self-start "
							/>
							<div className="text-white absolute top-[300px] left-[100px]  z-100  text-center">
								<h1 className=" font-[500]  ">
									Residential Design
								</h1>
								<p className="text-[min(14px,0.74vw)] w-[500px] ">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco{" "}
								</p>
							</div>
						</div>
						<div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
							<h2
								style={{
									writingMode: "vertical-lr",
								}}
								id="s1text270"
								className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
							>
								Residential Design
							</h2>

							<div
								id="wrapper"
								className="flex items-center gap-[25px] "
							>
								<img
									id="small1"
									className=" min-w-[150px]   "
									src="/services12.png"
								/>
								<h2
									id="s1text180"
									className=" text-[30px] hidden font-[600] text-black  "
								>
									Residential Design
								</h2>
							</div>
						</div>
					</div>
				</div>
				{/* second service */}
				<div
					id="second"
					onMouseEnter={() => {
						setService2(true)
					}}
					onMouseLeave={() => {
						setService2(false)
					}}
					className=" flex flex-row "
				>
					<div className="h-full w-[1px] bg-black " />
					<div className="flex flex-col  h-fit gap-[70px] px-[20px] self-end">
						<div
							id="img2"
							className="relative hidden"
						>
							<img
								src="/services21.png"
								className="w-[700px]  object-contain relative z-1 self-start "
							/>
							<div className="text-white absolute top-[300px] left-[100px]  z-100  text-center">
								<h1 className=" font-[500]  ">
									Residential Design
								</h1>
								<p className="text-[min(14px,0.74vw)] w-[500px] ">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco{" "}
								</p>
							</div>
						</div>
						<div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
							<h2
								style={{
									writingMode: "vertical-lr",
								}}
								id="s2text270"
								className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
							>
								Residential Design
							</h2>

							<div className="flex items-center gap-[25px] ">
								<img
									id="small2"
									className=" min-w-[150px]   "
									src="/services22.png"
								/>
								<h2
									id="s2text180"
									className=" text-[30px] hidden font-[600] text-black  "
								>
									Residential Design
								</h2>
							</div>
						</div>
					</div>
				</div>
				{/* third service */}
				<div
					id="third"
					onMouseEnter={() => {
						setService3(true)
					}}
					onMouseLeave={() => {
						setService3(false)
					}}
					onMo
					className=" flex flex-row "
				>
					<div className="h-full w-[1px] bg-black " />
					<div className="flex flex-col  h-fit gap-[50px] px-[20px] self-end">
						<div
							id="img3"
							className="relative hidden"
						>
							<img
								src="/services3.png"
								className="w-[700px]  object-contain relative z-1 self-start "
							/>
							<div className="text-white absolute top-[300px] left-[100px]  z-100  text-center">
								<h1 className=" font-[500]  ">
									Residential Design
								</h1>
								<p className="text-[min(14px,0.74vw)] w-[500px] ">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco{" "}
								</p>
							</div>
						</div>
						<div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
							<h2
								style={{
									writingMode: "vertical-lr",
								}}
								id="s3text270"
								className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
							>
								Residential Design
							</h2>

							<div
								id="wrapper"
								className="flex items-center gap-[25px] "
							>
								<img
									id="small3"
									className=" min-w-[150px]   "
									src="/services12.png"
								/>
								<h2
									id="s3text180"
									className=" text-[30px] hidden font-[600] text-black  "
								>
									Residential Design
								</h2>
							</div>
						</div>
					</div>
				</div>
				{/* fourth service */}
				<div
					id="fourth"
					onMouseEnter={() => {
						setService4(true)
					}}
					onMouseLeave={() => {
						setService4(false)
					}}
					className=" flex flex-row "
				>
					<div className="h-full w-[1px] bg-black " />
					<div className="flex flex-col  h-fit px-[20px] gap-[50px] self-end">
						<div
							id="img4"
							className="relative hidden"
						>
							<img
								src="/services1.png"
								className="w-[700px]  object-contain relative z-1 self-start "
							/>
							<div className="text-white absolute top-[300px] left-[100px]  z-100  text-center">
								<h1 className=" font-[500]  ">
									Residential Design
								</h1>
								<p className="text-[min(14px,0.74vw)] w-[500px] ">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco{" "}
								</p>
							</div>
						</div>
						<div className="self-start flex  flex-col  gap-[50px] h-full items-center justify-end">
							<h2
								style={{
									writingMode: "vertical-lr",
								}}
								id="s4text270"
								className=" text-[30px] z-1 relative h-[350px] wri font-[600] text-black rotate-[180deg] "
							>
								Residential Design
							</h2>

							<div
								id="wrapper"
								className="flex items-center gap-[25px] "
							>
								<img
									id="small4"
									className=" min-w-[150px]   "
									src="/services12.png"
								/>
								<h2
									id="s4text180"
									className=" text-[30px] hidden font-[600] text-black  "
								>
									Residential Design
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServicesBottom
