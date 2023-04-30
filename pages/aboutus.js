/** @format */

import React from "react"
import AboutusHero from "../components/aboutus"
import AboutUsContainer from "../components/aboutUsContainer"
import AboutUsBehind from "../components/aboutUsBehind"
import AboutUsMeet from "../components/aboutUsMeet"
import LoadingScreen from "../components/LoadingScreen"
import ExampleComponent from "../components/ExampleComponent"
import Navbar from "../components/Navbar"
import TransitionScreen from "../components/TransitionScreen"

const Aboutus = () => {
	return (
		<div data-scroll-section>
			<AboutusHero />
			<AboutUsContainer left={true} />
			<AboutUsBehind />
			<AboutUsContainer left={false} />
			<AboutUsMeet />
		</div>
	)
}

export default Aboutus
