// Components
import CallToAction from './components/home/callToAction';
import Hero from './components/home/Hero';
import FullLines from './components/images/FullLinesUpper';
import LeftLines from './components/images/LeftLines';
import RightLines from './components/images/RightLines';
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
				<Testimonials />
				<CallToAction />
			</div>
		</main>
	);
}
