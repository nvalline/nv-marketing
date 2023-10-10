import { sanityClient } from '../../lib/sanity';

// Components
import TestimonialCard from './TestimonialCard';

const getTestimonials = async () => {
	const query = `*[_type == 'testimonials']`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function TestimonialList() {
	const testimonials = await getTestimonials();

	return (
		<>
			{testimonials.map((testimonial) => {
				return (
					<TestimonialCard
						key={testimonial._id}
						author={testimonial.author}
						company={testimonial.company}
						content={testimonial.content}
						position={testimonial.position}
						rating={testimonial.rating}
					/>
				);
			})}
		</>
	);
}
