import Link from 'next/link';

import Layout from '../components/Layout';
import PixelBar from '../components/misc/PixelBar';

import styles from '../styles/404.module.scss';

export default function Custom404() {
	return (
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
	);
}

Custom404.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
