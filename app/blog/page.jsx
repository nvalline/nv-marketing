// Components
import Archives from '../components/blog/Archives';
import Hero from '../components/blog/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';

export const metadata = {
	title: 'NV Marketing | Blog',
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
				<Archives />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
			</div>
		</main>
	);
}
