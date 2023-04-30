/** @format */

import React from "react"
import localFont from "next/font/local"
import { golden, poppins } from "../utils/fonts"

// Font files can be colocated inside of `pages`

const AboutusHero = () => {
	return (
		<div className="w-full flex justify-center">
			<div className="flex base:w-[95%] max-w-[1920px] lg:w-[95%] flex-col">
				{/* text and image section grid*/}
				<div className="lg:grid grid-cols-12 base:pt-7 lg:pt-[2rem] ">
					<div className="flex row-span-full flex-col text-black col-start-1 col-end-6  z-50">
						<div
							className={`base:text-[2.8rem] lg:text-[min(6.2vw,8rem)] tracking-[0.7rem] lg:leading-[min(7vw,130px)] ${golden}`}
						>
							GET TO KNOW US
						</div>
						{/* change this poppins to lamore */}
						<div
							className={`base:text-[1.8rem] lg:text-[2rem] ${poppins}`}
						>
							ThE StOrY BeHinD
						</div>

						{/* quotation for desktop */}
						<div
							className={`lg:inline-block base:hidden mt-[5rem] text-[1.3rem] w-[70%] font-medium italic ${poppins}`}
						>
							Experience the art of luxury interior design.
							Let us transform your space into a
							breathtaking work of art.
						</div>
					</div>

					{/* image section */}
					<div className="col-start-5 row-span-full base:py-4 col-end-13 z-0">
						<img
							className="lg:hidden lg:pl-10 lg:pr-4 w-full rounded-bl-[2rem] "
							src="/aboutusheromobile.jpg"
						/>
						<img
							className="base:hidden lg:inline-block lg:pl-10 lg:pr-4 "
							src="/AboutUsHero.jpg"
						/>
					</div>
				</div>
				<div
					className={`lg:hidden base:inline-block   lg:text-[1.3rem] w-[80%] font-extrabold italic ${poppins}`}
				>
					“Experience the art of luxury interior design. Let
					us transform your space into a breathtaking work
					of art.”
				</div>

				{/* description*/}
				<div className="grid py-[3rem] grid-cols-[1fr_3fr_1fr]">
					<div
						style={{
							gridColumnStart: 2,
							gridColumnEnd: 3,
						}}
						className={`${poppins} lg:ml-[17rem lg:mr-[10rem] base:text-[1rem] lg:text-[1rem] base:text-right lg:text-left py-11 text-black lg:leading-8 font-normal`}
					>
						At our interior design company, we&apos;re more
						than just designers. We&apos;re visionaries,
						artists, and dreamers. We&apos;re passionate
						about creating spaces that inspire, delight, and
						transcend the ordinary. From elegant residential
						homes to awe-inspiring commercial spaces, we
						bring our unique blend of creativity,
						innovation, and expertise to every project. Our
						team of experts work tirelessly to ensure that
						every detail is perfect, leaving our clients
						with a space that is both beautiful and
						functional. At our company, luxury is not just a
						word, it&apos;s a way of life, and we&apos;re
						committed to bringing that to every design we
						create.
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutusHero
