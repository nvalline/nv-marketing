// Components
import Hero from '../components/contact/Hero';
import LeftLines from '../components/misc/LeftLines';

export const metadata = {
	title: 'NV Marketing | Contact',
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
			</div>
		</main>
	);
}
