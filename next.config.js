/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		BREVO_API_KEY: process.env.NEXT_PUBLIC_BREVO_API_KEY,
	},
}

module.exports = nextConfig
