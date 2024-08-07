import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

// Styles
import styles from '../../styles/components/home/ServiceCard.module.scss';

export default function ServiceCard({ name, icon, excerpt, key }) {
	const serviceIcon = urlFor(icon).url();

	return (
		<div key={key} className={styles.service_card}>
			<div className={styles.service_card__icon}>
				<Image src={serviceIcon} alt='icon' fill />
			</div>
			<h3 className={styles.service_card__header}>{name}</h3>
			<p className={styles.service_card__excerpt}>{excerpt}</p>
		</div>
	);
}
