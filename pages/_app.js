/** @format */

import "../styles/globals.css"
import { useLenis } from "@studio-freight/react-lenis"
import { raf } from "@studio-freight/tempus"

import { useEffect, useRef } from "react"
import Layout from "../components/Layouts/Layout"
import MainLayout from "../components/Layouts/MainLayout"
import RealViewport from "../components/real-viewport"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { gsap } from "gsap"

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger)
	ScrollTrigger.defaults({ markers: false })

	// merge rafs
	gsap.ticker.lagSmoothing(0)
	gsap.ticker.remove(gsap.updateRoot)
	raf.add(time => {
		gsap.updateRoot(time / 1000)
	}, 0)

	// reset scroll position
	window.scrollTo(0, 0)
	window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
	const lenis = useLenis(ScrollTrigger.update)
	useEffect(ScrollTrigger.refresh, [lenis])
	return (
		<MainLayout>
			<RealViewport />
			<Component {...pageProps} />
		</MainLayout>
	)
}

export default MyApp
