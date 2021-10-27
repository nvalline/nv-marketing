import Head from 'next/head';
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
				<meta name='description' content='Generated by create next app' />
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
