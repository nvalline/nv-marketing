import Head from 'next/head';
import Script from 'next/script';

import '@/styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			{/* Google Analytics */}
			<Script
				id='ga-tag-url'
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id='ga-datalayer' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
			</Script>

			<Component {...pageProps} />
		</>
	);
}
