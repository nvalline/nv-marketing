// Components
import Hero from './components/home/Hero';
import LeftLines from './components/images/LeftLines';
import RightLines from './components/images/RightLines';
import Services from './components/home/Services';

export const metadata = {
	title: 'NV Marketing',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default async function Home() {
	return (
		<main>
			<div
				style={{ position: 'relative', maxWidth: '1290px', margin: '0 auto' }}
			>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Services />
				<div className='rightAccentLines'>
					<RightLines />
				</div>
			</div>
		</main>
	);
}
