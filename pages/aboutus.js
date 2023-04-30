/** @format */

import React from "react"
import AboutusHero from "../components/aboutus"
import AboutUsContainer from "../components/aboutUsContainer"
import AboutUsBehind from "../components/aboutUsBehind"
import AboutUsMeet from "../components/aboutUsMeet"
import Head from "next/head"

const Aboutus = () => {
	return (
		<div>
			<Head>
				<title>About Us - Opuvlence</title>
				<meta
					name="description"
					content="Learn more about Opuvlence - our mission, values, and team."
				/>
				<meta
					name="keywords"
					content="opuvlence, about us, mission, values, team"
				/>
				<meta
					name="author"
					content="Opuvlence Inc."
				/>
				<meta
					property="og:title"
					content="About Us - Opuvlence"
				/>
				<meta
					property="og:description"
					content="Learn more about Opuvlence - our mission, values, and team."
				/>
				<meta
					property="og:image"
					content="https://opuvlence.com/about-us.jpg"
				/>
				<meta
					property="og:url"
					content="https://opuvlence.com/about"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="About Us - Opuvlence"
				/>
				<meta
					name="twitter:description"
					content="Learn more about Opuvlence - our mission, values, and team."
				/>
				<meta
					name="twitter:image"
					content="https://opuvlence.com/about-us.jpg"
				/>
			</Head>
			<AboutusHero />
			<AboutUsContainer left={true} />
			<AboutUsBehind />
			<AboutUsContainer left={false} />
			<AboutUsMeet />
		</div>
	)
}

export default Aboutus
