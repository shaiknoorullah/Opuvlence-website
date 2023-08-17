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
import "../styles/font/gilroy/stylesheet.css"
import { Router, useRouter } from "next/router"
import { Toaster } from "react-hot-toast"
import Image from "next/image"

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
	const router = useRouter()
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
				{/* <!-- Meta Pixel Code --> */}
				<script>
					{`
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '1390369494855385');
						fbq('track', 'PageView');
						
    				`}
				</script>
				<noscript>
					<Image
						height="1"
						width="1"
						style="display:none"
						alt=""
						src="https://www.facebook.com/tr?id=1390369494855385&ev=PageView&noscript=1"
					/>
				</noscript>
				{/* <!-- End Meta Pixel Code --> */}
				<script type="text/javascript">
					{`
             (function(m, o, n, t, e, r, _){
                   m['__GetResponseAnalyticsObject'] = e;m[e] = m[e] || function() {(m[e].q = m[e].q || []).push(arguments)};
                   r = o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async = 1;r.src = t;r.setAttribute('crossorigin', 'use-credentials');_.parentNode .insertBefore(r, _);
               })(window, document, 'script', 'https://ga.getresponse.com/script/28da83f2-21ac-42dd-a43f-068a2708c221/ga.js', 'GrTracking');
             
          `}
				</script>
			</Head>
			<Script src="https://www.googletagmanager.com/gtag/js?id=AW-11258206199" />
			<Script
				id="google-analytics"
				strategy="lazyOnload"
			>
				{`
					window.dataLayer = window.dataLayer || [];
 					function gtag(){dataLayer.push(arguments);}
 					gtag('js', new Date());

 					gtag('config', 'AW-11258206199');
       			`}
			</Script>
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
			{router.pathname !== "/landing/offers/kitchen/01" ? (
				router.pathname !== "/landing/offers/kitchen/01/thankyou" ? (
					<MainLayout>
						<RealViewport />
						<Toaster />
						<Component {...pageProps} />
					</MainLayout>
				) : (
					<Component {...pageProps} />
				)
			) : (
				<Component {...pageProps} />
			)}
		</>
	)
}

export default MyApp
