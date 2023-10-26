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
	metadataBase: new URL('https://nv-marketing.com'),
	title: {
		default: 'NV Marketing',
		template: `%s | NV Marketing`
	},
	description:
		'NV Marketing provides enterprise website services for the local budget.',
	openGraph: {
		title: 'NV Marketing, LLC',
		description:
			'NV Marketing provides enterprise website services for the local budget.',
		url: 'https://nv-marketing.com',
		locale: 'en_US'
	}
};

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<GoogleAnalytics />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
