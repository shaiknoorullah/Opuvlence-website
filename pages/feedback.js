import React from 'react'

import localFont from "next/font/local"
const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
	variable: "--font-poppins",
})

const Feedback = () => {
  return (
    <div className={`${golden.className} base:text-[3rem] lg:text-[min(5vw,6rem)] flex items-center justify-center w-full py-[15rem]`}>Coming Soon</div>
  )
}

export default Feedback