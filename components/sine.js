/** @format */

import { gsap } from "gsap"
import React, { useEffect, useRef, useState } from "react"

const SineWave = () => {
	const canvasRef = useRef(null)
	const audioPlayer = useRef(null)

	const [playing, setPlaying] = useState(true)
	const [amplitude, setAmplitude] = useState(20)

	useEffect(() => {
		if (playing) {
			const audio = document.querySelector("audio")
			setAmplitude(20)
			audio.play()
			gsap.fromTo(
				audio,
				{ volume: 0 },
				{ volume: 1, duration: 0.5, ease: "power2.out" }
			)
		} else {
			const audio = document.querySelector("audio")
			setAmplitude(5)
			gsap.fromTo(
				audio,
				{ volume: 1 },
				{ volume: 0, duration: 0.5, ease: "power2.out" }
			)
			audio.pause()
		}
	}, [playing])

	useEffect(() => {
		let canvas, ctx, wave, theta
		canvas = canvasRef.current
		console.log(canvas.height)
		canvas.width = 150
		canvas.height = 70

		ctx = canvas.getContext("2d")

		wave = {
			y: canvas.height / 2,
			length: 200000,
			amplitude: amplitude,
			speed: -0.05,
		}

		theta = 0

		window.requestAnimationFrame(animation)

		function animation(timestamp) {
			window.requestAnimationFrame(animation)

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			ctx.beginPath()
			ctx.moveTo(-canvas.width, canvas.height / 2)
			ctx.strokeStyle = `rgb(0, 0, 0)`
			ctx.lineWidth = 1

			// NOTE: Right waves
			ctx.beginPath()
			ctx.moveTo(-canvas.width / 2, canvas.height / 2)

			for (
				let i = -canvas.width / 2;
				i < canvas.width;
				i++
			) {
				ctx.lineTo(
					i,
					wave.y +
						Math.sin(i * wave.length + theta) *
							wave.amplitude
				)
			}
			ctx.stroke()

			theta += wave.speed
		}
	}, [amplitude])

	return (
		<>
			<audio
				ref={audioPlayer}
				loop
			>
				<source
					src="opuvlence.mp3"
					type="audio/mp3"
				/>
			</audio>

			<canvas
				ref={canvasRef}
				onClick={() => setPlaying(!playing)}
				className="cursor-pointer fixed bottom-[20px] right-[100px] z-[999999]"
			/>
		</>
	)
}

export default SineWave
