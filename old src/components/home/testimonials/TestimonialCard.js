import styles from '../../../styles/home/testimonials/TestimonialCard.module.scss';

function TestimonialCard({ id, content, name, position, company }) {
	return (
		<div className={styles.card}>
			<div className={styles.card__quoteBlock}>
				<p className={styles.card__content}>{content}</p>
			</div>
			<div className={styles.card__block}>
				<p className={styles.card__name}>{name}</p>
				<div className={styles.card__subBlock}>
					<p className={styles.card__position}>{position}, </p>
					<p className={styles.card__company}>{company}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
