import Script from 'next/script';

// Components
import Clients from '../components/services/Clients';
import CtaSection from '../components/misc/CtaSection';
import Hero from '../components/services/Hero';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';
import ServiceHubSection from '../components/services/ServiceHubSection';

const servicesSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Service',
			name: 'Web Design',
			description:
				'Custom website design tailored to small businesses in the Intermountain region, focused on user experience, brand identity, and conversion.',
			provider: {
				'@type': 'Organization',
				name: 'NV Marketing',
				url: 'https://nv-marketing.com'
			},
			areaServed: {
				'@type': 'AdministrativeArea',
				name: 'Intermountain Region, US'
			},
			url: 'https://nv-marketing.com/services/web-design'
		},
		{
			'@type': 'Service',
			name: 'Web Development',
			description:
				'Professional web development for small businesses, building fast, accessible, and scalable websites in the Intermountain region.',
			provider: {
				'@type': 'Organization',
				name: 'NV Marketing',
				url: 'https://nv-marketing.com'
			},
			areaServed: {
				'@type': 'AdministrativeArea',
				name: 'Intermountain Region, US'
			},
			url: 'https://nv-marketing.com/services/web-development'
		},
		{
			'@type': 'Service',
			name: 'SEO',
			description:
				'Search engine optimization services to help small businesses in the Intermountain region grow organic traffic and improve search visibility.',
			provider: {
				'@type': 'Organization',
				name: 'NV Marketing',
				url: 'https://nv-marketing.com'
			},
			areaServed: {
				'@type': 'AdministrativeArea',
				name: 'Intermountain Region, US'
			},
			url: 'https://nv-marketing.com/services/seo'
		}
	]
};

export const metadata = {
	title: 'Services',
	description:
		'Explore NV Marketing services: custom web design, web development, and SEO — all priced for small-business budgets in the Intermountain region.',
	alternates: {
		canonical: '/services'
	}
};

export default function Services() {
	return (
		<main>
			<Script
				id='services-schema'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
			/>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<ServiceHubSection />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<Clients />
				<CtaSection />
			</div>
		</main>
	);
}
