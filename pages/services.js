/** @format */

import React from "react"
import ServicesComp from "../components/ServicesComp"
import OurServices from "../components/OurServices"
import Navbar from "../components/Navbar"
import TransitionScreen from "../components/TransitionScreen"
import Services4 from "../components/Services4"
import ServicesBottom from "../components/ServicesBottom"

const Services = () => {
	return (
		<div
			// data-scroll-section
			className="bg-[#F6EBDD] w-full px-[40px] "
		>
			{/* pls remove services4  , servicescomp and ourservices  */}
			<OurServices />
			<div className="my-[200px]">
				<ServicesBottom />
			</div>
			{/* <ServicesComp /> */}
			{/* <Services4 /> */}
			{/* <ServicesBottom /> */}
		</div>
	)
}

export default Services
