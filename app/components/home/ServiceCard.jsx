import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

// Styles
import styles from '../../styles/components/home/ServiceCard.module.scss';

export default function ServiceCard({ name, icon, excerpt }) {
	const serviceIcon = urlFor(icon).url();

	return (
		<div className={styles.service_card}>
			<div className={styles.service_card__icon}>
				<Image src={serviceIcon} alt='icon' width={50} height={50} />
			</div>
			<h3 className={styles.service_card__header}>{name}</h3>
			<p className={styles.service_card__excerpt}>{excerpt}</p>
		</div>
	);
}
