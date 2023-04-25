import "../styles/globals.css";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const golden = localFont({
  src: "../styles/font/golden/golden.woff2",
  variable: "--font-golden",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={golden.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
