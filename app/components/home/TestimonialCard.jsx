import Image from 'next/image';
import lowerRightCorner from './bottom_right_corner.png';
import starImg from './star.png';
import upperLeftCorner from './upper_left_corner.png';

// Styles
import styles from '../../styles/components/home/TestimonialCard.module.scss';

export default function TestimonialCard({
	author,
	company,
	content,
	position,
	rating
}) {
	const numberOfImages = rating;
	const imageArray = Array.from(
		{ length: numberOfImages },
		(_, index) => index
	);

	return (
		<div className={styles.testimonial_card}>
			<div className={styles.testimonial_card__accent___upper}>
				<Image
					src={upperLeftCorner}
					alt='Corner Accent'
					height={48}
					width={48}
				/>
			</div>
			<div className={styles.testimonial_card__rating}>
				{imageArray.map((star) => {
					return (
						<Image
							key={star.index}
							src={starImg}
							alt='Star'
							height={20}
							width={20}
							quality={100}
						/>
					);
				})}
			</div>
			<p className={styles.testimonial_card__content}>{content}</p>
			<h4 className={styles.testimonial_card__author}>{author}</h4>
			<p className={styles.testimonial_card__details}>
				{position}, {company}
			</p>
			<div className={styles.testimonial_card__accent___lower}>
				<Image
					src={lowerRightCorner}
					alt='Corner Accent'
					height={48}
					width={48}
				/>
			</div>
		</div>
	);
}
