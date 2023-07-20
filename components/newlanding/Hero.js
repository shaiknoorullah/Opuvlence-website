/** @format */

import Image from "next/image"
import React, { useEffect, useState } from "react"
import BgImage from "../../public/newlanding/herobg.webp"
import Logo from "../../public/logoLight.png"
import Input from "../Common/Input"
import { useController, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "react-hot-toast"
import { baseRef } from "../../utils/constants"
import Select from "react-select"
import { cities } from "../../utils/operatingCities"
import {
	defaultFormValues,
	leadFormSchema,
} from "../../utils/formValidationSchema"
import { useRouter } from "next/router"

// import Logo from "../../public/newlanding/logo.png"

const review = [
	{
		title: "Google",
		rating: "4.5/5|1237 reviews",
	},
	{
		title: "Facebook",
		rating: "4.5/5|1237 reviews",
	},
	{
		title: "Trust Pilot",
		rating: "4.5/5|1237 reviews",
	},
]
const Hero = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: defaultFormValues,
		resolver: zodResolver(leadFormSchema),
	})

	const { field } = useController({ name: "city", control })

	const router = useRouter()

	const handleSelectChange = option => {
		field.onChange(option.value)
	}

	const createContact = formValues => {
		const fullname = formValues.fullName
		const spaceIdx = fullname.indexOf(" ")
		const firstName = fullname.slice(0, spaceIdx)
		const lastName = fullname.slice(spaceIdx + 1)
		const options = {
			method: "POST",
			url: "https://api.brevo.com/v3/contacts",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				"api-key": process.env.BREVO_API_KEY,
			},
			data: {
				email: formValues.email,
				attributes: {
					FIRSTNAME: firstName,
					LASTNAME: lastName,
					CITY: formValues.city,
					AREA: formValues.area,
					SMS: `+91 ${formValues.phone}`,
				},
				listIds: [5],
			},
		}

		axios
			.request(options)
			.then(response => {
				axios
					.post(`${baseRef}/addLead`, {
						...formValues,
					})
					.then(result => {
						toast.success("Thank you for reaching out! we`ll see you soon!")
						router.push(
							"http://www.opuvlence.com/landing/offers/kitchen/01/thankyou"
						)
					})
					.catch(err => {
						console.error(err)
						toast.error(
							"Oops! there seems to be a problem submitting your details. Please try after some time."
						)
					})
			})
			.catch(error => {
				console.error(error)
			})
	}

	return (
		<div
			id="landinghome"
			className="  min-h-screen w-full relative flex justify-center"
		>
			<Image
				className="w-full h-full object-cover absolute brightness-50"
				src={BgImage}
				alt="Kitchen Interior"
			/>
			<Image
				className="absolute top-9 left-9"
				src={Logo}
				alt="company_logo"
			/>

			{/* <Image className="absolute left-5 top-2" src={Logo} /> */}
			<div className="bgmobile my-11 p-6 lg:mt-0 base:mt-24 lg:w-[80%] base:w-[90%] max-w-[1920px] py-[7vw] flex flex-col text-[#F6EBDD]  justify-between">
				<div className="w-full flex lg:flex-row base:flex-col justify-between h-full z-50">
					<div className="gap-[7vw] lg:w-[50%] h-full  flex flex-col">
						<div className="flex flex-col base:gap-3 lg:gap-[min(1vw,1rem)]">
							<div className="lg:text-[min(2.6vw,2.6rem)] base:text-[2rem] lg:leading-[min(3vw,3rem)] font-bold">
								Get Your Dream Kitchen for a Fraction of the Cost + ₹40,000
								Worth of Free Appliances!
							</div>
							<div className="lg:text-[min(1.2vw,1.2rem)] lg:w-[80%]">
								Act Now and create your happily ever after in the kitchen of
								your dreams
							</div>
							<div className="lg:text-[min(1.2vw,1.2rem)] lg:w-[80%] pt-11">
								Don&quot;t Miss Out on the Ultimate Offer! Get Your Dream
								Kitchen without the High Price Tag. Enjoy a Free Modular
								Makeover + 40,000 INR Worth of Appliances. Transform Your
								Kitchen into a Five-Star Oasis. Act Now, Offer Ends Soon!{" "}
							</div>
						</div>
						<div className="gap-[3vw] flex flex-col">
							<div className="timerbg py-8 base:w-[100%] lg:w-[min(65%,25rem)] lg:justify-center lg:items-center flex flex-col gap-9 lg:gap-[min(1.8vw,1.8rem)]">
								{" "}
								<CountdownTimer />
								<div className="lg:text-[min(1vw,1rem)] lg:px-5">
									{" "}
									Don&quot;t let your dream kitchen slip away. Get started today
									and claim your free appliances
								</div>
							</div>

							{/* <div className="flex flex-col gap-2">
                {" "}
                <button className="text-[#F6EBDD] bg-[#28CA6D]  base:text-[0.9rem] lg:text-[min(1vw,1rem)] w-fit base:px-12 lg:px-24 py-3 lg:flex base:hidden rounded-[4px]">
                  GET 35% DISCOUNT NOW!
                </button>
                <div className="base:text-[0.7rem] lg:text-[0.8vw]">
                  Trusted by more than 5,000 homes already.
                </div>
              </div> */}
						</div>
					</div>
					{/* form */}
					<div className="formbg p-[30px] flex flex-col justify-center items-center text-white w-[min(500px,max(26.042vw,320px))] ">
						<div className="text-[min(28px,max(1.46vw,18px))] capitalize leading-[32px]  lg:flex base:hidden font-semibold">
							Claim Your Free Consultation & 40,000INR Worth of Appliances Now!
						</div>
						<form
							onSubmit={handleSubmit(formValues => createContact(formValues))}
							className="my-5 w-full flex flex-col gap-3"
						>
							<Input
								label="Full Name*"
								labelClass={"text-[16px] font-normal leading-[32px] text-white"}
								placeholder="Arun Kumar"
								register={register}
								name={"fullName"}
								error={errors.fullName ? errors.fullName : false}
								className="heroinput"
							/>
							<Input
								label="Phone Number*"
								labelClass={"text-[16px] font-normal leading-[32px] text-white"}
								placeholder="8856215478"
								register={register}
								name={"phone"}
								error={errors.phone ? errors.phone : false}
								className="heroinput"
							/>
							<Input
								label={`Email*`}
								labelClass={"text-[16px] font-normal leading-[32px] text-white"}
								placeholder="arunkumar@gmail.com"
								register={register}
								name={"email"}
								error={errors.email ? errors.email : false}
								className="heroinput"
							/>
							<Input
								label={`Area (in Sqft)*`}
								labelClass={"text-[16px] font-normal leading-[32px] text-white"}
								placeholder="3000"
								register={register}
								name={"area"}
								error={errors.area ? errors.area : false}
								className="heroinput"
							/>
							<div className="flex flex-col">
								<label className="text-[17px] font-normal leading-[33px]">
									City*
								</label>
								<Select
									value={cities.find(({ value }) => value === field.value)}
									onChange={handleSelectChange}
									options={cities}
									className={`text-black ${
										errors.city
											? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
											: "border-white"
									}`}
								/>
								{errors.city && (
									<p className="text-red-600">{errors.city?.message}</p>
								)}
							</div>
							<button
								type="submit"
								className="text-[#F6EBDD] font-black bg-[#CA2828] w-full mt-8 base:px-3 lg:px-6 h-[max(2.5rem,min(2.5vw,3rem))] rounded-[4px] base:text-[0.7rem] lg:text-[min(1vw,1rem)] uppercase"
							>
								claim ₹40,000 worth of free appliances
							</button>
						</form>
					</div>
				</div>
				<div className="w-full hidden lg:flex base:flex-col lg:flex-row gap-9 lg:justify-between pt-14">
					{review.map((data, index) => {
						return (
							<div
								key={index}
								className="heroreview text-[#270405] p-[1.2vw] flex flex-col justify-between"
							>
								<div className="base:text-[2rem] lg:text-[min(1.7vw,1.7rem)] font-medium">
									{data.title}
								</div>
								<div className="text-[min(1vw,1rem)]">
									Rating:<span className="font-semibold">{data.rating}</span>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const CountdownTimer = () => {
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date()
			const nextRefresh = new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate() + 4
			)
			const timeLeft = nextRefresh.getTime() - now.getTime()

			setCountdown({
				days: String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
					2,
					"0"
				),
				hours: String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(
					2,
					"0"
				),
				minutes: String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(
					2,
					"0"
				),
				seconds: String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0"),
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className=" flex base:text-[1.9rem] base:mt-2 md:mt-0 lg:text-[min(3vw,42px)]">
			<div className="lg:text-[#FF3333] base:text-[#ffffff]">
				<span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mr-1 font-[250]  rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
					{countdown.days}
				</span>
				:
			</div>
			<div className="lg:text-[#FF3333] base:text-[#ffffff]">
				<span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mx-1 font-[250] rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
					{countdown.hours}
				</span>
				:
			</div>
			<div className="lg:text-[#FF3333] base:text-[#ffffff]">
				<span className="border-[0.65px] lg:text-[#FF3333] base:text-[#ffffff] mx-1 font-[250] rounded-md lg:border-[#FF3333] base:border-[#ffffff]  p-3  lg:p-[min(1vw,1rem)]">
					{countdown.minutes}
				</span>
				:
			</div>
			<div>
				<span className="border lg:text-[#FF3333] base:text-[#ffffff] font-[250] mx-1 rounded-md lg:border-[#FF3333] base:border-[#ffffff] p-3  lg:p-[min(1vw,1rem)]">
					{countdown.seconds}
				</span>
			</div>
		</div>
	)
}

export default Hero
