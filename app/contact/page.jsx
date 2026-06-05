// Components
import Contact from '../components/contact/Contact';
import CtaSection from '../components/misc/CtaSection';
import Hero from '../components/contact/Hero';
import LeftLines from '../components/misc/LeftLines';

export const metadata = {
	title: 'Contact',
	description:
		'Get in touch with NV Marketing to discuss your website, SEO strategy, or any digital marketing needs. We serve small businesses across the Intermountain region.',
	alternates: {
		canonical: '/contact'
	}
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
