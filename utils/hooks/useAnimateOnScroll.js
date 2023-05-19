/** @format */

import { useState, useEffect, useRef } from "react"

export const useAnimateOnScroll = (
	threshold,
	once = true
) => {
	const [isIntersecting, setIsIntersecting] =
		useState(false)
	const wasIntersecting = useRef(false)
	const targetRef = useRef(null)

	useEffect(() => {
		const observerCallback = entries => {
			entries.forEach(entry => {
				if (once) {
					if (
						entry.isIntersecting &&
						!wasIntersecting.current
					) {
						setIsIntersecting(true)
						wasIntersecting.current = true
					} else {
						setIsIntersecting(false)
					}
				} else {
					if (entry.isIntersecting) {
						setIsIntersecting(true)
					} else {
						setIsIntersecting(false)
					}
				}
			})
		}

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: threshold,
		}

		const observer = new IntersectionObserver(
			observerCallback,
			options
		)
		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return { isIntersecting, targetRef }
}
