// Components
import CtaSection from './components/misc/CtaSection';
import Hero from './components/home/Hero';
import LeftLines from './components/misc/LeftLines';
import RightLines from './components/misc/RightLines';
import Services from './components/home/Services';
import Testimonials from './components/home/Testimonials';
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
				<Services />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<ValueProps />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Testimonials />
				<CtaSection />
			</div>
		</main>
	);
}
