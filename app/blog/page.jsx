// Components
import Archives from '../components/blog/Archives';
import FullLinesLower from '../components/misc/FullLinesLower';
import Hero from '../components/blog/Hero';
import LeftLines from '../components/misc/LeftLines';

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
				<div className='fullAccentLines'>
					<FullLinesLower />
				</div>
			</div>
		</main>
	);
}
