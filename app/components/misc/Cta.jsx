import Link from 'next/link';
import { sanityClient } from '../../lib/sanity';

// Components
import PrimaryBtn from './PrimaryBtn';

// Styles
import styles from '../../styles/components/misc/Cta.module.scss';

const getCta = async () => {
	const query = `*[_type == 'callToActions']`;

	const data = await sanityClient.fetch(query);

	return data;
};

const filterCta = async (page, unfilteredCta) => {
	return unfilteredCta.find((cta) => cta.page.includes(page));
};

export default async function Cta({ page }) {
	const unfilteredCta = await getCta();
	const cta = await filterCta(page, unfilteredCta);

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
