/** @format */

import React from "react"
import Hero from "../../components/newlanding/Hero"
import WeProvide from "../../components/newlanding/WeProvide"
import LandingAboutus from "../../components/newlanding/LandingAboutus"
import Advantages from "../../components/newlanding/Advantages.js"
import WhatweOffer from "../../components/newlanding/WhatweOffer.js"
import Download from "../../components/newlanding/Download"
import Faqs from "../../components/newlanding/Faq"
import Benefits from "../../components/newlanding/Benefits"
import Footer from "../../components/newlanding/Footer"
import Testimonial from "../../components/newlanding/Testimonial"
import Head from "next/head"

const Landing = () => {
	return (
		<div className="font-[Gilroy] text-[#270405]">
			<div className="w-full flex items-center flex-wrap text-center base:text-[0.8rem] lg:text-[min(1vw,1rem)] justify-center py-6">
				<span className="font-semibold">Up to 15% OFF* </span>&nbsp; on your
				Home Interiors. Limited Period Offer-Hurry Up!&nbsp;{" "}
				<span className="font-semibold underline uppercase"> BOOK NOW!!</span>
			</div>
			<Hero />
			<Benefits />
			<WhatweOffer />
			<WeProvide />
			<Advantages />
			<LandingAboutus />
			<Download />
			<Testimonial />
			<Faqs />

			<Footer />
		</div>
	)
}

export default Landing
