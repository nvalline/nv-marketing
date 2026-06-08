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
	name: 'Web Development',
	description:
		'Professional web development for small businesses in the Intermountain region. Fast, accessible, and scalable websites built to perform.',
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
};

export const metadata = {
	title: 'Web Development for Small Businesses in the Intermountain Region',
	description:
		'NV Marketing builds fast, accessible websites for small businesses in Utah, Idaho, and the broader Intermountain region. Clean code, reliable hosting, and no technical headaches.',
	alternates: {
		canonical: '/services/web-development'
	}
};

const deliverables = [
	'Custom-coded website tailored to your business',
	'Contact forms and lead capture integrations',
	'Fast load times and Core Web Vitals optimization',
	'Secure, reliable hosting included in your subscription',
	'Mobile-first, fully responsive build',
	'Accessibility best practices built in'
];

const steps = [
	{
		number: '01',
		title: 'Plan',
		description:
			'We map out your site structure, features, and goals before writing a line of code. A clear plan upfront means fewer surprises and a faster build.'
	},
	{
		number: '02',
		title: 'Build',
		description:
			'We develop your site using modern, performant technologies. This is clean code, fast load times, and a mobile-first approach from day one.'
	},
	{
		number: '03',
		title: 'Launch',
		description:
			'We handle deployment, testing, and hosting so your site goes live without a hitch. Ongoing support keeps everything running smoothly after launch.'
	}
];

const faqs = [
	{
		question: 'What technology do you build with?',
		answer:
			'We build with modern web technologies focused on performance and maintainability. Every site is custom, no page builders, no bloated templates slowing you down.'
	},
	{
		question: 'What does the monthly subscription include?',
		answer:
			'Your subscription covers development, hosting, and ongoing support. Everything you need to keep your site live, fast, and up to date. No surprise bills, no technical headaches.'
	},
	{
		question: 'What happens if I want changes after launch?',
		answer:
			'Your plan includes a revision window after launch to make sure everything is just right. After that period, additional changes are billed at an hourly rate. We will always give you a clear estimate before any work begins.'
	}
];

export default async function WebDevelopmentPage() {
	return (
		<main>
			<Script
				id='web-development-schema'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<div className='container'>
				<ServicePageHero
					heading='Web Development for Intermountain Region Small Businesses'
					subheading={
						<>
							A great-looking site means nothing if it{' '}
							<span>loads slowly or breaks on mobile.</span> NV Marketing builds
							fast, reliable websites for small businesses in Utah, Idaho, and
							the broader Intermountain region. This means clean code, zero
							technical headaches, and hosting included.
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
