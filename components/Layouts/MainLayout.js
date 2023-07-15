/** @format */

import React, { useEffect, useRef, useState } from "react"
import Layout from "./Layout"
import SineWave from "../sine"
import LoadingScreen from "../LoadingScreen"
import { useRouter } from "next/router"
import { gsap } from "gsap"
import { Cursor } from "../Cursor"

const MainLayout = ({ children }) => {
	const [loaded, setLoaded] = useState(false)


	const [startAnimation, setStartAnimation] =
		useState(false)

	const loader = useRef(null)

	const router = useRouter()

	useEffect(() => {
		const loaderRef = loader.current

		const onClick = e => {
			console.log(e)
			gsap
				.timeline()
				.fromTo(
					loaderRef,
					{ opacity: 1 },
					{
						opacity: 0,

						transformOrigin: "bottom center",
						duration: 0.5,
					}
				)
				.fromTo(
					loaderRef,
					{
						display: "block",
					},
					{
						display: "none",
					}
				)

			setLoaded(true)
		}

		loaderRef.addEventListener("click", onClick)

		return () => {
			loaderRef.removeEventListener("click", onClick)
		}
	}, [loader])

	return (
		<div>
			{!loaded ? (
				<>
					<LoadingScreen ref={loader} />
					<Cursor />
				</>
			) : (
				<>
					<SineWave />
					<Layout>{children}</Layout>
				</>
			)}
		</div>
	)
}

export default MainLayout
