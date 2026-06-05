import GoogleAnalytics from './GoogleAnalytics';

// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

// Styles
import './styles/globals.scss';
import { Montserrat } from 'next/font/google';

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
		'NV Marketing helps small businesses in the Intermountain region build high-performance websites and grow organic traffic. Web design, development, and SEO at small-business prices.',
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
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
