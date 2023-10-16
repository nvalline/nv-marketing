// Components
import CtaSection from './components/misc/CtaSection';
import Hero from './components/home/Hero';
import LeftLines from './components/misc/LeftLines';
import RightLines from './components/misc/RightLines';
import Services from './components/home/Services';
import ServiceList from './components/home/ServiceList';
import Testimonials from './components/home/Testimonials';
import TestimonialList from './components/home/TestimonialList';
import ValueProps from './components/home/ValueProps';

export const metadata = {
	title: 'NV Marketing',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default async function Home() {
	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Services>
					<ServiceList />
				</Services>
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<ValueProps />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Testimonials>
					<TestimonialList />
				</Testimonials>
				<CtaSection />
			</div>
		</main>
	);
}
