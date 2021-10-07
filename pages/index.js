import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>NV Marketing, LLC</title>
			</Head>

			<div className={styles.main}>NV Marketing LLC</div>
		</Layout>
	);
}
