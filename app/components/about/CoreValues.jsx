import Image from 'next/image';
import { sanityClient } from '../../lib/sanity';
import circle1 from './value_circle_1.png';
import circle2 from './value_circle_2.png';

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
				<div className={styles.coreValues__value___block}>
					{coreValues.map((value, index) => {
						return (
							<div key={value._id} className={styles.coreValues__value}>
								<Image
									src={index % 2 ? circle2 : circle1}
									alt='Core Values'
									fill
								/>
								<p className={styles.coreValues__title}>{value.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
