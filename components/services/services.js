import ServiceCard from './serviceCard';
import { services } from '../../data/services';

import styles from '../../styles/services/Services.module.scss';

function Services() {
	const serviceData = services;

	return (
		<section className={styles.services}>
			{serviceData.map((service) => {
				return <ServiceCard key={service.id} {...service} />;
			})}
		</section>
	);
}

export default Services;