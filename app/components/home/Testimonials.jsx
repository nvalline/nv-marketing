// Components
import TestimonialList from './TestimonialList';

// Styles
import styles from '../../styles/components/home/Testimonials.module.scss';

export default function Testimonials() {
	return (
		<section className={styles.testimonials}>
			<div className={styles.testimonials__wrapper}>
				<div className={styles.testimonials__header___block}>
					<h2 className={styles.testimonials__header}>
						Words from Our Partners
					</h2>
					<p className={styles.testimonials__sub_header}>
						Discover the Impact of NV Marketing through the Voices of Those
						We&apos;ve Helped.
					</p>
					<p className={styles.testimonials__sub_header}>
						At NV Marketing, we measure our success by the success stories of
						our partners. Listen to the voices of businesses that have
						experienced the transformative power of our enterprise-level
						websites tailored for small business budgets. Their words stand as a
						testament to our commitment to{' '}
						<span>excellence, innovation, and growth</span>.
					</p>
				</div>
				<div className={styles.testimonials__card___block}>
					<TestimonialList />
				</div>
			</div>
		</section>
	);
}
