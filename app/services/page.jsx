// Components
import Clients from '../components/services/Clients';
import CtaSection from '../components/misc/CtaSection';
import Hero from '../components/services/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';
import ServiceDetail from '../components/services/ServiceDetail';

export const metadata = {
	title: 'Services',
	description:
		'NV Marketing provides high quality web design, web development, & SEO services to fit your budget.'
};

export default function Services() {
	const sanityQueries = [
		{ service: 'web design', query: "*[_type == 'services'][0]" },
		{ service: 'web development', query: "*[_type == 'services'][1]" },
		{ service: 'seo services', query: "*[_type == 'services'][2]" }
	];

	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<ServiceDetail query={sanityQueries[0].query} />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<ServiceDetail query={sanityQueries[1].query} rowReverse='reverse' />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<ServiceDetail query={sanityQueries[2].query} />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<Clients />
				<CtaSection />
			</div>
		</main>
	);
}
