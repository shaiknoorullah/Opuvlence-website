/** @format */

import { useRouter } from "next/router"
import React, { useRef } from "react"
import {
	LocomotiveScrollProvider,
	useLocomotiveScroll,
} from "react-locomotive-scroll"
import Navbar from "../Navbar"
import Footer from "../Footer"

import localFont from "next/font/local"
import LoadingScreen from "../LoadingScreen"
import ExampleComponent from "../ExampleComponent"

// Font files can be colocated inside of `pages`
const golden = localFont({
	src: "../../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})

const Layout = props => {
	const mainContainerRef = useRef(null)
	const router = useRouter()
	const { scroll } = useLocomotiveScroll()
	const path = router.pathname.split("?")[0]
	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				lerp: 0.03,
				offset: [-100, 0],
				repeat: true,
			}}
			watch={[path]}
			location={path}
			containerRef={mainContainerRef}
			onLocationChange={scroll =>
				scroll.scrollTo(0, {
					duration: 0,
					disableLerp: true,
				})
			} // If you want to reset the scroll position to 0 for example
			onUpdate={() =>
				console.log("Updated, but not on location change!")
			}
		>
			<div
				data-scroll-container
				className="w-screen"
				ref={mainContainerRef}
			>
				<div
					className={` Layout container antialiased w-screen h-full`}
				>
					{router.asPath == "/" && <LoadingScreen />}
					<Navbar />
					<ExampleComponent />
					{props.children}
					{router.asPath != "/services" && <Footer />}
				</div>
			</div>
		</LocomotiveScrollProvider>
	)
}

export default Layout
