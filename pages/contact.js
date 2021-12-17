import Head from 'next/head';

import Layout from '../components/Layout';
import ContactAccent from '../components/misc/ContactAccent';
import Details from '../components/contact/details/Details';
import FormSection from '../components/contact/form/FormBlock';

import { contactDetails } from '../data/ContactDetails';

import styles from '../styles/contact/Contact.module.scss';

export default function Contact({ details }) {
	const metaDescription =
		'NV Marketing, LLC provides website design services for small business. Website design packages include design & development and SEO to increase traffic';

	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Contact | NV Marketing, LLC</title>
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
					content='https://nv-marketing.com/images/og/og_website_image_fb.png'
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

			<ContactAccent top='top' />
			<div className={styles.contact}>
				<div className={styles.contact__container}>
					<Details contactDetails={details} />
					<FormSection />
				</div>
			</div>
			<ContactAccent />
		</>
	);
}

Contact.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	return {
		props: {
			details: contactDetails
		}
	};
}
