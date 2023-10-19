// Components
import Contact from '../components/contact/Contact';
import CtaSection from '../components/misc/CtaSection';
import Hero from '../components/contact/Hero';
import LeftLines from '../components/misc/LeftLines';

export const metadata = {
	title: 'Contact',
	description: 'Contact NV Marketing today to discuss your online presence.'
};

export default function Home() {
	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Contact />
				<CtaSection />
			</div>
		</main>
	);
}
