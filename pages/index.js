/** @format */

import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import OurExpertise from "../components/ourExpertise"
import OurProject from "../components/ourProject"
import Batholic from "../components/batHolic"
import LoadingScreen from "../components/LoadingScreen"
import Testimonials from "../components/testimonials"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import TransitionScreen from "../components/TransitionScreen"
import Imgs4 from "../components/Imgs4"
import ExampleComponent from "../components/ExampleComponent"
import Footer from "../components/Footer"

import MobileOurProject from "../components/Mobileourproject"
import CasesLibrary from "../components/CasesLibray"

import About from "../components/About"
import { useEffect, useState } from "react"
export default function Home() {
	const [loader, setLoader] = useState(true)

	return (
		<div
			className="text-black"
			// data-scroll-section
			// className="w-[100vw]"
		>
			<Head>
				<title>
					Opuvlence - Luxury Interior Design Services
				</title>
				<meta
					name="description"
					content="Opuvlence is a leading interior design company that specializes in luxury residential, commercial, and hospitality projects. Our team of expert designers and project managers will work with you to create a bespoke design that is tailored to your needs."
				/>
				<meta
					name="keywords"
					content="opuvlence, opulence, interior design, luxury, residential, commercial, hospitality"
				/>
				<meta
					name="author"
					content="Opuvlence"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					property="og:title"
					content="Opuvlence - Luxury Interior Design Services"
				/>
				<meta
					property="og:description"
					content="Opuvlence is a leading interior design company that specializes in luxury residential, commercial, and hospitality projects. Our team of expert designers and project managers will work with you to create a bespoke design that is tailored to your needs."
				/>
				<meta
					property="og:image"
					content="/image-card.png"
				/>
				<meta
					property="og:url"
					content="https://www.opuvlence.com"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:locale"
					content="en_US"
				/>
				<meta
					name="twitter:card"
					content="summary"
				/>
				<meta
					name="twitter:title"
					content="Opuvlence - Luxury Interior Design Services"
				/>
				<meta
					name="twitter:description"
					content="Opuvlence is a leading interior design company that specializes in luxury residential, commercial, and hospitality projects. Our team of expert designers and project managers will work with you to create a bespoke design that is tailored to your needs."
				/>
				<meta
					name="twitter:image"
					content="/image-card.png"
				/>
				<meta
					name="twitter:creator"
					content="@opuvlence"
				/>
			</Head>

			{/* added 1.3s of global delay to all animations in navbar because of transition animation */}
			<Hero />
			<Imgs4 />
			<div className="w-full flex justify-center">
				<About />
			</div>
			<OurExpertise />
			<OurProject />
			<MobileOurProject />
			<Testimonials />
			<Contact />
		</div>
	)
}
