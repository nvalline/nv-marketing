import Head from 'next/head';

import Layout from '../components/Layout';
import ContactAccent from '../components/misc/ContactAccent';
import Details from '../components/contact/details/Details';
import FormSection from '../components/contact/form/FormBlock';

import styles from '../styles/contact/Contact.module.scss';

export default function Contact() {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Contact | NV Marketing, LLC</title>
				{/* Page Description */}
				<meta
					name='description'
					content='NV Marketing, LLC provides website design services for small business. Website design packages include design & development and SEO to increase traffic'
				/>
			</Head>

			<ContactAccent />
			<div className={styles.contact}>
				<div className={styles.contact__container}>
					<Details />
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
