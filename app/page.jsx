// Components
import Hero from './components/home/Hero';

export const metadata = {
	title: 'NV Marketing',
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

export default function Home() {
	return (
		<main>
			<Hero />
		</main>
	);
}
