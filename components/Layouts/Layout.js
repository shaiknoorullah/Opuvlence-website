/** @format */

import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

import localFont from "next/font/local"
import LoadingScreen from "../LoadingScreen"
import ExampleComponent from "../ExampleComponent"
import { gsap } from "gsap"
import SineWave from "../sine"
import { Lenis } from "@studio-freight/react-lenis"
import { Cursor } from "../Cursor"

// Font files can be colocated inside of `pages`
const golden = localFont({
	src: "../../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})

const Layout = props => {
	const mainContainerRef = useRef(null)
	const router = useRouter()
	const path = router.pathname.split("?")[0]

	const easeInOutQuart = x => {
		return x < 0.5
			? 8 * x * x * x * x
			: 1 - Math.pow(-2 * x + 2, 4) / 2
	}

	return (
		<Lenis
			root
			options={{
				lerp: 0.05,
				// easing: t => easeInOutQuart(t),
			}}
		>
			<div>
				<main>
					<Navbar />
					<Cursor />
					<ExampleComponent />
					{props.children}
					<Footer />
				</main>
			</div>
		</Lenis>
	)
}

export default Layout
