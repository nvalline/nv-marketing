import { unstable_noStore as noStore } from 'next/cache';

import { sanityClient } from '../../lib/sanity';

// Components
import TestimonialCard from '../home/TestimonialCard';

// Styles
import styles from '../../styles/components/services/ServiceTestimonial.module.scss';

const getRandomTestimonial = async () => {
	const data = await sanityClient.fetch(`*[_type == 'testimonials']`);
	if (!data?.length) return null;
	return data[Math.floor(Math.random() * data.length)];
};

export default async function ServiceTestimonialBlock({ heading }) {
	noStore();
	const testimonial = await getRandomTestimonial();

	if (!testimonial) return null;

	return (
		<section className={styles.testimonial}>
			<div className={styles.testimonial__wrapper}>
				<h2 className={styles.testimonial__header}>{heading}</h2>
				<div className={styles.testimonial__card_wrapper}>
					<TestimonialCard
						author={testimonial.author}
						company={testimonial.company}
						content={testimonial.content}
						position={testimonial.position}
						rating={testimonial.rating}
					/>
				</div>
			</div>
		</section>
	);
}
