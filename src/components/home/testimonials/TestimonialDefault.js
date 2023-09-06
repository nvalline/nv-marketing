import styles from '../../../styles/home/testimonials/TestimonialDefault.module.scss';

export default function TestimonialDefault() {
	return (
		<div className={styles.testimonialDefault}>
			<h3 className={styles.testimonialDefault__header}>
				You can believe me that I am working hard on new projects and collecting
				testimonials.
			</h3>
			<p className={styles.testimonialDefault__text}>
				Check back soon for updates and you may always ask me about my recent
				projects!
			</p>
		</div>
	);
}
