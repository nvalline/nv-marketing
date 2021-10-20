import Head from 'next/head';
import Header from '../components/header/header';
import ContactAccent from '../components/misc/contactAccent';
import Details from '../components/contact/details/details';
import Footer from '../components/footer/footer';

export default function Contact() {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Contact | NV Marketing, LLC</title>
				{/* Page Description */}
				<meta name='description' content='Generated by create next app' />
			</Head>

			<Header />
			<main>
				<ContactAccent />
				<Details />
				<ContactAccent />
			</main>
			<Footer />
		</>
	);
}
