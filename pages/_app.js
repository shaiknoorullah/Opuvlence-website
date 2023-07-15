/** @format */

import "../styles/globals.css"
import { useLenis } from "@studio-freight/react-lenis"
import { raf } from "@studio-freight/tempus"

import { useEffect, useRef } from "react"
import Layout from "../components/Layouts/Layout"
import MainLayout from "../components/Layouts/MainLayout"
import RealViewport from "../components/real-viewport"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { gsap } from "gsap"
import Script from "next/script"
import Head from "next/head"

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger)
	ScrollTrigger.defaults({ markers: false })

	// merge rafs
	gsap.ticker.lagSmoothing(0)
	gsap.ticker.remove(gsap.updateRoot)
	raf.add(time => {
		gsap.updateRoot(time / 1000)
	}, 0)

	// reset scroll position
	window.scrollTo(0, 0)
	window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
	const lenis = useLenis(ScrollTrigger.update)
	useEffect(ScrollTrigger.refresh, [lenis])
	return (
		<>
			<Head>
				<script type="text/javascript">
					{`
	(function(m, o, n, t, e, r, _){
			  m['__GetResponseAnalyticsObject'] = e;m[e] = m[e] || function() {(m[e].q = m[e].q || []).push(arguments)};
			  r = o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async = 1;r.src = t;r.setAttribute('crossorigin', 'use-credentials');_.parentNode .insertBefore(r, _);
		  })(window, document, 'script', 'https://ga.getresponse.com/script/28da83f2-21ac-42dd-a43f-068a2708c221/ga.js', 'GrTracking');
	`}
				</script>
			</Head>
			<Script
				id="datalayerscript"
				strategy="lazyOnload"
			>
				{`
					window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
  						gtag('js', new Date());

  					gtag('config', 'G-YDB95HKDNQ');
				`}
			</Script>

			<MainLayout>
				<RealViewport />
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp
