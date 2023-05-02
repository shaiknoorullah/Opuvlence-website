/** @format */

import localFont from "next/font/local"

// Font files can be colocated inside of `pages`
const golden = localFont({
	src: "../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
const poppins = localFont({
	src: "../styles/font/poppins/Poppins-Light.woff2",
	variable: "--font-poppins",
})

// const lamore = localFont({
// 	src: "../styles/font/lamor/lamore.woff2",
// 	variable: "--font-lamore",
// })

module.exports = {
	golden: golden.className,
	poppins: poppins.className,
	// lamore: lamore.className,
}
