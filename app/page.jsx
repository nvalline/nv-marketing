// Components
import Hero from './components/home/Hero';
import LeftLines from './components/images/LeftLines';
import Services from './components/home/Services';

export const metadata = {
	title: 'NV Marketing',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default async function Home() {
	return (
		<main>
			<Hero />
			<div className='leftAccentLines'>
				<LeftLines />
			</div>
			<Services />
		</main>
	);
}
