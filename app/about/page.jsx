// Components
import Hero from '../components/about/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';

export const metadata = {
	title: 'NV Marketing | About',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default function Home() {
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
			</div>
		</main>
	);
}
