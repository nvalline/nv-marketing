module.exports = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
		NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
	},
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US'
	}
};
