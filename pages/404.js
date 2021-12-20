import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import PixelBar from '../components/misc/PixelBar';

import styles from '../styles/404.module.scss';

export default function Custom404() {
	const metaDescription =
		'This page does not exist for NV Marketing, LLC. NV Marketing, LLC provides website design & seo service for small business.';

	return (
		<>
			<Head>
				{/* Page Title */}
				<title>404 | NV Marketing, LLC</title>
				{/* Page Description */}
				<meta name='description' content={metaDescription} />
				<meta
					name='keywords'
					content='website design, website development, seo, digital presence, design agency, freelance, web builder, small business website'
				/>
				{/* Open Graph Protocol */}
				<meta property='og:title' content='NV Marketing, LLC' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://nv-marketing.com/images/og/og_website_image_fb.jpg'
				/>
				<meta property='og:url' content='https://nv-marketing.com' />
				<meta property='og:description' content={metaDescription} />
				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@Nate_Valline' />
				<meta name='twitter:title' content='NV Marketing, LLC' />
				<meta name='twitter:description' content={metaDescription} />
				<meta
					name='twitter:image'
					content='https://nv-marketing.com/images/og/og_website_image_twitter.png'
				/>
			</Head>
			<section className={styles.custom404}>
				<PixelBar position='top' />
				<div className={styles.custom404__container}>
					<div className={styles.custom404__contentWrapper}>
						<h1 className={styles.custom404__exclamation}>Oh No!</h1>
						<h2 className={styles.custom404__title}>
							404 | This page does not exist...
						</h2>
						<Link href='/'>
							<a className={styles.custom404__button}>
								Return to NV Marketing, LLC
							</a>
						</Link>
					</div>
				</div>
				<PixelBar position='bottom' />
			</section>
		</>
	);
}

Custom404.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
