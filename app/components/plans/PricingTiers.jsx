'use client';

import Link from 'next/link';
import { useBilling } from './BillingContext';

// Styles
import styles from '../../styles/components/plans/PricingTiers.module.scss';

const plans = [
	{
		name: 'Essentials',
		monthly: '$150',
		annual: '$125',
		annualNote: 'billed $1,500/yr — save $300',
		summary: 'One-page brochure site',
		description:
			'A clean single-page site that makes you look legit and brings in inquiries.',
		cta: 'Schedule a Call',
		ctaHref: '/contact',
		ctaVariant: 'outline',
		featured: false,
		featuresHeading: "What's included",
		features: [
			'Hero section with clear call-to-action',
			'About, services & testimonials',
			'Contact form',
			'Fully mobile responsive',
			'Hosting, SSL & automatic backups',
			'1 content update per month'
		]
	},
	{
		name: 'Professional',
		badge: 'Most Popular',
		monthly: '$300',
		annual: '$250',
		annualNote: 'billed $3,000/yr — save $600',
		summary: '5 to 7 page site',
		description:
			'A multi-page site built to rank locally and win more leads online.',
		cta: 'Schedule a Call',
		ctaHref: '/contact',
		ctaVariant: 'solid',
		featured: true,
		featuresHeading: 'Everything in Essentials, plus',
		features: [
			'A dedicated page per service (great for local SEO)',
			'Photo gallery / project portfolio',
			'Google Business Profile optimization',
			'On-page SEO + local business schema',
			'Google Analytics setup',
			'2 to 3 content updates per month'
		]
	},
	{
		name: 'Growth',
		monthly: '$500',
		annual: '$417',
		annualNote: 'billed $5,000/yr — save $1,000',
		summary: 'Custom site + lead tools',
		description:
			'A custom site with lead-gen tools that work like a sales rep 24/7.',
		cta: 'Schedule a Call',
		ctaHref: '/contact',
		ctaVariant: 'outline',
		featured: false,
		featuresHeading: 'Everything in Professional, plus',
		features: [
			'Multi-step estimate request / booking form',
			'Before/after gallery with filtering',
			'Blog / content section (we publish)',
			'Auto-pulled Google review display',
			'Monthly performance report',
			'Up to 5 updates/mo + priority support'
		]
	}
];

export default function PricingTiers() {
	const { isAnnual } = useBilling();

	return (
		<section className={styles.pricing_tiers}>
			<div className={styles.pricing_tiers__wrapper}>
				<div className={styles.pricing_tiers__grid}>
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`${styles.pricing_tiers__card}${
								plan.featured
									? ` ${styles['pricing_tiers__card--featured']}`
									: ''
							}`}
						>
							{plan.badge && (
								<span className={styles.pricing_tiers__badge}>
									{plan.badge}
								</span>
							)}

							<h2 className={styles.pricing_tiers__plan_name}>{plan.name}</h2>

							<div className={styles.pricing_tiers__price_block}>
								<span className={styles.pricing_tiers__price}>
									{isAnnual ? plan.annual : plan.monthly}
								</span>
								<span className={styles.pricing_tiers__price_period}>/ mo</span>
							</div>

							<p className={styles.pricing_tiers__annual_note}>
								{isAnnual ? plan.annualNote : ''}
							</p>

							<p className={styles.pricing_tiers__summary}>{plan.summary}</p>

							<p className={styles.pricing_tiers__description}>
								{plan.description}
							</p>

							<Link
								href={plan.ctaHref}
								className={`${styles.pricing_tiers__cta}${
									plan.ctaVariant === 'outline'
										? ` ${styles['pricing_tiers__cta--outline']}`
										: ''
								}`}
							>
								{plan.cta}
							</Link>

							<hr className={styles.pricing_tiers__divider} />

							<p className={styles.pricing_tiers__features_heading}>
								{plan.featuresHeading}
							</p>
							<ul className={styles.pricing_tiers__features}>
								{plan.features.map((feature) => (
									<li key={feature} className={styles.pricing_tiers__feature}>
										<span
											className={styles.pricing_tiers__check}
											aria-hidden='true'
										>
											✓
										</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
