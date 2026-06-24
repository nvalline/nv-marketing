// Components
import CtaSection from '../components/misc/CtaSection';
import Terms from '../components/terms/Terms';

export const metadata = {
	title: 'Terms of Use',
	description:
		'Review the Website Terms of Use for NV Marketing, LLC. Learn about acceptable use, intellectual property, disclaimers, and your rights when using our site.',
	alternates: {
		canonical: '/terms'
	}
};

export default function TermsPage() {
	return (
		<main>
			<div className='container'>
				<Terms />
				<CtaSection />
			</div>
		</main>
	);
}
