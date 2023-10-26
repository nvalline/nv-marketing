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
	title: 'Home',
	description: 'Welcome to Next.js'
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}) {
	return (
		<html lang='en'>
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
