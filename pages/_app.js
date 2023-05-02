/** @format */

import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "../styles/globals.css"

import { useRef } from "react"
import Layout from "../components/Layouts/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
