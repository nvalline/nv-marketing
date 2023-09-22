// Components
import Hero from '../components/about/Hero';

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
			</div>
		</main>
	);
}
