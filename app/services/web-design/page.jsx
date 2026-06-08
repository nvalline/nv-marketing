import Script from 'next/script';

// Components
import CtaSection from '../../components/misc/CtaSection';
import LeftLines from '../../components/misc/LeftLines';
import RightLines from '../../components/misc/RightLines';
import ServiceDeliverables from '../../components/services/ServiceDeliverables';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServicePageHero from '../../components/services/ServicePageHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonialBlock from '../../components/services/ServiceTestimonialBlock';

const serviceSchema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	name: 'Web Design',
	description:
		'Custom website design for small businesses in the Intermountain region. Focused on brand identity, user experience, and driving conversions.',
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
};

export const metadata = {
	title: 'Web Design for Small Businesses in the Intermountain Region',
	description:
		'NV Marketing designs custom websites for small businesses in Utah, Idaho, and the broader Intermountain region. Brand-aligned, mobile-ready, and built to convert.',
	alternates: {
		canonical: '/services/web-design'
	}
};

const deliverables = [
	'Conversion-focused layout and user experience',
	'Brand-aligned color palette and typography',
	'Performance-optimized pages built for fast load times',
	'Fully responsive design for all screen sizes',
	'Custom desktop and mobile design',
	'Accessibility best practices built in'
];

const steps = [
	{
		number: '01',
		title: 'Discover',
		description:
			'We dig into your brand, goals, and audience in a free strategy call. You walk away with clarity and we walk away with direction.'
	},
	{
		number: '02',
		title: 'Design',
		description:
			'We craft wireframes and mockups tailored to your brand. You review, refine, and approve before a single line of code is written.'
	},
	{
		number: '03',
		title: 'Deliver',
		description:
			'Your polished, responsive design goes live. It is built to make a strong first impression and turn visitors into customers.'
	}
];

const faqs = [
	{
		question: 'How long does a web design project take?',
		answer:
			'Most projects move from kickoff to final approval in 1–4 weeks, depending on scope and revision rounds. We keep the process tight so you can start seeing results sooner.'
	},
	{
		question: 'What does the monthly subscription include?',
		answer:
			'Your subscription covers design, hosting, and ongoing support, everything you need to keep your site live, fast, and up to date. No surprise bills, no technical headaches.'
	},
	{
		question:
			'Can you redesign an existing website instead of starting from scratch?',
		answer:
			'Absolutely. Whether you need a full overhaul or just a refresh, we start by auditing what you already have and build from there.'
	}
];

export default async function WebDesignPage() {
	return (
		<main>
			<Script
				id='web-design-schema'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<div className='container'>
				<ServicePageHero
					heading='Web Design for Intermountain Region Small Businesses'
					subheading={
						<>
							Your website is often the first impression you make.{' '}
							<span>Make it count.</span> NV Marketing creates custom,
							brand-aligned designs that give small businesses in Utah, Idaho,
							and the broader Intermountain region a competitive online presence
							without the enterprise price tag.
						</>
					}
				/>
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<ServiceDeliverables heading="What's Included" items={deliverables} />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<ServiceProcess heading='How It Works' steps={steps} />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<ServiceTestimonialBlock heading='What Our Partners Say' />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<ServiceFAQ heading='Frequently Asked Questions' items={faqs} />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<CtaSection />
			</div>
		</main>
	);
}
