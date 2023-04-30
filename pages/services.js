/** @format */

import React from "react"
import ServicesComp from "../components/ServicesComp"
import OurServices from "../components/OurServices"
import Navbar from "../components/Navbar"
import TransitionScreen from "../components/TransitionScreen"
import Services4 from "../components/Services4"
import ServicesBottom from "../components/ServicesBottom"
import Head from "next/head"
import ServicesBottomMobile from "../components/ServicesBottomMobile"

const Services = () => {
	return (
		<div
			// data-scroll-section
			className="bg-[#F6EBDD] w-full px-[40px] text-black "
		>
			<Head>
				<title>
					Opuvlence Services | Residential, Corporate,
					Restaurant Design & Rental Services
				</title>
				<meta
					name="description"
					content="Opuvlence offers a range of interior design services, including residential design, corporate design, restaurant design, and rental/lease services. Contact us today for customized solutions."
				/>
				<meta
					name="keywords"
					content="opuvlence, interior design, residential design, corporate design, restaurant design, rental services, lease services"
				/>
				<meta
					property="og:title"
					content="Opuvlence Services | Residential, Corporate, Restaurant Design & Rental Services"
				/>
				<meta
					property="og:description"
					content="Opuvlence offers a range of interior design services, including residential design, corporate design, restaurant design, and rental/lease services. Contact us today for customized solutions."
				/>
				<meta
					property="og:url"
					content="https://www.opuvlence.com/services"
				/>
				<meta
					property="og:image"
					content="https://www.opuvlence.com/images/services-banner.jpg"
				/>
				<meta
					property="og:image:alt"
					content="Opuvlence Services"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Opuvlence Services | Residential, Corporate, Restaurant Design & Rental Services"
				/>
				<meta
					name="twitter:description"
					content="Opuvlence offers a range of interior design services, including residential design, corporate design, restaurant design, and rental/lease services. Contact us today for customized solutions."
				/>
				<meta
					name="twitter:image"
					content="https://www.opuvlence.com/images/services-banner.jpg"
				/>
			</Head>
			{/* pls remove services4  , servicescomp and ourservices  */}
			<OurServices />
			<div className="my-[200px]">
				<ServicesBottom />
			</div>
			<ServicesBottomMobile />
			{/* <ServicesComp /> */}
			{/* <Services4 /> */}
			{/* <ServicesBottom /> */}
		</div>
	)
}

export default Services
