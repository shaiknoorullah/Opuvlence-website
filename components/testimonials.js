/** @format */

import React, { useState } from "react"
import CustomButton from "./section/customButton"
import ScrollContainer from "react-indiana-drag-scroll"
import { golden, poppins } from "../utils/fonts"
import Testimonial1 from "../public/homepage/testimonial1.png"
import Testimonial2 from "../public/homepage/testimonial2.webp"
import Testimonial3 from "../public/homepage/testimonial3.webp"

import localFont from "next/font/local"
import Image from "next/image"

const poppinsBold = localFont({
	src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
	variable: "--font-poppins",
})

const TestimonialCard = ({ text, description, image }) => {}

const Testimonials = () => {
	const [showModal, setShowModal] = useState(false)
	const [name, setname] = useState()
	const [image, setimage] = useState()
	const [description, setdescriptionn] = useState()

	const cards = [
		{
			title: "CAROLYN",
			img: Testimonial1,
			description:
				"Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
		},
		{
			title: "ALEX",
			img: Testimonial2,
			description:
				"Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
		},
		{
			title: "JESSIE",
			img: Testimonial3,

			description:
				"Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable service Using edge cutting technology to provide extremely reliable serviceUsing edge cutting technology to provide extremely reliable service",
		},
	]

	return (
		<div
			// data-scroll
			className="w-full flex  text-black my-[8rem]  justify-center relative"
		>
			<div className="font-poppins base:w-[95%] lg:w-[100%] z-50 flex flex-col py-12">
				{/* testimonials title */}
				<div className="flex w-full base:justify-center lg:justify-start">
					<div className="lg:inline-block hidden w-[30%]"></div>

					<div
						className={`font-[700] text-[1.2rem] text-[#A5787A] md:text-[2rem] flex ${poppinsBold.className}`}
					>
						/ TESTIMONIALS
					</div>
				</div>
				{/* Lets see what our */}
				<div
					className={`md:w-[50%] lg:w-[30%] ${poppins} text-black base:text-[1.5rem]  md:text-[2rem] lg:text-[1.8rem] leading-[2.4rem] lg:ml-10 font-[700] pt-8`}
				>
					LETS SEE WHAT OUR CUSTOMERS HAVE TO SAY
				</div>
				{/* cards desktop*/}
				<div className="scrollbar-hide  overflow-y-scroll hidden cursor-grab lg:flex gap-[4rem] ">
					<ScrollContainer
						style={{
							overflow: "scroll",
							display: "flex",
							gap: "4rem",
						}}
					>
						{cards.map((data, index) => {
							return (
								<div
									data-scroll
									data-scroll-direction="horizontal"
									data-scroll-speed="1.5"
									data-scroll-draggable="true"
									key={index}
									className="flex-col min-w-[68rem] pl-[7rem] mr-[2rem]"
								>
									<div>
										<div
											className={`text-[6rem] w-full pl-[25rem] tracking-[1rem] italic text-black ${poppins}`}
										>
											{data.title}
										</div>
										<div className="flex gap-[4rem]">
											<div className="min-w-[33rem] overflow-hidden h-[10rem] cursor-pointer object-cover">
												<Image
													onClick={() => {
														setname(data.title)
														setimage(data.img)
														setdescriptionn(
															data.description
														)

														setShowModal(true)
													}}
													className="w-full h-full hover:scale-125 transition-transform duration-300 ease-in-out object-cover"
													src={data.img}
												/>
											</div>
											<div
												className={`min-w-[18rem] text-[0.8rem] leading-[30px] self-end ${poppins}`}
											>
												{data.description}
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</ScrollContainer>
				</div>

				{/* mobile */}
				<div className="scrollbar-hide overflow-y-scroll  flex gap-3 ">
					{cards.map((data, index) => {
						return (
							<div
								className=" flex lg:hidden base:min-w-[min(22rem,100vw)] flex-col justify-center mt-12 "
								key={index}
							>
								<div className="text-[2.5rem] text-black self-end justify-self-end tracking-[0.7rem] italic capitalize">
									CAROLYN
								</div>
								<div className="flex flex-col mx-6 gap-[1rem]">
									<img
										onClick={() => {
											setname(data.title)
											setimage(data.img)
											setdescriptionn(data.description)

											setShowModal(true)
										}}
										className="object-cover h-[10rem]"
										src={data.img}
									/>
									<div className=" text-[1.3rem] text-black self-center justify-self-center leading-[30px] ">
										Using edge cutting technology to provide
										extremely reliable service Using edge
										cutting technology to provide extremely
										reliable service Using edge cutting
										technology.
									</div>
								</div>
							</div>
						)
					})}
					{/* cards mobile */}{" "}
				</div>

				<div className="w-full mt-[10rem] hidden lg:flex justify-between">
					<div className=" pl-8 z-[1000]">
						<CustomButton
							text={"DISCOVER"}
							color={"black"}
							href={"#contact"}
						/>
					</div>
					<div
						className={`flex  gap-[3rem] text-black mr-16 ${poppins}`}
					>
						<div className="text-[2rem] italic underline ">
							PREV
						</div>
						<div className="text-[2rem] italic underline ">
							NEXT
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<div
					className={
						showModal
							? ` absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-10 z-[1000] flex justify-center items-center `
							: `hidden`
					}
					style={{ overflowY: "hidden" }}
				>
					<div className="bg-white flex flex-col justify-center  item rounded-lg p-8 w-[50rem]">
						<h1 className="self-center italic text-[2rem]">
							{name}
						</h1>
						{/* Image */}
						<img
							src={image}
							alt="Modal Image"
							className="mx-auto mb-4"
						/>
						{/* Text */}
						<p className="text-gray-700 mb-4">
							{description}
						</p>
						{/* Close button */}
						<button
							className="bg-[#270405] hover:bg-black text-white font-bold py-2 px-4 w-fit rounded"
							onClick={() => setShowModal(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Testimonials
