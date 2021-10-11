import PixelBar from '../misc/pixelBar';
import SectionHeader from '../misc/sectionHeader';
import TestimonialCard from './testimonialCard';
import { testimonials } from '../../data/testimonials';

import styles from '../../styles/testimonials/Testimonials.module.scss';

function Testimonials() {
	const testimonialData = testimonials;

	return (
		<section className={styles.testimonials}>
			<PixelBar position='top' margin='1.5' />
			<SectionHeader title='client testimonials' />
			{testimonialData.map((testimonial) => {
				return <TestimonialCard key={testimonial.id} {...testimonial} />;
			})}
			<PixelBar position='bottom' margin='3.5625' />
		</section>
	);
}

export default Testimonials;
