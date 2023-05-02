/** @format */

import React, { useState } from "react"
import localFont from "next/font/local"
import CustomButton from "./section/customButton"
import axios from "axios"
// import { toast } from "tailwind-toast";

const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-Regular.woff2",
	variable: "--font-poppins",
})

const Contact = () => {
	const [name, setname] = useState()
	const [contactNumber, setcontactNumber] = useState()
	const [email, setemail] = useState()
	const [yourMessage, setyourMessage] = useState()

	console.log(name, email, contactNumber, yourMessage)

	const checkvalidation = () => {
		name === null ||
		contactNumber === null ||
		email === null ||
		yourMessage === null
			? alert("Please Enter All Fields")
			: alert("We'll get back to you")
	}

	// run this function after sending the email
	const addSibContact = () => {
		const apiKey =
			"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"
		const options2 = {
			method: "POST",
			url: "https://api.sendinblue.com/v3/contacts",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
			},
			data: { updateEnabled: false },
		}

		axios
			.request(options2)
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.error(error)
			})
	}

	return (
		<div
			// data-scroll-section
			id="contact"
			className="w-full h-fit base:mt-[25px] lg:mt-[50px] base:px-[6.25vw] max-w-[1920px] lg:px-[40px] flex flex-col  justify-center mx-auto "
		>
			<div className="flex w-full justify-between ">
				<h1
					className={`lg:w-[50%] base:w-[70%] text-[#270405] uppercase base:text-[10vw] lg:text-[min(4.68vw,90px)] base:[12.5vw] lg:leading-[min(120px,6.25vw)]  ${golden.className} `}
				>
					get in touch with us
				</h1>
			</div>
			<div
				className={`w-full flex lg:flex-row base:flex-col mt-[34px] base:text-[4.375vw] lg:text-[18px] justify-between text-[#B25F62] font-[400] ${poppins.className} `}
			>
				<div className="base:w-full lg:w-[40%]">
					<div>
						<label className="block">Name</label>
						<input
							className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
							type="text"
							value={name}
							onChange={e => {
								setname(e.target.value)
							}}
						/>
					</div>
					<div>
						<label className="block base:mt-[14vw] lg:mt-[78px] ">
							Email
						</label>
						<input
							className="w-full outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid "
							type="text"
							value={contactNumber}
							onChange={e => {
								setcontactNumber(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="base:w-full lg:w-[40%] base:mt-[14vw] lg:mt-0 lg:text-right ">
					<div>
						<label className="block ">Contact number</label>
						<input
							className="w-full  outline-none bg-inherit border-b-[1px] border-b-[#B25F62] border-solid"
							type="text"
							value={email}
							onChange={e => {
								setemail(e.target.value)
							}}
						/>
					</div>
					<div>
						<label className="block base:mt-[14vw]  lg:mt-[78px]">
							Your Message
						</label>
						<input
							className="w-full bg-inherit border-b-[1px] border-b-[#B25F62] border-solid outline-none "
							type="text"
							value={yourMessage}
							onChange={e => {
								setyourMessage(e.target.value)
							}}
						/>
					</div>
				</div>
			</div>
			<div
				onClick={checkvalidation}
				className="mt-[70px] cursor-pointer  "
			>
				<CustomButton
					text={"Submit"}
					color={"black"}
					href={"/"}
				/>
			</div>
		</div>
	)
}

export default Contact
