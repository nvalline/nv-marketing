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
	name: 'SEO',
	description:
		'Search engine optimization for small businesses in the Intermountain region. Grow organic traffic, rank for the right keywords, and turn searchers into customers.',
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
};

export const metadata = {
	title: 'SEO for Small Businesses in the Intermountain Region',
	description:
		'NV Marketing helps small businesses in Utah, Idaho, and the broader Intermountain region rank higher on Google, drive organic traffic, and convert visitors into leads.',
	alternates: {
		canonical: '/services/seo'
	}
};

const deliverables = [
	'Local SEO optimization for Intermountain region visibility',
	'Keyword research targeting searches your customers actually use',
	'On-page SEO — titles, meta descriptions, headings, and content',
	'SEO optimization included with your subscription',
	'Technical SEO audits and fixes',
	'Monthly performance reporting'
];

const steps = [
	{
		number: '01',
		title: 'Audit',
		description:
			'We start by analyzing your current site, rankings, and competitors. This tells us exactly where the opportunities are and what is holding you back.'
	},
	{
		number: '02',
		title: 'Optimize',
		description:
			'We implement on-page and technical fixes, build out keyword-targeted content, and strengthen your local presence. All with long-term ranking in mind.'
	},
	{
		number: '03',
		title: 'Grow',
		description:
			'SEO compounds over time. We track your rankings, report on progress, and keep refining the strategy so your organic traffic grows month after month.'
	}
];

const faqs = [
	{
		question: 'How long does SEO take to show results?',
		answer:
			'Most businesses start seeing meaningful movement within 3–6 months. SEO is a long-term investment. The results compound over time in a way that paid ads simply cannot replicate.'
	},
	{
		question: 'What does the monthly subscription include?',
		answer:
			'Your subscription covers keyword research, on-page optimization, technical fixes, local SEO, and monthly reporting. Everything needed to keep your rankings climbing.'
	},
	{
		question: 'Do you focus on local SEO or broader search?',
		answer:
			'Both, depending on your goals. For most small businesses in the Intermountain region, local SEO delivers the fastest wins. We build that foundation first, then expand your reach from there.'
	}
];

export default async function SeoPage() {
	return (
		<main>
			<Script
				id='seo-schema'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<div className='container'>
				<ServicePageHero
					heading='SEO for Intermountain Region Small Businesses'
					subheading={
						<>
							If your business is not showing up on Google,{' '}
							<span>your competitors are getting those customers.</span> NV
							Marketing helps small businesses in Utah, Idaho, and the broader
							Intermountain region rank for the searches that matter. This turns
							that traffic into real leads.
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
