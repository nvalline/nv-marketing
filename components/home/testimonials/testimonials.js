import PixelBar from '../../misc/pixelBar';
import SectionHeader from '../../misc/sectionHeader';
import TestimonialCard from './testimonialCard';
import { testimonials } from '../../../data/testimonials';

import styles from '../../../styles/home/testimonials/Testimonials.module.scss';

function Testimonials() {
	const testimonialData = testimonials;

	return (
		<section className={styles.testimonials}>
			<PixelBar position='top' />
			<SectionHeader title='client testimonials' />
			<div className={styles.testimonials__block}>
				{testimonialData.map((testimonial) => {
					return <TestimonialCard key={testimonial.id} {...testimonial} />;
				})}
			</div>
			<PixelBar position='bottom' />
		</section>
	);
}

export default Testimonials;
