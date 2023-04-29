/** @format */

import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "../styles/globals.css"

import localFont from "next/font/local"
import { useRef } from "react"

// Font files can be colocated inside of `pages`
const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})

function MyApp({ Component, pageProps }) {
	const mainContainerRef = useRef(null)
	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				multiplier: 1,
				lerp: 0.05,
			}}
			containerRef={mainContainerRef}
		>
			<main
				data-scroll-container
				ref={mainContainerRef}
				className={golden.variable}
			>
				<Component {...pageProps} />
			</main>
		</LocomotiveScrollProvider>
	)
}

export default MyApp
