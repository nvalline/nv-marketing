import PixelBar from '../../misc/PixelBar';
import SectionHeader from '../../misc/SectionHeader';
import TestimonialCard from './TestimonialCard';
import TestimonialDefault from './TestimonialDefault';

import styles from '../../../styles/home/testimonials/Testimonials.module.scss';

function Testimonials({ testimonials }) {
	const testimonialData = testimonials.reverse();

	return (
		<section className={styles.testimonials}>
			<PixelBar position='top' />
			<SectionHeader title='client testimonials' />
			<div className={styles.testimonials__block}>
				{testimonialData.length < 1 ? (
					<TestimonialDefault />
				) : (
					testimonialData.map((testimonial) => {
						return <TestimonialCard key={testimonial.id} {...testimonial} />;
					})
				)}
			</div>
			<PixelBar position='bottom' />
		</section>
	);
}

export default Testimonials;
