/** @format */

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Select from "react-select"
import { useForm, useController } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cities } from "../../utils/operatingCities"
import Right from "../../public/embrace/rightbase.png"
import Input from "../Common/Input"
import axios from "axios"
import { baseRef } from "../../utils/constants"
import {
	defaultFormValues,
	leadFormSchema,
} from "../../utils/formValidationSchema"
import { toast } from "react-hot-toast"
import { useRouter } from "next/router"

const LandingForm = () => {
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
		console.log(formValues)
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
			id="form"
			className="w-[100%] bg-[#F6EBDD] flex justify-center text-[#270405]"
		>
			<div className="w-[90%] max-w-[990px] flex justify-center flex-col items-center gap-[44px] py-[5vw]">
				<h2 className="text-[min(45px,max(1.25vw,32px))] font-extrabold leading-[114%]">
					Book Your Free 45-Minute Design Consultation
				</h2>
				<p className="text-[min(20px,max(0.938vw,18px))] leading-[28px] font-normal ">
					Get Started on Your Perfect Kitchen By Book Your Free 45-Minute Design
					Consultation
				</p>
				<div className="flex flex-col gap-[20px] justify-center items-start">
					<div className="flex items-center gap-[15px]">
						<Image
							src={Right}
							alt="tickmark"
							className="md:w-[25px] invert md:h-[25px] base:w-[20px] base:h-[20px]"
						/>
						<p className="text-[min(20px,max(0.938vw,18px))] leading-[28px] font-normal">
							Personalization for Perfection
						</p>
					</div>
					<div className="flex items-center gap-[15px]">
						<Image
							src={Right}
							alt="tickmark"
							className="md:w-[25px] invert md:h-[25px] base:w-[20px] base:h-[20px]"
						/>
						<p className="text-[min(20px,max(0.938vw,18px))] leading-[28px] font-normal">
							40,000 INR Worth Of Free Appliances
						</p>
					</div>
					<div className="flex items-center gap-[15px]">
						<Image
							src={Right}
							alt="tickmark"
							className="md:w-[25px] invert md:h-[25px] base:w-[20px] base:h-[20px]"
						/>
						<p className="text-[min(20px,max(0.938vw,18px))] leading-[28px] font-normal">
							No MDF and Limitless Customization
						</p>
					</div>
				</div>
				<p className="text-[min(20px,max(0.938vw,18px))] leading-[28px] font-normal">
					Transform Your Kitchen Dreams into Reality - Claim Your FREE 45-Minute
					Design Consultation Now! Our expert designers are ready to craft the
					perfect modular kitchen tailored to your style and needs. Don&apos;t
					miss this exclusive opportunity to kickstart your kitchen journey.
					Limited slots available, book yours today!
				</p>
				<form
					onSubmit={handleSubmit(createContact)}
					className="flex flex-col gap-[32px]"
				>
					<div className="flex base:flex-col md:flex-row gap-[40px]">
						<Input
							label="Full Name*"
							placeholder="Arun Kumar"
							register={register}
							name={"fullName"}
							error={errors.fullName ? errors.fullName : false}
						/>
						<Input
							label="Phone Number*"
							placeholder="8856215478"
							register={register}
							name={"phone"}
							error={errors.phone ? errors.phone : false}
						/>
					</div>
					<div className="flex base:flex-col md:flex-row gap-[40px]">
						<Input
							label={`Email*`}
							placeholder="arunkumar@gmail.com"
							register={register}
							name={"email"}
							error={errors.email ? errors.email : false}
						/>
						<Input
							label={`Area (in Sqft)*`}
							placeholder="3000"
							register={register}
							name={"area"}
							error={errors.area ? errors.area : false}
						/>
					</div>

					<div className="flex base:flex-col md:flex-row gap-[40px]">
						<div className="flex flex-col">
							<label className="text-[17px] font-normal leading-[33px]">
								City*
							</label>
							<Select
								value={cities.find(({ value }) => value === field.value)}
								onChange={handleSelectChange}
								options={cities}
								className={`h-full p-2 w-[min(468px,max(24.375vw,320px))] ${
									errors.city
										? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
										: "border-black"
								} rounded-[3px] bg-transparent placeholder:text-black-300`}
							/>
							{errors.city && (
								<p className="text-red-600">{errors.city?.message}</p>
							)}
						</div>
						<div className="flex flex-col">
							<label className="text-[17px] font-normal leading-[33px]">
								Kitchen Details
							</label>
							<textarea
								{...register("details")}
								className={`h-[44px] overflow-clip border p-2 w-[min(468px,max(24.375vw,320px))] ${
									errors.details
										? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
										: "border-black"
								} rounded-[3px] bg-transparent placeholder:text-black-300`}
								placeholder="your requirements in breif..."
							/>
							{errors.details && (
								<p className="text-red-600">{errors.details?.message}</p>
							)}
						</div>
					</div>
					<button
						type="submit"
						className="base:py-[10px] mt-10 hover:scale-[1.05] hover:transition-all hover:ease-in-out base:px-[10px] md:py-[30px] md:px-[94px] text-[min(26px,max(1.220vw,22px))] uppercase font-black text-white leading-[130%] tracking-[2.5px] bg-[#CA2828] rounded-[6px]"
					>
						claim ₹40,000 worth of free appliances
					</button>
				</form>
			</div>
		</div>
	)
}

export default LandingForm
