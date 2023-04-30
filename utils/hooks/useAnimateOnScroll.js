/** @format */

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useLocomotiveScroll } from "react-locomotive-scroll"

const useAnimateOnScroll = () => {
	const containerRef = useRef(null)
	const { scroll } = useLocomotiveScroll()

	console.log(scroll)

	useEffect(() => {
		if (!containerRef.current) return

		const elements = containerRef.current.querySelectorAll(
			"[data-animate-on-scroll]"
		)
		elements.forEach(el => {
			el.style.visibility = "hidden"
		})

		const handleScroll = () => {
			elements.forEach(el => {
				const { top, bottom } = el.getBoundingClientRect()
				if (top < window.innerHeight && bottom > 0) {
					gsap.to(el, {
						duration: 0.6,
						y: 0,
						opacity: 1,
						ease: "power4.out",
						delay: 0.2,
					})
					el.style.visibility = "visible"
				}
			})
		}

		handleScroll()

		// scroll

		return () => {
			// scroll.off("scroll")
		}
	}, [scroll])

	return { containerRef }
}

export default useAnimateOnScroll
