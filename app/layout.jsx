import Script from 'next/script';
import GoogleAnalytics from './GoogleAnalytics';

// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

// Styles
import './styles/globals.scss';
import { Montserrat } from 'next/font/google';

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'NV Marketing',
	url: 'https://nv-marketing.com',
	logo: 'https://nv-marketing.com/_next/static/media/logo_dark.0d6f6727.png',
	description:
		'Web design, development, and SEO for small businesses in the Intermountain region.',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Midway',
		addressRegion: 'UT',
		addressCountry: 'US'
	},
	telephone: '+18017421290',
	sameAs: [
		'https://www.facebook.com/nvmarketingllc',
		'https://www.instagram.com/nv_marketing_llc/'
	],
	founder: {
		'@type': 'Person',
		name: 'Nate Valline',
		jobTitle: 'Founder & CEO'
	}
};

const montserrat = Montserrat({
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '700']
});

export const metadata = {
	title: {
		template: '%s | NV Marketing',
		default: 'NV Marketing | Web Design, Development & SEO — Intermountain Region'
	},
	description:
		'NV Marketing helps small businesses in the Intermountain region build websites and grow organic traffic with web design, development, and SEO.',
	metadataBase: new URL('https://nv-marketing.com')
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}) {
	return (
		<html lang='en' data-scroll-behavior='smooth'>
			<body className={montserrat.className}>
				{process.env.NEXT_PUBLIC_GOOGLE_ID ? (
					<GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ID} />
				) : null}
				<Script
					id='organization-schema'
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
