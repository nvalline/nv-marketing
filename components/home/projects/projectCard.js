import Image from 'next/image';
import Button from '../../misc/Buttons';
import CircleLine from '../../misc/CircleLine';

import styles from '../../../styles/home/projects/ProjectCard.module.scss';

function ProjectCard({ id, img, name, description, url, accent }) {
	return (
		<div className={styles.card}>
			<div className={styles.card__imageWrapper}>
				{/* <Image
					src={img}
					alt={name}
					className={styles.imageWrapper__image}
					layout='fill'
					priority
				/> */}
				<img src={img} alt={name} className={styles.card__image} />
			</div>
			<div className={styles.card__contentWrapper}>
				<h3 className={styles.card__name}>{name}</h3>
				<p className={styles.card__description}>{description}</p>
				<Button
					type='button'
					className={styles.card__button}
					onClick={() => window.open(url, '_blank')}
					text='view site'
				/>
				<CircleLine accent={accent} />
			</div>
		</div>
	);
}

export default ProjectCard;
