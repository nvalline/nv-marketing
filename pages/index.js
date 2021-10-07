import Head from 'next/head';
import Header from '../components/header/header';

import homeStyles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>NV Marketing, LLC</title>
				{/* Page Description */}
				<meta name='description' content='Generated by create next app' />
			</Head>

			<Header />
			<main className={homeStyles.main}>NV Marketing, LLC</main>
		</>
	);
}
