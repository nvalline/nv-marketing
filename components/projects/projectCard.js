import Image from 'next/image';
import Button from '../../components/misc/buttons';

import styles from '../../styles/projects/ProjectCard.module.scss';

function ProjectCard({ id, img, name, description, url }) {
	return (
		<div className={styles.card}>
			<div className={styles.card__imageWrapper}>
				<Image
					src={img}
					alt={name}
					layout='fill'
					className={styles.imageWrapper__image}
				/>
			</div>
			<h3 className={styles.card__name}>{name}</h3>
			<p className={styles.card__description}>{description}</p>
			<Button
				type='button'
				className={styles.card__button}
				onClick={() => window.open(url, '_blank')}
				text='view site'
			/>
		</div>
	);
}

export default ProjectCard;
