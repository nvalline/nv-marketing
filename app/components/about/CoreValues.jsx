import Image from 'next/image';
import circle1 from './value_circle_1.png';
import circle2 from './value_circle_2.png';

// Styles
import styles from '../../styles/components/about/CoreValues.module.scss';

export default function CoreValues() {
	const coreValues = [
		{ id: 1, value: 'excellence' },
		{ id: 2, value: 'innovation' },
		{ id: 3, value: 'empowerment' },
		{ id: 4, value: 'transparency' }
	];

	return (
		<section className={styles.coreValues}>
			<div className={styles.coreValues__wrapper}>
				<h2 className={styles.coreValues__header}>Our Core Values</h2>
				<div className={styles.coreValues__value___block}>
					{coreValues.map((value) => {
						return (
							<div key={value.id} className={styles.coreValues__value}>
								<Image
									src={value.id % 2 ? circle1 : circle2}
									alt='Core Values'
									fill
								/>
								<p className={styles.coreValues__title}>{value.value}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
