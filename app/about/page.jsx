// Components
import Bio from '../components/about/Bio';
import Commitments from '../components/about/Commitments';
import CoreValues from '../components/about/CoreValues';
import CtaSection from '../components/misc/CtaSection';
import Hero from '../components/about/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';

export const metadata = {
	title: 'About',
	description:
		'NV Marketing was born in the heart of the Rocky Mountains and strives to serve all.'
};

export default function Home() {
	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Bio />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<CoreValues />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Commitments />
				<CtaSection />
			</div>
		</main>
	);
}
