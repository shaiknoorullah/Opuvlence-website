/** @format */

import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"
import { useEffect } from "react"

export default useLocoScroll = start => {
	useEffect(() => {
		if (!start) return

		const scrollEl = document.getElementById(
			"main-container"
		)

		const locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			class: "is-reveal",
		})
	}, [start])
}
