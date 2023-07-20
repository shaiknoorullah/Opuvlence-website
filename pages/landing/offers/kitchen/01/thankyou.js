/** @format */

import React from "react"
import localFont from "next/font/local"
import Link from "next/link"
const golden = localFont({
	src: "../../../../../styles/font/golden/golden.woff2",
	variable: "--font-golden",
})
// const poppins = localFont({
//   src: "../styles/font/poppins/Poppins-ExtraBold.woff2",
//   variable: "--font-poppins",
// });
const poppinsExtrabold = localFont({
	src: "../../../../../styles/font/poppins/Poppins-ExtraBold.woff2",
})
const poppinsRegular = localFont({
	src: "../../../../../styles/font/poppins/Poppins-Regular.woff2",
})
const poppinsMedium = localFont({
	src: "../../../../../styles/font/poppins/Poppins-Medium.woff2",
})
const poppinsSemibold = localFont({
	src: "../../../../../styles/font/poppins/Poppins-SemiBold.woff2",
})

const Thankyou = () => {
	return (
		<div
			className="flex flex-col w-full items-center justify-center text-black h-screen cursor-default
  "
		>
			<div
				className={`${golden.className} base:text-[1.8rem] lg:text-[min(3vw,5rem)] flex items-center justify-center w-full`}
			>
				THANKYOU
			</div>
			<div
				className={`${poppinsRegular.className} base:text-[1rem] lg:text-[min(1.1vw,1.5rem)] font-light flex items-center text-center w-[50%] justify-center`}
			>
				Thank you for joining us! Welcome to a realm of culinary dreams where we
				embark on an enchanting journey together.
			</div>
			<div
				className={`${poppinsRegular.className} base:text-[1rem] mt-8  lg:text-[min(1.1vw,1.5rem)] font-light flex flex-col items-center text-center w-[50%] justify-center`}
			>
				If you have any additional queries, please do not hesitate to reach out
				to us at <p className="font-bold text-[18x]"> care@opuvlence.com </p>
				<p className="font-bold text-[18x]"> +91 88671 59086 </p>
			</div>
			<Link
				href={"/landing/offers/kitchen/01"}
				className="underline text-[min(1.2vw,1.4rem)] font-semibold mt-8"
			>
				Go to homepage
			</Link>
			<div className="bg-[#270405] fixed bottom-0 left-0 text-white flex h-20 w-full self-end justify-center items-center">
				<Link
					href={"https://www.instagram.com/opuvlence"}
					target="_blank"
				>
					<h4 className="text-[18px] font-medium underline mx-[30px]">
						Instagram
					</h4>
				</Link>
				<Link
					href={"https://www.facebook.com/opuvlence"}
					target="_blank"
				>
					<h4 className="text-[18px] font-medium underline mx-[30px]">
						Facebook
					</h4>
				</Link>
				<Link
					href={"https://www.youtube.com/opuvlence"}
					target="_blank"
				>
					<h4 className="text-[18px] font-medium underline mx-[30px]">
						Youtube
					</h4>
				</Link>
			</div>
		</div>
	)
}

export default Thankyou
