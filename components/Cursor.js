/** @format */

import gsap from "gsap"
import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react"

function Cursor() {
	const cursor = useRef()
	const [isGrab, setIsGrab] = useState(false)
	const [isPointer, setIsPointer] = useState(false)
	const [hasMoved, setHasMoved] = useState(false)

	const onMouseMove = useCallback(
		({ clientX, clientY }) => {
			gsap.to(cursor.current, {
				x: clientX,
				y: clientY,
				duration: hasMoved ? 0.6 : 0,
				ease: "power4.out",
			})
			setHasMoved(true)
		},
		[hasMoved]
	)

	useEffect(() => {
		const tl = gsap.timeline({ paused: true })

		tl.fromTo(
			cursor.current.children[0],
			{
				scale: 1,
			},
			{
				scale: 2.5,
				duration: 0.5,
				ease: "power2.out",
			}
		)

		if (!isPointer || !isGrab) {
			tl.reverse()
		} else {
			tl.play()
		}
	}, [isPointer, isGrab])

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove, false)

		return () => {
			window.removeEventListener(
				"mousemove",
				onMouseMove,
				false
			)
		}
	}, [hasMoved, onMouseMove])

	useEffect(() => {
		document.documentElement.classList.add(
			"has-custom-cursor"
		)

		return () => {
			document.documentElement.classList.remove(
				"has-custom-cursor"
			)
		}
	}, [])

	useEffect(() => {
		let elements = []

		const onMouseEnter = () => {
			setIsPointer(true)
		}
		const onMouseLeave = () => {
			setIsPointer(false)
		}

		elements = [
			...document.querySelectorAll(
				"button,a,input,label,[data-cursor='pointer']"
			),
		]

		elements.forEach(element => {
			element.addEventListener(
				"mouseenter",
				onMouseEnter,
				false
			)
			element.addEventListener(
				"mouseleave",
				onMouseLeave,
				false
			)
		})

		return () => {
			elements.forEach(element => {
				element.removeEventListener(
					"mouseenter",
					onMouseEnter,
					false
				)
				element.removeEventListener(
					"mouseleave",
					onMouseLeave,
					false
				)
			})
		}
	}, [])

	useEffect(() => {
		let elements = []

		const onMouseEnter = () => {
			setIsGrab(true)
		}
		const onMouseLeave = () => {
			setIsGrab(false)
		}

		elements = [
			...document.querySelectorAll(
				"button,a,input,label,[data-cursor='pointer']"
			),
		]

		elements.forEach(element => {
			element.addEventListener(
				"mouseenter",
				onMouseEnter,
				false
			)
			element.addEventListener(
				"mouseleave",
				onMouseLeave,
				false
			)
		})

		return () => {
			elements.forEach(element => {
				element.removeEventListener(
					"mouseenter",
					onMouseEnter,
					false
				)
				element.removeEventListener(
					"mouseleave",
					onMouseLeave,
					false
				)
			})
		}
	}, [])

	return (
		<div
			style={{ opacity: hasMoved ? 1 : 0 }}
			className={`fixed top-0 left-0 h-screen w-full z-[99999999] pointer-events-none overflow-hidden`}
		>
			<div ref={cursor}>
				<div
					className={`absolute -translate-x-[50%] -translate-y-[50%] z-[999999999] border-[0.5px] border-black stroke-black stroke-2 w-[40px] h-[40px] rounded-[100%] bg-transparent transition-[transform_0.6s_cubic-bezier(0.16, 1, 0.3, 1)] `}
				/>
			</div>
		</div>
	)
}

export { Cursor }
