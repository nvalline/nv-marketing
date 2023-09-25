'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import PrimaryBtn from './PrimaryBtn';

// Styles
import styles from '../../styles/components/misc/Cta.module.scss';

const filterCta = (page, unfilteredCta) => {
	return unfilteredCta.find((cta) => cta.page.includes(page));
};

export default function Cta({ unfilteredCta }) {
	let currentPage = '';

	const pathname = usePathname();

	switch (pathname) {
		case '/about':
			if (pathname === '/about') {
				currentPage = 'about';
			}
			break;

		case '/services':
			if (pathname === '/services') {
				currentPage = 'services';
			}
			break;

		case '/':
			if (pathname === '/') {
				currentPage = 'home';
			}
			break;

		default:
			currentPage = 'home';
	}

	const cta = filterCta(currentPage, unfilteredCta);

	return (
		<section className={styles.cta}>
			<div className={styles.cta__wrapper}>
				<div className={styles.cta__content___block}>
					<h2 className={styles.cta__header}>{cta.header}</h2>
					<p className={styles.cta__sub_header}>{cta.subHeader}</p>
				</div>
				<div className={styles.cta__btn___block}>
					<Link href={'/contact'}>
						<PrimaryBtn text={cta.btnText} classname={styles.cta__btn} />
					</Link>
				</div>
			</div>
		</section>
	);
}
