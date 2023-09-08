import './styles/globals.scss';
import { Montserrat } from 'next/font/google';
import GoogleAnalytics from './GoogleAnalytics';

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
				<GoogleAnalytics />
				{children}
			</body>
		</html>
	);
}
