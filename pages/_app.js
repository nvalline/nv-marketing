import Head from 'next/head';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
}
