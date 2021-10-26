import ServiceCard from './ServiceCard';
import { services } from '../../../data/Services';

import styles from '../../../styles/home/services/Services.module.scss';

function Services() {
	const serviceData = services;

	return (
		<section className={styles.services}>
			<div className={styles.services__container}>
				{serviceData.map((service) => {
					return <ServiceCard key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
}

export default Services;
