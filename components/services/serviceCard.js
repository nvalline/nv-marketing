import Image from 'next/image';

import styles from '../../styles/services/ServiceCard.module.scss';

function ServiceCard({ id, title, description, img }) {
	return (
		<div className={styles.serviceCard}>
			<div className={styles.iconWrapper}>
				<Image
					src={img}
					alt={title}
					layout='fill'
					className={styles.iconWrapper__icon}
				/>
			</div>
			<h2 className={styles.serviceCard__title}>{title}</h2>
			<p className={styles.serviceCard__desc}>{description}</p>
		</div>
	);
}

export default ServiceCard;
