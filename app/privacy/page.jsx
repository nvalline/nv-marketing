// Components
import CtaSection from '../components/misc/CtaSection';
import Privacy from '../components/privacy/Privacy';

export const metadata = {
	title: 'Privacy Policy',
	description:
		'Read the NV Marketing, LLC Privacy Policy to learn how we collect, use, and protect your information when you visit our website.',
	alternates: {
		canonical: '/privacy'
	}
};

export default function PrivacyPage() {
	return (
		<main>
			<div className='container'>
				<Privacy />
				<CtaSection />
			</div>
		</main>
	);
}
