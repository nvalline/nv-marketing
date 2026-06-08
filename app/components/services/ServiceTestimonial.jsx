// Styles
import styles from '../../styles/components/services/ServiceTestimonial.module.scss';

export default function ServiceTestimonial({ heading, author, position, company, content, rating }) {
	const stars = Array.from({ length: rating }, (_, i) => i);

	return (
		<section className={styles.testimonial}>
			<div className={styles.testimonial__wrapper}>
				<h2 className={styles.testimonial__header}>{heading}</h2>
				<div className={styles.testimonial__card}>
					<div className={styles.testimonial__stars} aria-label={`${rating} out of 5 stars`}>
						{stars.map((_, i) => (
							<span key={i} className={styles.testimonial__star} aria-hidden='true'>★</span>
						))}
					</div>
					<p className={styles.testimonial__content}>&ldquo;{content}&rdquo;</p>
					<p className={styles.testimonial__author}>{author}</p>
					<p className={styles.testimonial__details}>{position}, {company}</p>
				</div>
			</div>
		</section>
	);
}
