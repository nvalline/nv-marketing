// Components
import Hero from './components/home/Hero';
import LeftLines from './components/images/LeftLines';

export const metadata = {
	title: 'NV Marketing',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default function Home() {
	return (
		<main>
			<Hero />
			<div className='leftAccentLines'>
				<LeftLines />
			</div>
		</main>
	);
}
