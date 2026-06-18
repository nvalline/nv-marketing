/** @type {import('next').NextConfig} */

const NextConfig = {
	reactStrictMode: true,
	turbopack: {
		root: __dirname
	},
	env: {
		NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
		NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
		NEXT_PUBLIC_HCAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
		HCAPTCHA_SECRET: process.env.HCAPTCHA_SECRET,
		SANITY_URL: process.env.SANITY_URL,
		NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET
	},
	images: {
		qualities: [75, 100],
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**'
			}
		]
	}
};

module.exports = NextConfig;
