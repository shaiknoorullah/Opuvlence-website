/** @format */

import React from "react"
import Link from "next/link"

import localFont from "next/font/local"

const poppinsRegular = localFont({
	src: "../styles/font/poppins/Poppins-Regular.woff2",
	variable: "--font-poppins",
})
const poppinsSemibold = localFont({
	src: "../styles/font/poppins/Poppins-SemiBold.woff2",
	variable: "--font-poppins",
})
const poppinsMediumItalic = localFont({
	src: "../styles/font/poppins/Poppins-MediumItalic.woff2",
	variable: "--font-poppins",
})
const poppinsExtraBoldItalic = localFont({
	src: "../styles/font/poppins/Poppins-MediumItalic.woff2",
	variable: "--font-poppins",
})

import { golden, poppins } from "../utils/fonts"

const FooterLinks = [
	{
		heading: "Sitemap",
		links: [
			{
				href: "/aboutus",
				text: "About",
			},
			{
				href: "/services",
				text: "Services",
			},
			{
				href: "/casestudies",
				text: "Cases",
			},
			{
				href: "#contact",
				text: "Contact",
			},
		],
	},
	{
		heading: "Socials",
		links: [
			{
				href: "https://www.instagram.com/opuvlence",
				text: "Instagram",
			},
			{
				href: "https://www.facebook.com/theopuvlence",
				text: "Facebook",
			},
			{
				href: "https://www.youtube.com/opuvlence",
				text: "Youtube",
			},
			{
				href: "https://www.twitter.com/opuvlence",
				text: "Twitter",
			},
		],
	},
	{
		heading: "Quick Links",
		links: [
			{
				href: "/feedback",
				text: "Feedback",
			},
			{
				href: "/support",
				text: "Support",
			},
			{
				href: "/privacy",
				text: "Privacy",
			},
			{
				href: "/terms",
				text: "Terms",
			},
		],
	},
]

const Footer = () => {
	return (
		<footer className="w-screen flex justify-start flex-col gap-[124px] pl-[5vw] items-start mt-[180px] text-left">
			<div className="flex flex-col items-start justify-start gap-[51px] font-golden">
				<h2
					className={`${golden} m-0 relative text-[min(87.37px,max(22px,5vw))] text-[#1A0102] text-[inherit] tracking-[0.18em] leading-[135%] font-normal font-inherit flex items-end w-[1254px]`}
				>
					<span className="[line-break:anywhere] text-[#1A0102] w-full">
						<p className="m-0">Subscribe to</p>
						<p className="m-0">our Newsletter</p>
					</span>
				</h2>
				<div className="flex flex-col lg:w-fit base:w-[90vw] items-end justify-start gap-[8px]">
					<div className="flex flex-row items-center base:justify-between w-[100%] lg:justify-start base:gap-[0] lg:gap-[137px]">
						<input
							className={`[border:none] placeholder:opacity-[0.56] placeholder:text-[#765151] outline-none ${poppins} lg:text-[58.24px] base:text-[12px] text-[#765151]  bg-[transparent] relative tracking-[0.08em] uppercase font-bold text-left`}
							type="email"
							placeholder="Enter Your Email"
							required
						/>
						<button className="cursor-pointer [border:none] p-[5px] bg-[transparent]">
							<div
								className={`tracking-[0.08em] ${poppinsSemibold.className} text-[min(40px,max(9px,2vw))] uppercase font-semibold text-black text-center`}
							>
								subscribe
							</div>
						</button>
					</div>
					<div className="bg-[#1A0102] w-full h-[1px]" />
				</div>
			</div>
			<div
				className={`flex w-[100%] lg:flex-row base:flex-col items-start lg:flex-wrap justify-start lg:gap-[187px] base:gap-[100px] ${poppins} text-black text-[18.93px]`}
			>
				{FooterLinks.map((blocks, idx) => {
					return (
						<FooterLinkBlock
							key={idx}
							heading={blocks.heading}
							links={blocks.links}
						/>
					)
				})}
				<div className="flex flex-col items-start justify-start gap-[91px]">
					<div className="flex flex-col justify-start gap-[15px]">
						<h5
							className={`${poppinsSemibold.className} m-0 text-[inherit] tracking-[0.08em] uppercase font-semibold font-inherit`}
						>
							phone
						</h5>
						<a
							className={`${poppinsRegular.className} [text-decoration:none] base:text-[13px] lg:text-[18px] tracking-[0.18em] leading-[136.8%] font-medium font-gilroy text-[inherit] text-right`}
						>
							(+091) 7892360181
						</a>
					</div>
					<div className="flex flex-col justify-start gap-[15px]">
						<h5
							className={`${poppinsSemibold.className} m-0 text-[inherit] tracking-[0.08em] uppercase font-semibold font-inherit`}
						>
							email
						</h5>
						<a
							className={`${poppinsRegular.className} [text-decoration:none] base:text-[13px] lg:text-[18px] tracking-[0.18em] leading-[136.8%] font-medium font-gilroy text-[inherit] text-right`}
							href="mailto:care@opuvlence.com"
						>
							care@opuvlence.com
						</a>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start text-black gap-[16px] text-left text-[18.93px]">
					<h5
						className={`${poppinsSemibold.className} m-0  relative text-[inherit] tracking-[0.08em] uppercase font-semibold font-inherit`}
					>
						address
					</h5>
					<Link
						href="https://www.google.com/maps/place/Opuvlence/@13.0182965,77.6456517,17z/data=!3m1!4b1!4m6!3m5!1s0x844319234894b65d:0x8282e50574ef517f!8m2!3d13.0182913!4d77.648232!16s%2Fg%2F11twsvc47r"
						className={`${poppinsRegular.className} m-0 base:text-[13px] lg:text-[18px] cursor-pointer relative text-xl tracking-[0.18em] leading-[136.8%] font-medium flex items-end base:w-fit lg:w-[427px]`}
					>
						Orangery plaza Bengaluru, Karnataka, 560043
					</Link>
				</div>
			</div>
			<div className="flex flex-row items-start base:justify-between lg:justify-start lg:gap-[485px] lg:w-[initial] base:w-[90vw] text-right mb-[50px] text-xs text-black">
				<p className="m-0 relative italic font-medium">
					© 2022, Opuvlence
				</p>
				<Link
					className="[text-decoration:none] relative"
					href="https://www.websleak.com"
				>
					<i className="font-medium">{`Brought by `}</i>
					<i className="[text-decoration:underline] font-extrabold">
						websleak
					</i>
				</Link>
			</div>
		</footer>
	)
}

const FooterLink = ({ href, text }) => {
	return (
		<Link
			href={href}
			passHref
			className="[text-decoration:none] base:text-[13px] lg:text-[18px] cursor-pointer relative tracking-[0.08em] uppercase text-[inherit]"
		>
			{text}
		</Link>
	)
}

const FooterLinkBlock = ({ heading, links }) => {
	return (
		<div
			className={`flex flex-col items-start justify-start lg:gap-[74px] base:gap-[20px] ${poppinsRegular.className} font-normal`}
		>
			<h5
				className={`${poppinsSemibold.className} base:text-[15px] lg:text-[19px] m-0 relative tracking-[0.08em] uppercase font-semibold`}
			>
				{heading}
			</h5>
			<div className="flex flex-col items-start justify-center gap-[5px]">
				{links.map((link, idx) => {
					return (
						<FooterLink
							key={idx}
							href={link.href}
							text={link.text}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Footer
