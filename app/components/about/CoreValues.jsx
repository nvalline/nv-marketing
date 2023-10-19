import { sanityClient } from '../../lib/sanity';

// Components
import ValueList from './ValueList';

// Styles
import styles from '../../styles/components/about/CoreValues.module.scss';

const getCoreValues = async () => {
	const query = `*[_type == 'coreValues'] | order(_createdAt asc)`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function CoreValues() {
	const coreValues = await getCoreValues();

	return (
		<section className={styles.coreValues}>
			<div className={styles.coreValues__wrapper}>
				<h2 className={styles.coreValues__header}>Our Core Values</h2>
				<ValueList
					coreValues={coreValues}
					divClassname1={styles.coreValues__value___block}
					divClassname2={styles.coreValues__value}
					titleClassname={styles.coreValues__title}
				/>
			</div>
		</section>
	);
}
