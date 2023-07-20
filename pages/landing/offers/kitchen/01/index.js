/** @format */

import React from "react"

import Script from "next/script"
import Hero from "../../../../../components/newlanding/Hero"
import Benefits from "../../../../../components/newlanding/Benefits"
import WhatweOffer from "../../../../../components/newlanding/WhatweOffer"
import WeProvide from "../../../../../components/newlanding/WeProvide"
import Advantages from "../../../../../components/newlanding/Advantages"
import LandingAboutus from "../../../../../components/newlanding/LandingAboutus"
import Download from "../../../../../components/newlanding/Download"
import Testimonial from "../../../../../components/newlanding/Testimonial"
import Faqs from "../../../../../components/newlanding/Faq"
import Footer from "../../../../../components/newlanding/Footer"

import Image from "next/image"
import LandingForm from "../../../../../components/newlanding/LandingForm"

const Landing = () => {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=G-7XND0NLWKF`}
				id="analytics"
			/>
			<Script
				id="analytics1"
				strategy="lazyOnload"
			>
				{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7XND0NLWKF', {
        page_path: window.location.pathname,
        });
    `}
			</Script>
			<div className="cursor-default  font-[Gilroy] text-[#270405]">
				<div className="w-full flex items-center flex-wrap text-center base:text-[0.7rem] lg:text-[min(1vw,1rem)] justify-center py-6">
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
				<LandingForm />
				<Footer />
			</div>
		</>
	)
}

export default Landing
