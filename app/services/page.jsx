// Components
import Hero from '../components/services/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';

export const metadata = {
	title: 'NV Marketing | Services',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default function Services() {
	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
			</div>
		</main>
	);
}
