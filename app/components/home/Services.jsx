import { sanityClient } from '../../lib/sanity';

// Components
import ServiceCard from './ServiceCard';

// Styles
import styles from '../../styles/components/home/Services.module.scss';

const getData = async () => {
	const query = `*[_type == 'services']`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function Services() {
	const data = await getData();

	return (
		<section className={styles.services}>
			<div className={styles.services__wrapper}>
				<div className={styles.services__header___block}>
					<h2 className={styles.services__header}>
						Our Services, Your Success
					</h2>
					<p className={styles.services__sub_header}>
						We specialize in crafting custom web solutions that not only
						showcase the uniqueness of your business but also{' '}
						<span>drive results</span>.
					</p>
				</div>
				<div className={styles.services__cards}>
					{data.map((service) => {
						return (
							<ServiceCard
								key={service._key}
								name={service.name}
								icon={service.icon}
								excerpt={service.excerpt}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
