// Components
import Hero from '../components/services/Hero';

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
			</div>
		</main>
	);
}
